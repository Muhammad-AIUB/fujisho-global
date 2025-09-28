import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-[#2c1810]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm text-[#5d4037]">
              <li>
                <Link href="/" className="hover:text-[#e57373] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mx-1 sm:mx-2" />
                <span className="text-[#e57373] font-medium">About Us</span>
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#d32f2f] mb-4 sm:mb-6">
              About{" "}
              <span className="text-[#e57373] relative">
                Our Company
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 bg-[#e57373] transform scale-x-75"></div>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#5d4037] max-w-4xl mx-auto leading-relaxed px-2">
              Engineering excellence from Korea, powering Bangladesh&apos;s future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#f8f5f5] via-[#ffebee] to-[#f8f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-6 sm:mb-8">
              Our Story
            </h2>
            <div className="prose prose-base sm:prose-lg max-w-none text-[#5d4037] leading-relaxed">
              <p>
                Our company was founded with a clear purpose: to bring Korea&apos;s decades of electrical
                engineering excellence into Bangladesh&apos;s fast-evolving energy sector. As a wholly owned
                subsidiary of Our Corporation Korea, we inherit a proud legacy of <strong>quality craftsmanship,
                timely delivery, and customer-first values</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              What Sets Us Apart
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed text-center px-2">
              Unlike many suppliers, we do not stop at equipment delivery. We design, build, and support
              projects end-to-end — ensuring that every substation, every distribution line, and every meter we
              install adds real, measurable value.
            </p>
          </div>
        </div>
      </section>

      {/* Our Guiding Principles Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#f8f5f5] via-[#ffebee] to-[#f8f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Our Guiding Principles
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 sm:space-y-6">
              <li className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-[#e57373] mt-1" />
                </div>
                <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                  Integrity in partnerships – trust is the foundation of every deal we make.
                </p>
              </li>

              <li className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-[#e57373] mt-1" />
                </div>
                <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                  Precision in execution – we treat every project like our flagship.
                </p>
              </li>

              <li className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 sm:h-6 sm:w-6 text-[#e57373] mt-1" />
                </div>
                <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                  Commitment to Bangladesh – we are not outsiders; we are stakeholders in the nation&apos;s growth.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-3 sm:mb-4">
                EPC Contracting
              </h3>
              <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                From 11/33kV substations to high-voltage grid modernization, our EPC division provides
                turnkey solutions. We manage design, procurement, construction, and commissioning — all
                under strict international safety and quality standards.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-3 sm:mb-4">
                Strategic Trading
              </h3>
              <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed mb-3 sm:mb-4">
                Leveraging our direct connections with Korean manufacturers, we import and supply:
              </p>
              <ul className="text-base sm:text-lg text-[#5d4037] leading-relaxed space-y-1 sm:space-y-2 ml-4 sm:ml-6">
                <li>• Automatic Circuit Reclosers (ACR)</li>
                <li>• Fuse Cutouts & Protection Devices</li>
                <li>• Lightning Arrestors</li>
                <li>• Capacitors</li>
                <li>• Enclosers</li>
                <li>• Smart Meters & Transformers</li>
                <li>• Specialized substation equipment</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-3 sm:mb-4">
                Government Tender Expertise
              </h3>
              <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                We actively collaborate with Bangladesh&apos;s leading agencies, including BREB, PGCB, and
                NESCO, navigating complex tender processes with professionalism and transparency. Our
                proven track record ensures that clients receive the best products at competitive prices,
                delivered without compromise.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Sustainability Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#f8f5f5] via-[#ffebee] to-[#f8f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Vision & Sustainability
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-[#f5d5d5]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-4 sm:mb-6">
                Our Vision
              </h3>
              <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                To become Bangladesh&apos;s most trusted EPC and trading partner, recognized not only for
                technology transfer but also for building local capacity and future-ready infrastructure.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-[#f5d5d5]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-4 sm:mb-6">
                Our Mission
              </h3>
              <ul className="text-base sm:text-lg text-[#5d4037] leading-relaxed space-y-2 sm:space-y-3">
                <li>• Deliver global-standard power infrastructure across Bangladesh.</li>
                <li>• Transfer Korean technology and expertise to local engineers.</li>
                <li>• Support Bangladesh&apos;s sustainable growth and digital transformation in the power sector.</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-8 sm:mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-[#f5d5d5]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-4 sm:mb-6">
                Sustainability in Action
              </h3>
              <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                We actively integrate eco-conscious practices — from smart energy management to waste
                reduction in construction. For us, sustainability is not just compliance, but an ethical duty to
                future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founders & Leaders Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Our Founders & Leaders
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            {/* Our Founder */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-shrink-0">
                <Image 
                  src="/Image/founder.jpg" 
                  alt="Mr. Sangmoon Kim" 
                  width={300} 
                  height={300} 
                  className="rounded-xl sm:rounded-2xl shadow-lg w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-3 sm:mb-4">
                  Our Founder
                </h3>
                <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                  Mr. Sangmoon Kim founded Our Corporation in Korea with a vision to
                  deliver world-class electrical and engineering solutions. Through his leadership, the
                  company quickly grew beyond Korea, expanding operations into Hong Kong and
                  Vietnam, building a reputation for quality, trust, and innovation.
                </p>
                <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed mt-3 sm:mt-4">
                  Carrying forward his legacy, his son Mr. Gapyong Kim, the current Chairman, led the
                  expansion into Bangladesh and established our company — bridging Korean
                  expertise with Bangladesh&apos;s growing energy and infrastructure needs.
                </p>
              </div>
            </div>

            {/* Our Chairman */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8">
              <div className="flex-shrink-0">
                <Image 
                  src="/Image/chairman.jpg" 
                  alt="Mr. Gap Young Kim" 
                  width={300} 
                  height={300} 
                  className="rounded-xl sm:rounded-2xl shadow-lg w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-3 sm:mb-4">
                  Our Chairman
                </h3>
                <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                  Mr. Gap Young Kim leads our company with vision and determination. Building
                  on the legacy of his father, Founder Sangmoon Kim, he expanded our company&apos;s
                  footprint to Bangladesh, creating a trusted platform for EPC projects and global trading.
                  With strong expertise in the Korean electrical construction market and deep international
                  partnerships, he is driving our company toward innovation, sustainable growth, and
                  meaningful Korea–Bangladesh cooperation.
                </p>
              </div>
            </div>

            {/* Our Managing Director */}
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              <div className="flex-shrink-0">
                <Image 
                  src="/Image/masum.jpg" 
                  alt="Mr. Shahid-E-Manzur Masum" 
                  width={300} 
                  height={300} 
                  className="rounded-xl sm:rounded-2xl shadow-lg w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-3 sm:mb-4">
                  Our Managing Director
                </h3>
                <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                  Mr. Shahid-E-Manzur Masum is the Managing Director of our company. A
                  seasoned entrepreneur with decades of experience in international trade,
                  infrastructure, and energy, he plays a pivotal role in leading the company&apos;s operations in
                  Bangladesh. With his strong business acumen, trusted industry network, and
                  commitment to excellence, Mr. Masum is guiding our company toward becoming
                  a key partner in the nation&apos;s power and development sector while strengthening ties
                  with global stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#f8f5f5] via-[#ffebee] to-[#f8f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Leadership Messages
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
            {/* Message from the Chairman */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-[#f5d5d5]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-4 sm:mb-6">
                Message from the Chairman
              </h3>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-[#5d4037] leading-relaxed">
                <p>
                  We believe that true success comes from building bridges—between
                  nations, industries, and people. What began as my father&apos;s vision in Korea has today grown into
                  a global presence across Asia, with Bangladesh at the heart of our future.
                </p>
                <p>
                  Bangladesh is a country of immense potential, and we are proud to contribute to its growth
                  through world-class EPC services, reliable energy solutions, and international partnerships. Our
                  commitment is not only to deliver projects but also to create sustainable value, foster innovation,
                  and build long-term trust with our partners.
                </p>
                <p>
                  As Chairman, I am dedicated to strengthening the legacy of our company while ensuring we remain
                  forward-looking, adaptable, and impactful in every endeavor. Together, with our team and
                  partners, we will continue to drive progress and shape a brighter future.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#f5d5d5]">
                <p className="text-base sm:text-lg font-semibold text-[#e57373]">– Gap Young Kim</p>
                <p className="text-sm sm:text-base text-[#5d4037]">Chairman, Our Company</p>
              </div>
            </div>

            {/* Message from the Managing Director */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-[#f5d5d5]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-4 sm:mb-6">
                Message from the Managing Director
              </h3>
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-[#5d4037] leading-relaxed">
                <p>
                  Our company was founded with a vision to bring world-class expertise to Bangladesh&apos;s
                  infrastructure and energy sector. As Managing Director, my focus has always been on building
                  trust, delivering excellence, and creating opportunities that benefit both our partners and our
                  nation.
                </p>
                <p>
                  Through strong collaborations with leading global companies and the dedication of our team, we
                  are working to position our company as a reliable and forward-looking partner in EPC
                  projects, power solutions, and international trade.
                </p>
                <p>
                  I firmly believe that with integrity, innovation, and hard work, we can make a lasting impact on
                  Bangladesh&apos;s development journey while strengthening long-term cooperation with our global
                  partners.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[#f5d5d5]">
                <p className="text-base sm:text-lg font-semibold text-[#e57373]">– Shahid-E-Manzur Masum</p>
                <p className="text-sm sm:text-base text-[#5d4037]">Managing Director, Our Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
