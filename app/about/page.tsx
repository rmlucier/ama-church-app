export default function AboutPage() {
  return (
    <main className="bg-neutral min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary text-center">About AMA</h1>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <section className="bg-surface p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-primary">Our Mission</h2>
            <p className="text-primary">
              The Albion Ministerial Association exists to foster unity, shared purpose, and collaboration among churches. We support senior leaders and faith-based organizations in serving the community, advancing the message of Christ, fulfilling the Great Commission, and encouraging mutual support in both faith and action.
            </p>
          </section>

          <section className="bg-surface p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-primary">Our Vision</h2>
            <p className="text-primary">
              To see the churches of Albion walking in unity, empowered to transform lives through Christ-centered service, collaborative leadership, and support Spirit-led outreach that brings hope, healing, and revival to our community.
            </p>
          </section>
        </div>

        {/* Core Values Section */}
        <section className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-primary text-center">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-secondary">Lordship of Jesus Christ</h3>
                <p className="text-sm text-primary">We proclaim Christ as Lord and Savior (I Corinthians 12:3)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Prayerful Dependence</h3>
                <p className="text-sm text-primary">We prioritize prayer as essential to ministry and life (Matthew 6:8)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Biblical Truth</h3>
                <p className="text-sm text-primary">We ground our work in Scripture, seeking wisdom and guidance from God&apos;s Word (2 Timothy 3:16)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Commitment to the Great Commission</h3>
                <p className="text-sm text-primary">We actively engage in making disciples of all nations (Matthew 28:19)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Unity Among Churches</h3>
                <p className="text-sm text-primary">We strive for oneness across the Body of Christ in Albion and beyond (John 17:21)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Faithful Stewardship</h3>
                <p className="text-sm text-primary">We commit to wisely managing the resources God has entrusted to us (1 Corinthians 4:2)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Supportive Leadership Fellowship</h3>
                <p className="text-sm text-primary">We cultivate relationships and mutual support among senior leaders (Ephesians 4:11)</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-secondary">Servant Leadership</h3>
                <p className="text-sm text-primary">We lead by serving others, following Christ&apos;s example (Matthew 20:28)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Biblical View of Marriage</h3>
                <p className="text-sm text-primary">We affirm marriage as a covenant between one man and one woman (Genesis 1:28)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Great Commandment to Love</h3>
                <p className="text-sm text-primary">We seek to love God wholly and our neighbors compassionately (Matthew 22:37)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Kingdom-Minded Living</h3>
                <p className="text-sm text-primary">We pursue God&apos;s Kingdom first in all things (Matthew 6:33)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Encouragement</h3>
                <p className="text-sm text-primary">We support and affirm leaders in their personal faith in Jesus Christ and ministry journey (Hebrews 10:24-25)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Community Impact</h3>
                <p className="text-sm text-primary">We commit to tangible service that uplifts and transforms lives (Matthew 5:14-16)</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary">Collaboration</h3>
                <p className="text-sm text-primary">We partner to strengthen our impact and extend our reach (Ecclesiastes 4:9)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Structure Section */}
        <section className="bg-white p-8 rounded-xl shadow-md mt-8">
          <h2 className="text-3xl font-semibold mb-6 text-primary text-center">Leadership Structure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-surface p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-2">President</h3>
              <p className="text-accent font-medium mb-2">Apostle Ruby Coats</p>
              <p className="text-sm text-primary mb-3">Founder, Kingdom Equipping Training Center Church</p>
              <p className="text-sm text-primary">The President serves as the chief executive officer of the Association, presiding over all official meetings and representing the Association at community events and functions as necessary.</p>
            </div>

            <div className="bg-surface p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-2">Vice President</h3>
              <p className="text-accent font-medium mb-2">TBA</p>
              <p className="text-sm text-primary mb-3"></p>
              <p className="text-sm text-primary">In the absence of the President, the Vice President assumes the duties of presiding over meetings. Additionally, the Vice President is primarily responsible for assisting with the planning and implementation of special programs organized by the Association.</p>
            </div>

            <div className="bg-surface p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-2">Treasurer</h3>
              <p className="text-accent font-medium mb-2">Pastor Paul Keohn</p>
              <p className="text-sm text-primary mb-3">Senior Pastor of St. Paul Lutheran Church</p>
              <p className="text-sm text-primary">The Treasurer is entrusted with receiving, managing, and securely maintaining all financial assets of the Corporation and its committees. Disbursement of funds is carried out solely under the direction and authorization of the Board.</p>
            </div>

            <div className="bg-surface p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-primary mb-2">Secretary</h3>
              <p className="text-accent font-medium mb-2">Elvarane Showers</p>
              <p className="text-sm text-primary mb-3">Elder with Bread of Life Ministries</p>
              <p className="text-sm text-primary">The Secretary maintains accurate and properly archived records of all meetings of the Executive Committee and the Corporation. These records are signed, preserved, and transferred to the succeeding Secretary to ensure continuity and transparency.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 