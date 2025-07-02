use solana_client::rpc_client::RpcClient;
use solana_sdk::{
    commitment_config::CommitmentConfig,
    pubkey::Pubkey,
    signature::{Keypair, Signature},
    signer::Signer,
    transaction::Transaction,
    system_instruction,
};
use rust_decimal::Decimal;
use std::str::FromStr;
use uuid::Uuid;
use chrono::{DateTime, Utc};

use crate::types::*;
use crate::error::{ServiceError, ServiceResult};

pub struct SolanaService {
    client: RpcClient,
    authority: Keypair,
    program_id: Pubkey,
}

impl SolanaService {
    pub async fn new() -> ServiceResult<Self> {
        let rpc_url = std::env::var("SOLANA_RPC_URL")
            .unwrap_or_else(|_| "https://api.mainnet-beta.solana.com".to_string());
        
        let private_key = std::env::var("SOLANA_PRIVATE_KEY")
            .map_err(|_| ServiceError::Internal("SOLANA_PRIVATE_KEY not set".to_string()))?;
        
        let program_id_str = std::env::var("STIKS_PROGRAM_ID")
            .map_err(|_| ServiceError::Internal("STIKS_PROGRAM_ID not set".to_string()))?;

        let client = RpcClient::new_with_commitment(rpc_url, CommitmentConfig::confirmed());
        
        let authority = Self::keypair_from_base58(&private_key)?;
        let program_id = Pubkey::from_str(&program_id_str)
            .map_err(|e| ServiceError::SolanaSdk(format!("Invalid program ID: {}", e)))?;

        Ok(Self {
            client,
            authority,
            program_id,
        })
    }

    fn keypair_from_base58(private_key: &str) -> ServiceResult<Keypair> {
        let bytes = bs58::decode(private_key)
            .into_vec()
            .map_err(|e| ServiceError::SolanaSdk(format!("Invalid base58 key: {}", e)))?;
        
        Keypair::from_bytes(&bytes)
            .map_err(|e| ServiceError::SolanaSdk(format!("Invalid keypair: {}", e)))
    }

    pub async fn get_wallet_balance(&self, address: &str) -> ServiceResult<WalletBalance> {
        let pubkey = Pubkey::from_str(address)
            .map_err(|_| ServiceError::InvalidWallet(address.to_string()))?;

        // Get SOL balance
        let sol_balance = self.client.get_balance(&pubkey)?;
        let sol_balance_decimal = Decimal::from(sol_balance) / Decimal::from(1_000_000_000u64); // Convert lamports to SOL

        // Get token balances
        let token_accounts = self.client.get_token_accounts_by_owner(
            &pubkey,
            solana_client::rpc_client::TokenAccountsFilter::ProgramId(spl_token::ID),
        )?;

        let mut token_balances = Vec::new();
        for account in token_accounts {
            if let Ok(token_account) = spl_token::state::Account::unpack(&account.account.data) {
                token_balances.push(TokenBalance {
                    mint: token_account.mint.to_string(),
                    amount: Decimal::from(token_account.amount),
                    decimals: token_account.amount.to_string().len() as u8, // Simplified
                    ui_amount: Decimal::from(token_account.amount), // Simplified
                });
            }
        }

        Ok(WalletBalance {
            address: address.to_string(),
            sol_balance: sol_balance_decimal,
            token_balances,
        })
    }

    pub async fn send_transaction(&self, request: SendTransactionRequest) -> ServiceResult<TransactionResponse> {
        let from_pubkey = Pubkey::from_str(&request.from_wallet)
            .map_err(|_| ServiceError::InvalidWallet(request.from_wallet))?;
        
        let to_pubkey = Pubkey::from_str(&request.to_wallet)
            .map_err(|_| ServiceError::InvalidWallet(request.to_wallet))?;

        let lamports = (request.amount * Decimal::from(1_000_000_000u64)).to_u64().unwrap_or(0);

        let recent_blockhash = self.client.get_latest_blockhash()?;

        let instruction = system_instruction::transfer(&from_pubkey, &to_pubkey, lamports);
        let transaction = Transaction::new_signed_with_payer(
            &[instruction],
            Some(&self.authority.pubkey()),
            &[&self.authority],
            recent_blockhash,
        );

        let signature = self.client.send_and_confirm_transaction(&transaction)?;

        Ok(TransactionResponse {
            signature: signature.to_string(),
            status: "confirmed".to_string(),
            slot: None,
            confirmation: ConfirmationStatus::Confirmed,
        })
    }

