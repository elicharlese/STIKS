export interface SolanaTransaction {
  signature: string;
  slot: number;
  blockTime: number;
  confirmations: number;
  err?: any;
  memo?: string;
  fee: number;
}

export interface SolanaAccount {
  pubkey: string;
  lamports: number;
  owner: string;
  executable: boolean;
  rentEpoch: number;
}

export interface TokenAccount {
  address: string;
  mint: string;
  owner: string;
  amount: string;
  decimals: number;
  uiAmount: number;
}

export interface BlockchainConfig {
  rpcUrl: string;
  cluster: 'mainnet-beta' | 'testnet' | 'devnet';
  programId: string;
  treasuryAccount: string;
}

export interface OnChainProduct {
  address: string;
  mint: string;
  name: string;
  symbol: string;
  decimals: number;
  supply: string;
  metadata: OnChainMetadata;
}

export interface OnChainMetadata {
  name: string;
  symbol: string;
  description: string;
  image: string;
  external_url: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
}

export interface WalletConnection {
  user_id: string;
  wallet_address: string;
  wallet_type: 'phantom' | 'solflare' | 'ledger' | 'sollet';
  is_verified: boolean;
  connected_at: Date;
  last_used: Date;
}

export interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  proposer: string;
  status: 'active' | 'passed' | 'failed' | 'executed' | 'cancelled';
  voting_starts: Date;
  voting_ends: Date;
  execution_date?: Date;
  votes_for: number;
  votes_against: number;
  votes_abstain: number;
  quorum_required: number;
  created_at: Date;
}

export interface Vote {
  id: string;
  proposal_id: string;
  voter: string;
  vote: 'for' | 'against' | 'abstain';
  voting_power: number;
  transaction_signature: string;
  created_at: Date;
}
