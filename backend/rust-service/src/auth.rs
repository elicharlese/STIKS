use axum::{
    http::{Request, StatusCode},
    middleware::Next,
    response::Response,
};

pub struct ApiKeyAuth;

impl ApiKeyAuth {
    pub async fn middleware<B>(
        req: Request<B>,
        next: Next<B>,
    ) -> Result<Response, StatusCode> {
        // Skip auth for health check
        if req.uri().path() == "/health" {
            return Ok(next.run(req).await);
        }

        let api_key = std::env::var("API_KEY").unwrap_or_else(|_| "default_key".to_string());
        
        let auth_header = req
            .headers()
            .get("x-api-key")
            .and_then(|value| value.to_str().ok());

        if let Some(provided_key) = auth_header {
            if provided_key == api_key {
                return Ok(next.run(req).await);
            }
        }

        Err(StatusCode::UNAUTHORIZED)
    }
}