    pub async fn mint_product(&self, request: MintProductRequest) -> ServiceResult<MintResponse> {
        // This is a simplified implementation
        // In a real implementation, you would interact with your custom Solana program
        
        // Create a new mint for the product
        let mint_keypair = Keypair::new();
        let recent_blockhash = self.client.get_latest_blockhash()?;

        // Create mint account instruction (simplified)
        let rent = self.client.get_minimum_balance_for_rent_exemption(spl_token::state::Mint::LEN)?;
        
        let create_account_instruction = system_instruction::create_account(
            &self.authority.pubkey(),
            &mint_keypair.pubkey(),
            rent,
            spl_token::state::Mint::LEN as u64,
            &spl_token::ID,
        );

        let initialize_mint_instruction = spl_token::instruction::initialize_mint(
            &spl_token::ID,
            &mint_keypair.pubkey(),
            &self.authority.pubkey(),
            None,
            request.decimals,
        )?;

        let transaction = Transaction::new_signed_with_payer(
            &[create_account_instruction, initialize_mint_instruction],
            Some(&self.authority.pubkey()),
            &[&self.authority, &mint_keypair],
            recent_blockhash,
        );

        let signature = self.client.send_and_confirm_transaction(&transaction)?;

        Ok(MintResponse {
            product_mint: mint_keypair.pubkey().to_string(),
            transaction_signature: signature.to_string(),
            metadata_account: "".to_string(), // Would be implemented with Metaplex
        })
    }

    pub async fn create_investment(&self, request: CreateInvestmentRequest) -> ServiceResult<InvestmentResponse> {
        // Simplified implementation - would interact with your custom program
        let investment_id = Uuid::new_v4();
        let nft_mint = Keypair::new();
        
        // Mock transaction for demonstration
        let recent_blockhash = self.client.get_latest_blockhash()?;
        let signature = Signature::new_unique(); // Mock signature

        let maturity_date = Utc::now() + chrono::Duration::days(request.duration as i64);

        Ok(InvestmentResponse {
            investment_id,
            nft_mint: nft_mint.pubkey().to_string(),
            transaction_signature: signature.to_string(),
            maturity_date,
        })
    }

    pub async fn redeem_investment(
        &self,
        investment_id: Uuid,
        request: RedeemInvestmentRequest,
    ) -> ServiceResult<TransactionResponse> {
        // Simplified implementation
        let signature = Signature::new_unique(); // Mock signature

        Ok(TransactionResponse {
            signature: signature.to_string(),
            status: "confirmed".to_string(),
            slot: None,
            confirmation: ConfirmationStatus::Confirmed,
        })
    }

    pub async fn get_transaction_status(&self, signature: &str) -> ServiceResult<TransactionStatus> {
        let sig = Signature::from_str(signature)
            .map_err(|_| ServiceError::SolanaSdk("Invalid signature".to_string()))?;

        match self.client.get_signature_status(&sig)? {
            Some(result) => {
                let status = match result {
                    Ok(_) => "success",
                    Err(_) => "failed",
                };

                Ok(TransactionStatus {
                    signature: signature.to_string(),
                    status: status.to_string(),
                    slot: None,
                    block_time: None,
                    confirmation_status: ConfirmationStatus::Confirmed,
                    err: None,
                    fee: None,
                })
            }
            None => Err(ServiceError::TransactionFailed("Transaction not found".to_string())),
        }
    }

    pub async fn get_on_chain_products(&self) -> ServiceResult<Vec<OnChainProduct>> {
        // This would query your on-chain program for all products
        // For now, returning empty vec as this requires custom program implementation
        Ok(vec![])
    }
}
