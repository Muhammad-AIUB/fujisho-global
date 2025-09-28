
export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#d32f2f] mb-4 sm:mb-6">
              Get in Touch with Our Company
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#5d4037] max-w-4xl mx-auto leading-relaxed">
              We are here to answer your inquiries, discuss opportunities, and build strong partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#f8f5f5] via-[#ffebee] to-[#f8f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Bangladesh Office */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#f5d5d5]">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#e57373] rounded-full flex items-center justify-center mr-4 sm:mr-6">
                  <span className="text-white text-xl sm:text-2xl">📍</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#d32f2f]">Bangladesh Office</h2>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#d32f2f] mb-2 sm:mb-3">Our Company Ltd.</h3>
                  <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                    House 45, Road 7, Block F<br />
                    Banani, Dhaka 1213, Bangladesh
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <span className="text-[#e57373] mr-3 sm:mr-4">📞</span>
                    <span className="text-base sm:text-lg text-[#5d4037]">+880 XXX XXX XXXX</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-[#e57373] mr-3 sm:mr-4">✉️</span>
                    <span className="text-base sm:text-lg text-[#5d4037]">info@ourcompany.com</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-[#e57373] mr-3 sm:mr-4 mt-1">🕒</span>
                    <div className="text-base sm:text-lg text-[#5d4037]">
                      <p className="font-semibold">Office Hours:</p>
                      <p>Sunday – Thursday, 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Korea Headquarters */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#f5d5d5]">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#e57373] rounded-full flex items-center justify-center mr-4 sm:mr-6">
                  <span className="text-white text-xl sm:text-2xl">🌏</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#d32f2f]">Korea Headquarters</h2>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#d32f2f] mb-2 sm:mb-3">Our Corporation Korea</h3>
                  <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
                    61 Godeokbuk-ro, Godeok-myeon<br />
                    Pyeongtaek-si, Republic of Korea
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <span className="text-[#e57373] mr-3 sm:mr-4">📞</span>
                    <span className="text-base sm:text-lg text-[#5d4037]">+82 XX-XXXX-XXXX</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-[#e57373] mr-3 sm:mr-4">✉️</span>
                    <span className="text-base sm:text-lg text-[#5d4037]">hq@ourcompany.com</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-[#e57373] mr-3 sm:mr-4 mt-1">🕒</span>
                    <div className="text-base sm:text-lg text-[#5d4037]">
                      <p className="font-semibold">Office Hours:</p>
                      <p>Monday – Friday, 9:00 AM – 6:00 PM KST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Quick Contact Form
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg border border-[#f5d5d5]">
            <form className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-[#d32f2f] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#f5d5d5] rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#e57373] focus:border-transparent text-base sm:text-lg"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-[#d32f2f] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#f5d5d5] rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#e57373] focus:border-transparent text-base sm:text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-[#d32f2f] mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#f5d5d5] rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#e57373] focus:border-transparent text-base sm:text-lg"
                  placeholder="+880 XXX XXX XXXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-[#d32f2f] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-[#f5d5d5] rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#e57373] focus:border-transparent text-base sm:text-lg resize-vertical"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#e57373] hover:bg-[#d32f2f] text-white font-semibold py-3 sm:py-4 px-8 sm:px-12 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Integration Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#f8f5f5] via-[#ffebee] to-[#f8f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Our Locations
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Bangladesh Office Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#f5d5d5]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-4 sm:mb-6 text-center">
                Bangladesh Office
              </h3>
              <div className="bg-gray-200 rounded-lg sm:rounded-xl h-48 sm:h-64 flex items-center justify-center">
                <div className="text-center text-[#5d4037]">
                  <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">🗺️</div>
                  <p className="text-sm sm:text-base">Google Maps Integration</p>
                  <p className="text-xs sm:text-sm mt-1">House 45, Road 7, Block F, Banani, Dhaka</p>
                </div>
              </div>
            </div>

            {/* Korea Headquarters Map */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-[#f5d5d5]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#d32f2f] mb-4 sm:mb-6 text-center">
                Korea Headquarters
              </h3>
              <div className="bg-gray-200 rounded-lg sm:rounded-xl h-48 sm:h-64 flex items-center justify-center">
                <div className="text-center text-[#5d4037]">
                  <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">🗺️</div>
                  <p className="text-sm sm:text-base">Google Maps Integration</p>
                  <p className="text-xs sm:text-sm mt-1">61 Godeokbuk-ro, Godeok-myeon, Pyeongtaek-si</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-8 sm:p-12 shadow-lg border border-[#f5d5d5]">
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">✨</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4 sm:mb-6">
              Let&apos;s power the future together – connect with us today.
            </h2>
            <p className="text-base sm:text-lg text-[#5d4037] leading-relaxed">
              Ready to discuss your next project? We&apos;re here to help you achieve your goals with our expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
