export default function DisclaimerPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Risk Disclaimer</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Important information about the risks associated with using the STIKS platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="prose prose-gray max-w-none">
            <h2>1. Investment Risks</h2>
            <p>
              Investing in cryptocurrency and decentralized finance products involves significant risk. The value of
              your investments can fluctuate, and you may lose the entire value of your investment. Past performance is
              not indicative of future results.
            </p>

            <h2>2. Cryptocurrency Volatility</h2>
            <p>
              Cryptocurrencies are highly volatile assets. Their value can change significantly in a short period of
              time, which can affect the value of your investments on the STIKS platform.
            </p>

            <h2>3. Smart Contract Risks</h2>
            <p>
              The STIKS platform operates using smart contracts on the blockchain. Smart contracts may contain bugs,
              vulnerabilities, or other issues that could lead to the loss of funds. While we take extensive measures to
              audit and secure our smart contracts, we cannot guarantee they are entirely free from vulnerabilities.
            </p>

            <h2>4. Regulatory Risks</h2>
            <p>
              The regulatory landscape for cryptocurrencies and decentralized finance is evolving. Changes in laws or
              regulations may adversely affect the operation of the STIKS platform or the value of your investments.
            </p>

            <h2>5. Market Risks</h2>
            <p>
              The cryptocurrency market is subject to various market risks, including liquidity risk, counterparty risk,
              and systemic risk. These risks can affect the performance of your investments on the STIKS platform.
            </p>

            <h2>6. Technical Risks</h2>
            <p>Using the STIKS platform involves various technical risks, including:</p>
            <ul>
              <li>Wallet security risks</li>
              <li>Network congestion and high transaction fees</li>
              <li>Blockchain forks or technical failures</li>
              <li>Software bugs or errors</li>
              <li>Cyber attacks or security breaches</li>
            </ul>

            <h2>7. No Investment Advice</h2>
            <p>
              The information provided on the STIKS platform is for informational purposes only and does not constitute
              investment advice. We do not provide personalized investment recommendations or financial advice.
            </p>

            <h2>8. Do Your Own Research</h2>
            <p>
              Before making any investment decisions, you should conduct your own research and consult with financial
              advisors. You should carefully consider your investment objectives, level of experience, and risk
              appetite.
            </p>

            <h2>9. No Guarantees</h2>
            <p>
              STIKS does not guarantee any returns on your investments. The expected returns mentioned on our platform
              are estimates based on historical data and market conditions, and actual returns may vary significantly.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, STIKS shall not be liable for any losses, damages, or claims
              arising from your use of the platform or your investments.
            </p>

            <h2>11. Risk Acknowledgment</h2>
            <p>
              By using the STIKS platform, you acknowledge and accept all the risks associated with cryptocurrency
              investments and decentralized finance products.
            </p>

            <p className="text-sm text-muted-foreground mt-8">Last updated: March 16, 2023</p>
          </div>
        </div>
      </section>
    </main>
  )
}

