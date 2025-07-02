use serde::{Deserialize, Serialize};
use chrono::{DateTime, Utc};
use rust_decimal::Decimal;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct ApiResponse<T> {
    pub success: bool,
    pub data: Option<T>,
    pub error: Option<String>,
    pub timestamp: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct WalletBalance {
    pub address: String,
    pub sol_balance: Decimal,
    pub token_balances: Vec<TokenBalance>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TokenBalance {
    pub mint: String,
    pub amount: Decimal,
    pub decimals: u8,
    pub ui_amount: Decimal,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SendTransactionRequest {
    pub from_wallet: String,
    pub to_wallet: String,
    pub amount: Decimal,
    pub token_mint: Option<String>,
    pub transaction_type: TransactionType,
    pub metadata: Option<serde_json::Value>,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum TransactionType {
    Transfer,
    Investment,
    Redemption,
    Mint,
    Burn,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TransactionResponse {
    pub signature: String,
    pub status: String,
    pub slot: Option<u64>,
    pub confirmation: ConfirmationStatus,
}

#[derive(Debug, Serialize, Deserialize)]
pub enum ConfirmationStatus {
    Processed,
    Confirmed,
    Finalized,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MintProductRequest {
    pub product_name: String,
    pub product_type: String,
    pub total_supply: Decimal,
    pub decimals: u8,
    pub authority: String,
    pub metadata: ProductMetadata,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ProductMetadata {
    pub description: String,
    pub risk_level: String,
    pub apy: Decimal,
    pub duration_days: u32,
    pub underlying_assets: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MintResponse {
    pub product_mint: String,
    pub transaction_signature: String,
    pub metadata_account: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CreateInvestmentRequest {
    pub investor_wallet: String,
    pub product_id: String,
    pub amount: Decimal,
    pub duration: u32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct InvestmentResponse {
    pub investment_id: Uuid,
    pub nft_mint: String,
    pub transaction_signature: String,
    pub maturity_date: DateTime<Utc>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RedeemInvestmentRequest {
    pub investor_wallet: String,
    pub nft_mint: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TransactionStatus {
    pub signature: String,
    pub status: String,
    pub slot: Option<u64>,
    pub block_time: Option<i64>,
    pub confirmation_status: ConfirmationStatus,
    pub err: Option<String>,
    pub fee: Option<u64>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct OnChainProduct {
    pub mint: String,
    pub name: String,
    pub symbol: String,
    pub total_supply: Decimal,
    pub circulating_supply: Decimal,
    pub metadata: ProductMetadata,
    pub is_active: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ValidateTransactionRequest {
    pub signature: String,
    pub expected_amount: Decimal,
    pub expected_recipient: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ValidationResponse {
    pub is_valid: bool,
    pub actual_amount: Option<Decimal>,
    pub actual_recipient: Option<String>,
    pub confirmation_status: ConfirmationStatus,
}
