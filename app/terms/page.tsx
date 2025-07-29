export default function TermsPage() {
  return (
    <main className="bg-neutral min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary text-center">Terms of Use</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-sm text-primary mb-6">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Agreement to Terms</h2>
            <p className="text-primary mb-4">
              By accessing and using the Albion Ministerial Association website (the "Service"), you agree to be bound 
              by these Terms of Use ("Terms"). If you disagree with any part of these terms, you may not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Purpose and Mission</h2>
            <p className="text-primary mb-4">
              The Albion Ministerial Association website serves to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-primary">
              <li>Connect community members with local churches and faith-based organizations</li>
              <li>Provide information about community resources and assistance programs</li>
              <li>Facilitate unity and collaboration among churches in Albion, Michigan</li>
              <li>Share information about events and activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Acceptable Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-secondary mb-2">You agree to use this Service only for lawful purposes and in accordance with these Terms.</h3>
                <p className="text-primary mb-4">You agree NOT to use the Service:</p>
                <ul className="list-disc pl-6 space-y-2 text-primary">
                  <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Content and Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-secondary mb-2">Church and Resource Information</h3>
                <p className="text-primary">
                  We strive to provide accurate and up-to-date information about churches and community resources. 
                  However, we cannot guarantee the accuracy, completeness, or timeliness of all information. 
                  Please contact organizations directly to verify details.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-secondary mb-2">User-Submitted Content</h3>
                <p className="text-primary">
                  By submitting content to us (such as through contact forms), you grant us the right to use, 
                  reproduce, and distribute such content solely for the purpose of providing our services and responding to your inquiries.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Donations</h2>
            <p className="text-primary mb-4">
              Any donations made through our website are voluntary and will be used to support the mission and 
              activities of the Albion Ministerial Association. Donations are not refundable unless required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Third-Party Services</h2>
            <p className="text-primary mb-4">
              Our Service may contain links to third-party websites or services (such as individual church websites, 
              Google Maps, or social media platforms). We are not responsible for the content, privacy policies, 
              or practices of these third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Disclaimer of Warranties</h2>
            <p className="text-primary mb-4">
              The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, 
              the Albion Ministerial Association excludes all representations, warranties, and conditions relating to our Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Limitation of Liability</h2>
            <p className="text-primary mb-4">
              In no event shall the Albion Ministerial Association be liable for any indirect, incidental, special, 
              consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses, resulting from your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Changes to Terms</h2>
            <p className="text-primary mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Governing Law</h2>
            <p className="text-primary mb-4">
              These Terms shall be interpreted and governed by the laws of the State of Michigan, without regard to its 
              conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Information</h2>
            <p className="text-primary mb-4">
              If you have any questions about these Terms of Use, please contact us:
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