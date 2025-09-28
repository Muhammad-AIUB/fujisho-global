import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0B] text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-red-900 to-gray-800 dark:from-black dark:via-red-950 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#D32F2F] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-4 w-4 mx-2" />
                <span className="text-[#D32F2F] font-medium">About Us</span>
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About{" "}
              <span className="text-[#D32F2F] relative">
                Fujisho Global
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#D32F2F] transform scale-x-75"></div>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Engineering excellence from Korea, powering Bangladesh&apos;s future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 dark:from-slate-900 dark:via-blue-950 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-200 leading-relaxed">
                <p>
                  Fujisho Global Ltd. was founded with a clear purpose: to bring Korea&apos;s decades of electrical
                  engineering excellence into Bangladesh&apos;s fast-evolving energy sector. As a wholly owned
                  subsidiary of Fujisho Corporation Korea, we inherit a proud legacy of <strong>quality craftsmanship,
                  timely delivery, and customer-first values</strong>.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/30 dark:to-red-900/20 rounded-2xl p-8 border-t-4 border-[#D32F2F] shadow-lg">
                <div className="h-64 flex items-center justify-center">
                  <div className="text-gray-400 dark:text-gray-500">Illustrative card placeholder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-800 via-teal-900 to-emerald-900 dark:from-emerald-900 dark:via-teal-950 dark:to-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Sets Us Apart
            </h2>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-200 leading-relaxed text-center">
              Unlike many suppliers, we do not stop at equipment delivery. We design, build, and support
              projects end-to-end — ensuring that every substation, every distribution line, and every meter we
              install adds real, measurable value.
            </p>
          </div>
        </div>
      </section>

      {/* Our Guiding Principles Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-amber-800 via-orange-900 to-amber-900 dark:from-amber-900 dark:via-orange-950 dark:to-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Guiding Principles
            </h2>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-[#D32F2F] mt-1" />
                </div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Integrity in partnerships – trust is the foundation of every deal we make.
                </p>
              </li>

              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-[#D32F2F] mt-1" />
                </div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Precision in execution – we treat every project like our flagship.
                </p>
              </li>

              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-[#D32F2F] mt-1" />
                </div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Commitment to Bangladesh – we are not outsiders; we are stakeholders in the nation&apos;s growth.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-800 via-violet-900 to-purple-900 dark:from-purple-900 dark:via-violet-950 dark:to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                EPC Contracting
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                From 11/33kV substations to high-voltage grid modernization, our EPC division provides
                turnkey solutions. We manage design, procurement, construction, and commissioning — all
                under strict international safety and quality standards.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Strategic Trading
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                Leveraging our direct connections with Korean manufacturers, we import and supply:
              </p>
              <ul className="text-lg text-gray-200 leading-relaxed space-y-2 ml-6">
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
              <h3 className="text-2xl font-bold text-white mb-4">
                Government Tender Expertise
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-800 via-blue-900 to-indigo-900 dark:from-indigo-900 dark:via-blue-950 dark:to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vision & Sustainability
            </h2>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                To become Bangladesh&apos;s most trusted EPC and trading partner, recognized not only for
                technology transfer but also for building local capacity and future-ready infrastructure.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Mission
              </h3>
              <ul className="text-lg text-gray-200 leading-relaxed space-y-3">
                <li>• Deliver global-standard power infrastructure across Bangladesh.</li>
                <li>• Transfer Korean technology and expertise to local engineers.</li>
                <li>• Support Bangladesh&apos;s sustainable growth and digital transformation in the power sector.</li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Sustainability in Action
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                We actively integrate eco-conscious practices — from smart energy management to waste
                reduction in construction. For us, sustainability is not just compliance, but an ethical duty to
                future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founders & Leaders Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-red-800 via-rose-900 to-red-900 dark:from-red-900 dark:via-rose-950 dark:to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Founders & Leaders
            </h2>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Our Founder */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image 
                  src="/Image/founder.jpg" 
                  alt="Mr. Sangmoon Kim" 
                  width={300} 
                  height={300} 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Founder
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Mr. Sangmoon Kim founded Fujisho Corporation in Korea with a vision to
                  deliver world-class electrical and engineering solutions. Through his leadership, the
                  company quickly grew beyond Korea, expanding operations into Hong Kong and
                  Vietnam, building a reputation for quality, trust, and innovation.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed mt-4">
                  Carrying forward his legacy, his son Mr. Gapyong Kim, the current Chairman, led the
                  expansion into Bangladesh and established Fujisho Global Ltd. — bridging Korean
                  expertise with Bangladesh&apos;s growing energy and infrastructure needs.
                </p>
              </div>
            </div>

            {/* Our Chairman */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="flex-shrink-0">
                <Image 
                  src="/Image/chairman.jpg" 
                  alt="Mr. Gap Young Kim" 
                  width={300} 
                  height={300} 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Chairman
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Mr. Gap Young Kim leads Fujisho Global Ltd. with vision and determination. Building
                  on the legacy of his father, Founder Sangmoon Kim, he expanded Fujisho&apos;s
                  footprint to Bangladesh, creating a trusted platform for EPC projects and global trading.
                  With strong expertise in the Korean electrical construction market and deep international
                  partnerships, he is driving Fujisho Global Ltd. toward innovation, sustainable growth, and
                  meaningful Korea–Bangladesh cooperation.
                </p>
              </div>
            </div>

            {/* Our Managing Director */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image 
                  src="/Image/masum.jpg" 
                  alt="Mr. Shahid-E-Manzur Masum" 
                  width={300} 
                  height={300} 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Managing Director
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Mr. Shahid-E-Manzur Masum is the Managing Director of Fujisho Global Ltd. A
                  seasoned entrepreneur with decades of experience in international trade,
                  infrastructure, and energy, he plays a pivotal role in leading the company&apos;s operations in
                  Bangladesh. With his strong business acumen, trusted industry network, and
                  commitment to excellence, Mr. Masum is guiding Fujisho Global Ltd. toward becoming
                  a key partner in the nation&apos;s power and development sector while strengthening ties
                  with global stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 dark:from-slate-900 dark:via-gray-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Leadership Messages
            </h2>
            <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Message from the Chairman */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Message from the Chairman
              </h3>
              <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
                <p>
                  At Fujisho Global Ltd., we believe that true success comes from building bridges—between
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
                  As Chairman, I am dedicated to strengthening the legacy of Fujisho while ensuring we remain
                  forward-looking, adaptable, and impactful in every endeavor. Together, with our team and
                  partners, we will continue to drive progress and shape a brighter future.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-lg font-semibold text-[#D32F2F]">– Gap Young Kim</p>
                <p className="text-gray-300">Chairman, Fujisho Global Ltd.</p>
              </div>
            </div>

            {/* Message from the Managing Director */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Message from the Managing Director
              </h3>
              <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
                <p>
                  Fujisho Global Ltd. was founded with a vision to bring world-class expertise to Bangladesh&apos;s
                  infrastructure and energy sector. As Managing Director, my focus has always been on building
                  trust, delivering excellence, and creating opportunities that benefit both our partners and our
                  nation.
                </p>
                <p>
                  Through strong collaborations with leading global companies and the dedication of our team, we
                  are working to position Fujisho Global Ltd. as a reliable and forward-looking partner in EPC
                  projects, power solutions, and international trade.
                </p>
                <p>
                  I firmly believe that with integrity, innovation, and hard work, we can make a lasting impact on
                  Bangladesh&apos;s development journey while strengthening long-term cooperation with our global
                  partners.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-lg font-semibold text-[#D32F2F]">– Shahid-E-Manzur Masum</p>
                <p className="text-gray-300">Managing Director, Fujisho Global Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
