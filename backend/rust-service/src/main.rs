use axum::{
    extract::{Extension, Json, Path, Query},
    http::StatusCode,
    response::Json as ResponseJson,
    routing::{get, post},
    Router,
};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::sync::Arc;
use tokio::net::TcpListener;
use tower_http::cors::CorsLayer;
use tracing::{info, warn, error};
use uuid::Uuid;

mod solana;
mod types;
mod error;
mod auth;

use solana::SolanaService;
use types::*;
use error::{ServiceError, ServiceResult};
use auth::ApiKeyAuth;

#[derive(Clone)]
struct AppState {
    solana_service: Arc<SolanaService>,
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Initialize tracing
    tracing_subscriber::fmt()
        .with_env_filter(tracing_subscriber::EnvFilter::from_default_env())
        .init();

    // Load environment variables
    dotenv::dotenv().ok();

    // Initialize Solana service
    let solana_service = Arc::new(SolanaService::new().await?);

    let app_state = AppState { solana_service };

    // Build our application with routes
    let app = Router::new()
        .route("/health", get(health_check))
        .route("/api/v1/wallet/balance/:address", get(get_wallet_balance))
        .route("/api/v1/transaction/send", post(send_transaction))
        .route("/api/v1/product/mint", post(mint_product))
        .route("/api/v1/investment/create", post(create_investment))
        .route("/api/v1/investment/:id/redeem", post(redeem_investment))
        .route("/api/v1/transaction/:signature", get(get_transaction_status))
        .route("/api/v1/products", get(get_on_chain_products))
        .layer(Extension(app_state))
        .layer(CorsLayer::permissive())
        .layer(axum::middleware::from_fn(ApiKeyAuth::middleware));

    let host = std::env::var("HOST").unwrap_or_else(|_| "0.0.0.0".to_string());
    let port = std::env::var("PORT").unwrap_or_else(|_| "8080".to_string());
    let addr = format!("{}:{}", host, port);

    info!("Starting STIKS Solana Service on {}", addr);

    let listener = TcpListener::bind(&addr).await?;
    axum::serve(listener, app).await?;

    Ok(())
}

async fn health_check() -> ServiceResult<ResponseJson<ApiResponse<String>>> {
    Ok(ResponseJson(ApiResponse {
        success: true,
        data: Some("STIKS Solana Service is healthy".to_string()),
        error: None,
        timestamp: chrono::Utc::now(),
    }))
}

async fn get_wallet_balance(
    Path(address): Path<String>,
    Extension(state): Extension<AppState>,
) -> ServiceResult<ResponseJson<ApiResponse<WalletBalance>>> {
    info!("Getting balance for wallet: {}", address);

    let balance = state.solana_service.get_wallet_balance(&address).await?;

    Ok(ResponseJson(ApiResponse {
        success: true,
        data: Some(balance),
        error: None,
        timestamp: chrono::Utc::now(),
    }))
}

async fn send_transaction(
    Extension(state): Extension<AppState>,
    Json(request): Json<SendTransactionRequest>,
) -> ServiceResult<ResponseJson<ApiResponse<TransactionResponse>>> {
    info!("Sending transaction: {:?}", request.transaction_type);

    let response = state.solana_service.send_transaction(request).await?;

    Ok(ResponseJson(ApiResponse {
        success: true,
        data: Some(response),
        error: None,
        timestamp: chrono::Utc::now(),
    }))
}

async fn mint_product(
    Extension(state): Extension<AppState>,
    Json(request): Json<MintProductRequest>,
) -> ServiceResult<ResponseJson<ApiResponse<MintResponse>>> {
    info!("Minting product: {}", request.product_name);

    let response = state.solana_service.mint_product(request).await?;

    Ok(ResponseJson(ApiResponse {
        success: true,
        data: Some(response),
        error: None,
        timestamp: chrono::Utc::now(),
    }))
}

async fn create_investment(
    Extension(state): Extension<AppState>,
    Json(request): Json<CreateInvestmentRequest>,
) -> ServiceResult<ResponseJson<ApiResponse<InvestmentResponse>>> {
    info!("Creating investment for product: {}", request.product_id);

    let response = state.solana_service.create_investment(request).await?;

    Ok(ResponseJson(ApiResponse {
        success: true,
        data: Some(response),
        error: None,
        timestamp: chrono::Utc::now(),
    }))
}

async fn redeem_investment(
    Path(investment_id): Path<Uuid>,
    Extension(state): Extension<AppState>,
    Json(request): Json<RedeemInvestmentRequest>,
) -> ServiceResult<ResponseJson<ApiResponse<TransactionResponse>>> {
    info!("Redeeming investment: {}", investment_id);

    let response = state.solana_service.redeem_investment(investment_id, request).await?;

    Ok(ResponseJson(ApiResponse {
        success: true,
        data: Some(response),
        error: None,
        timestamp: chrono::Utc::now(),
    }))
}

async fn get_transaction_status(
    Path(signature): Path<String>,
    Extension(state): Extension<AppState>,
) -> ServiceResult<ResponseJson<ApiResponse<TransactionStatus>>> {
    info!("Getting transaction status: {}", signature);

    let status = state.solana_service.get_transaction_status(&signature).await?;

    Ok(ResponseJson(ApiResponse {
        success: true,
        data: Some(status),
        error: None,
        timestamp: chrono::Utc::now(),
    }))
}

async fn get_on_chain_products(
    Extension(state): Extension<AppState>,
    Query(params): Query<HashMap<String, String>>,
) -> ServiceResult<ResponseJson<ApiResponse<Vec<OnChainProduct>>>> {
    info!("Getting on-chain products");

    let products = state.solana_service.get_on_chain_products().await?;

    Ok(ResponseJson(ApiResponse {
        success: true,
        data: Some(products),
        error: None,
        timestamp: chrono::Utc::now(),
    }))
}
