export default function PrivacyPage() {
  return (
    <main className="bg-neutral min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary text-center">Privacy Policy</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-sm text-primary mb-6">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Overview</h2>
            <p className="text-primary mb-4">
              The Albion Ministerial Association ("AMA," "we," "us," or "our") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website 
              or interact with our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-secondary mb-2">Contact Information</h3>
                <p className="text-primary">
                  When you contact us through our website forms, we collect your name, email address, and message content 
                  to respond to your inquiries and provide assistance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-secondary mb-2">Website Usage Information</h3>
                <p className="text-primary">
                  We may collect basic website usage information such as pages visited and time spent on our site 
                  to improve our services and user experience.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-primary">
              <li>To respond to your inquiries and provide requested information</li>
              <li>To connect you with appropriate community resources and assistance</li>
              <li>To improve our website and services</li>
              <li>To communicate about AMA events and activities (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Information Sharing</h2>
            <p className="text-primary mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primary">
              <li>When connecting you with member churches or community resources you've requested</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>With trusted service providers who assist in operating our website (under confidentiality agreements)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Data Security</h2>
            <p className="text-primary">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Third-Party Services</h2>
            <p className="text-primary mb-4">
              Our website may use third-party services such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primary">
              <li>Google Maps for location services</li>
              <li>Google Calendar for event information</li>
              <li>Google Sheets for church and resource data</li>
            </ul>
            <p className="text-primary mt-4">
              These services have their own privacy policies, which we encourage you to review.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Your Rights</h2>
            <p className="text-primary mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-primary">
              <li>Access and review any personal information we have about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of communications from us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Changes to This Policy</h2>
            <p className="text-primary">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page with an updated effective date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h2>
            <p className="text-primary mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-surface p-4 rounded-lg">
              <p className="text-primary">
                <strong>Albion Ministerial Association</strong><br />
                PO Box 481<br />
                Albion, MI 49224<br />
                Phone: <a href="tel:517-494-0499" className="text-secondary hover:text-accent">517-494-0499</a><br />
                Email: <a href="mailto:Albionministers@gmail.com" className="text-secondary hover:text-accent">Albionministers@gmail.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}