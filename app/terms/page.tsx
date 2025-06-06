import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-royal text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Please read these terms carefully before using the STIKS platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="prose prose-gray max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the STIKS platform, you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
              using or accessing this platform.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              STIKS is a decentralized financial platform that offers Cryptocurrency Collateralized Debt Obligations
              (CDOs) and other financial products. The platform allows users to invest in various tranches of CDOs and
              other structured financial products.
            </p>

            <h2>3. User Eligibility</h2>
            <p>
              You must be at least 18 years old and capable of entering into legally binding contracts to use the STIKS
              platform. By using the platform, you represent and warrant that you meet these eligibility requirements.
            </p>

            <h2>4. Account Registration</h2>
            <p>
              To access certain features of the platform, you may be required to connect a cryptocurrency wallet. You
              are responsible for maintaining the confidentiality of your wallet credentials and for all activities that
              occur under your account.
            </p>

            <h2>5. Risk Disclosure</h2>
            <p>
              Investing in cryptocurrency and decentralized finance products involves significant risk. The value of
              your investments can fluctuate, and you may lose the entire value of your investment. You should only
              invest funds that you are willing to lose.
            </p>

            <h2>6. Platform Rules</h2>
            <p>Users of the STIKS platform agree to:</p>
            <ul>
              <li>Provide accurate and complete information when connecting their wallet</li>
              <li>Not use the platform for any illegal or unauthorized purpose</li>
              <li>Not attempt to interfere with the proper functioning of the platform</li>
              <li>Not attempt to access data not intended for them</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2>7. Intellectual Property</h2>
            <p>
              The STIKS platform, including its content, features, and functionality, is owned by STIKS and is protected
              by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, STIKS shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in
              connection with your use of the platform.
            </p>

            <h2>9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
              STIKS is established, without regard to its conflict of law provisions.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              STIKS reserves the right to modify or replace these Terms at any time. It is your responsibility to check
              these Terms periodically for changes. Your continued use of the platform following the posting of any
              changes constitutes acceptance of those changes.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <Link href="mailto:legal@stiks.finance" className="text-royal hover:text-gold">
                legal@stiks.finance
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

