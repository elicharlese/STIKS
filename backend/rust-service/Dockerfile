# Multi-stage build for Rust service
FROM rust:1.75 as builder

WORKDIR /app

# Copy cargo files
COPY Cargo.toml Cargo.lock ./

# Create a dummy main.rs to build dependencies
RUN mkdir src && echo "fn main() {}" > src/main.rs

# Build dependencies
RUN cargo build --release
RUN rm src/main.rs

# Copy source code
COPY src ./src

# Build application
RUN cargo build --release

# Runtime stage
FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy the binary from builder stage
COPY --from=builder /app/target/release/stiks-solana-service ./stiks-solana-service

# Create non-root user
RUN useradd -r -s /bin/false stiks
USER stiks

EXPOSE 8080

CMD ["./stiks-solana-service"]
