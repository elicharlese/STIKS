import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              How we collect, use, and protect your information on the STIKS platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="prose prose-gray max-w-none">
            <h2>1. Introduction</h2>
            <p>
              STIKS is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our decentralized financial platform.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <ul>
              <li>
                <strong>Wallet Information:</strong> When you connect your cryptocurrency wallet to our platform, we
                collect your wallet address and transaction history on the platform.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect data about how you interact with our platform, including the
                products you view, the investments you make, and other actions you take.
              </li>
              <li>
                <strong>Device Information:</strong> We collect information about the device you use to access our
                platform, including IP address, browser type, and operating system.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, maintaining, and improving our platform</li>
              <li>Processing your transactions and investments</li>
              <li>Communicating with you about your account and investments</li>
              <li>Analyzing usage patterns to enhance user experience</li>
              <li>Complying with legal obligations</li>
              <li>Detecting and preventing fraud and security incidents</li>
            </ul>

            <h2>4. Blockchain Data</h2>
            <p>
              Please note that blockchain technology is inherently transparent, and transactions on the blockchain are
              public. While we do not publish your personal information on the blockchain, your wallet address and
              transaction details are visible on the blockchain.
            </p>

            <h2>5. Information Sharing</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> We may share your information with third-party service providers who
                help us operate our platform.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in
                response to valid requests by public authorities.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets,
                your information may be transferred as part of that transaction.
              </li>
            </ul>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information. However, no
              method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to object to processing of your information</li>
              <li>The right to data portability</li>
            </ul>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <Link href="mailto:privacy@stiks.finance" className="text-royal hover:text-gold">
                privacy@stiks.finance
              </Link>
              .
            </p>

            <p className="text-sm text-muted-foreground mt-8">Last updated: March 16, 2023</p>
          </div>
        </div>
      </section>
    </main>
  )
}

