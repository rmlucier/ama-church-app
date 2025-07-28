export default function AboutPage() {
  return (
    <main className="bg-[#F5F5F2] min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#7A6A53] text-center">About AMA</h1>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <section className="bg-[#D5DED9] p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-[#7A6A53]">Our Mission</h2>
            <p className="text-[#7A6A53]">
              The Albion Ministerial Association exists to foster unity, shared purpose, and collaboration among churches. We support senior leaders and faith-based organizations in serving the community, advancing the message of Christ, fulfilling the Great Commission, and encouraging mutual support in both faith and action.
            </p>
          </section>

          <section className="bg-[#D5DED9] p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-[#7A6A53]">Our Vision</h2>
            <p className="text-[#7A6A53]">
              To see the churches of Albion walking in unity, empowered to transform lives through Christ-centered service, collaborative leadership, and support Spirit-led outreach that brings hope, healing, and revival to our community.
            </p>
          </section>
        </div>

        {/* Core Values Section */}
        <section className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-[#7A6A53] text-center">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-[#948C75]">Lordship of Jesus Christ</h3>
                <p className="text-sm text-[#7A6A53]">We proclaim Christ as Lord and Savior (I Corinthians 12:3)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Prayerful Dependence</h3>
                <p className="text-sm text-[#7A6A53]">We prioritize prayer as essential to ministry and life (Matthew 6:8)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Biblical Truth</h3>
                <p className="text-sm text-[#7A6A53]">We ground our work in Scripture, seeking wisdom and guidance from God&apos;s Word (2 Timothy 3:16)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Commitment to the Great Commission</h3>
                <p className="text-sm text-[#7A6A53]">We actively engage in making disciples of all nations (Matthew 28:19)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Unity Among Churches</h3>
                <p className="text-sm text-[#7A6A53]">We strive for oneness across the Body of Christ in Albion and beyond (John 17:21)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Faithful Stewardship</h3>
                <p className="text-sm text-[#7A6A53]">We commit to wisely managing the resources God has entrusted to us (1 Corinthians 4:2)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Supportive Leadership Fellowship</h3>
                <p className="text-sm text-[#7A6A53]">We cultivate relationships and mutual support among senior leaders (Ephesians 4:11)</p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-[#948C75]">Servant Leadership</h3>
                <p className="text-sm text-[#7A6A53]">We lead by serving others, following Christ&apos;s example (Matthew 20:28)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Biblical View of Marriage</h3>
                <p className="text-sm text-[#7A6A53]">We affirm marriage as a covenant between one man and one woman (Genesis 1:28)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Great Commandment to Love</h3>
                <p className="text-sm text-[#7A6A53]">We seek to love God wholly and our neighbors compassionately (Matthew 22:37)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Kingdom-Minded Living</h3>
                <p className="text-sm text-[#7A6A53]">We pursue God&apos;s Kingdom first in all things (Matthew 6:33)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Encouragement</h3>
                <p className="text-sm text-[#7A6A53]">We support and affirm leaders in their personal faith in Jesus Christ and ministry journey (Hebrews 10:24-25)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Community Impact</h3>
                <p className="text-sm text-[#7A6A53]">We commit to tangible service that uplifts and transforms lives (Matthew 5:14-16)</p>
              </div>
              <div>
                <h3 className="font-semibold text-[#948C75]">Collaboration</h3>
                <p className="text-sm text-[#7A6A53]">We partner to strengthen our impact and extend our reach (Ecclesiastes 4:9)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 