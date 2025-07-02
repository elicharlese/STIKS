use axum::{http::StatusCode, response::Json as ResponseJson};
use serde_json::json;
use thiserror::Error;

#[derive(Error, Debug)]
pub enum ServiceError {
    #[error("Solana client error: {0}")]
    SolanaClient(#[from] solana_client::client_error::ClientError),
    
    #[error("Solana SDK error: {0}")]
    SolanaSdk(String),
    
    #[error("Invalid wallet address: {0}")]
    InvalidWallet(String),
    
    #[error("Insufficient funds")]
    InsufficientFunds,
    
    #[error("Transaction failed: {0}")]
    TransactionFailed(String),
    
    #[error("Product not found: {0}")]
    ProductNotFound(String),
    
    #[error("Investment not found: {0}")]
    InvestmentNotFound(String),
    
    #[error("Serialization error: {0}")]
    Serialization(#[from] serde_json::Error),
    
    #[error("Network error: {0}")]
    Network(#[from] reqwest::Error),
    
    #[error("Internal error: {0}")]
    Internal(String),
}

impl From<ServiceError> for (StatusCode, ResponseJson<serde_json::Value>) {
    fn from(err: ServiceError) -> Self {
        let (status, message) = match err {
            ServiceError::InvalidWallet(_) => (StatusCode::BAD_REQUEST, err.to_string()),
            ServiceError::InsufficientFunds => (StatusCode::BAD_REQUEST, err.to_string()),
            ServiceError::ProductNotFound(_) => (StatusCode::NOT_FOUND, err.to_string()),
            ServiceError::InvestmentNotFound(_) => (StatusCode::NOT_FOUND, err.to_string()),
            ServiceError::TransactionFailed(_) => (StatusCode::BAD_REQUEST, err.to_string()),
            ServiceError::Network(_) => (StatusCode::SERVICE_UNAVAILABLE, "Network error".to_string()),
            _ => (StatusCode::INTERNAL_SERVER_ERROR, "Internal server error".to_string()),
        };

        let body = json!({
            "success": false,
            "error": message,
            "timestamp": chrono::Utc::now()
        });

        (status, ResponseJson(body))
    }
}

pub type ServiceResult<T> = Result<T, ServiceError>;
