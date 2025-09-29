'use client';

import { useState, useEffect, useRef } from 'react';

export default function ContactUsPage() {
  const [mapsLoaded, setMapsLoaded] = useState({ bangladesh: false, korea: false });
  const bangladeshMapRef = useRef<HTMLDivElement>(null);
  const koreaMapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for lazy loading maps
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const mapType = target.dataset.mapType;
            
            if (mapType === 'bangladesh' && !mapsLoaded.bangladesh) {
              setMapsLoaded(prev => ({ ...prev, bangladesh: true }));
            } else if (mapType === 'korea' && !mapsLoaded.korea) {
              setMapsLoaded(prev => ({ ...prev, korea: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bangladeshMapRef.current) {
      observer.observe(bangladeshMapRef.current);
    }
    if (koreaMapRef.current) {
      observer.observe(koreaMapRef.current);
    }

    return () => observer.disconnect();
  }, [mapsLoaded]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#d32f2f] mb-3 sm:mb-4 md:mb-6">
              Get in Touch with Our Company
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#5d4037] max-w-4xl mx-auto leading-relaxed px-2">
              We are here to answer your inquiries, discuss opportunities, and build strong partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#f8f5f5] via-[#ffebee] to-[#f8f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Bangladesh Office */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-[#f5d5d5]">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[#e57373] rounded-full flex items-center justify-center mr-3 sm:mr-4 lg:mr-6">
                  <span className="text-white text-lg sm:text-xl lg:text-2xl">📍</span>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#d32f2f]">Bangladesh Office</h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#d32f2f] mb-2 sm:mb-3">Our Company Ltd.</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-[#5d4037] leading-relaxed">
                    House 45, Road 7, Block F<br />
                    Banani, Dhaka 1213, Bangladesh
                  </p>
                </div>
                
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="flex items-center">
                    <span className="text-[#e57373] mr-2 sm:mr-3 lg:mr-4 text-sm sm:text-base">📞</span>
                    <span className="text-sm sm:text-base lg:text-lg text-[#5d4037]">+880 XXX XXX XXXX</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-[#e57373] mr-2 sm:mr-3 lg:mr-4 text-sm sm:text-base">✉️</span>
                    <span className="text-sm sm:text-base lg:text-lg text-[#5d4037]">info@ourcompany.com</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-[#e57373] mr-2 sm:mr-3 lg:mr-4 mt-1 text-sm sm:text-base">🕒</span>
                    <div className="text-sm sm:text-base lg:text-lg text-[#5d4037]">
                      <p className="font-semibold">Office Hours:</p>
                      <p>Sunday – Thursday, 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map for Bangladesh Office */}
                <div className="mt-4 sm:mt-6" ref={bangladeshMapRef} data-map-type="bangladesh">
                  <div className="rounded-lg sm:rounded-xl h-32 sm:h-40 lg:h-48 overflow-hidden relative">
                    {/* Loading Skeleton */}
                    {!mapsLoaded.bangladesh && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl mb-2">🗺️</div>
                          <div className="text-xs sm:text-sm text-gray-600">Loading map...</div>
                        </div>
                      </div>
                    )}
                    
                    {/* Actual Map */}
                    {mapsLoaded.bangladesh && (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2!2d90.4025735!3d23.7900403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7001654f35d%3A0x6f3d2b4d4115f48b!2s1212%20Dhaka%2C%20Rd%20No%207A%2C%20%EB%8B%A4%EC%B9%B4%EB%A9%94%ED%83%80%20%EB%B2%95%EC%9D%B8%EC%82%AC%EB%AC%B4%EC%8B%A4!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="eager"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Company Bangladesh Office"
                        className="transition-opacity duration-300"
                      ></iframe>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Korea Headquarters */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-[#f5d5d5]">
              <div className="flex items-center mb-4 sm:mb-6 lg:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-[#e57373] rounded-full flex items-center justify-center mr-3 sm:mr-4 lg:mr-6">
                  <span className="text-white text-lg sm:text-xl lg:text-2xl">🌏</span>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#d32f2f]">Korea Headquarters</h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#d32f2f] mb-2 sm:mb-3">Our Corporation Korea</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-[#5d4037] leading-relaxed">
                    61 Godeokbuk-ro, Godeok-myeon<br />
                    Pyeongtaek-si, Republic of Korea
                  </p>
                </div>
                
                <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <div className="flex items-center">
                    <span className="text-[#e57373] mr-2 sm:mr-3 lg:mr-4 text-sm sm:text-base">📞</span>
                    <span className="text-sm sm:text-base lg:text-lg text-[#5d4037]">+82 XX-XXXX-XXXX</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-[#e57373] mr-2 sm:mr-3 lg:mr-4 text-sm sm:text-base">✉️</span>
                    <span className="text-sm sm:text-base lg:text-lg text-[#5d4037]">hq@ourcompany.com</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-[#e57373] mr-2 sm:mr-3 lg:mr-4 mt-1 text-sm sm:text-base">🕒</span>
                    <div className="text-sm sm:text-base lg:text-lg text-[#5d4037]">
                      <p className="font-semibold">Office Hours:</p>
                      <p>Monday – Friday, 9:00 AM – 6:00 PM KST</p>
                    </div>
                  </div>
                </div>

                {/* Map for Korea Headquarters */}
                <div className="mt-4 sm:mt-6" ref={koreaMapRef} data-map-type="korea">
                  <div className="rounded-lg sm:rounded-xl h-32 sm:h-40 lg:h-48 overflow-hidden relative">
                    {/* Loading Skeleton */}
                    {!mapsLoaded.korea && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl mb-2">🗺️</div>
                          <div className="text-xs sm:text-sm text-gray-600">Loading map...</div>
                        </div>
                      </div>
                    )}
                    
                    {/* Actual Map */}
                    {mapsLoaded.korea && (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2!2d127.1!3d37.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAwJzAwLjAiTiAxMjfCsDA2JzAwLjAiRQ!5e0!3m2!1sen!2skr!4v1234567890123!5m2!1sen!2skr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="eager"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Corporation Korea Headquarters"
                        className="transition-opacity duration-300"
                      ></iframe>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#d32f2f] mb-3 sm:mb-4">
              Quick Contact Form
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto"></div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-[#f5d5d5]">
            <form className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm lg:text-base font-medium text-[#d32f2f] mb-1 sm:mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-2 sm:px-3 lg:px-4 py-2 sm:py-3 border border-[#f5d5d5] rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#e57373] focus:border-transparent text-sm sm:text-base lg:text-lg"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm lg:text-base font-medium text-[#d32f2f] mb-1 sm:mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-2 sm:px-3 lg:px-4 py-2 sm:py-3 border border-[#f5d5d5] rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#e57373] focus:border-transparent text-sm sm:text-base lg:text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm lg:text-base font-medium text-[#d32f2f] mb-1 sm:mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-2 sm:px-3 lg:px-4 py-2 sm:py-3 border border-[#f5d5d5] rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#e57373] focus:border-transparent text-sm sm:text-base lg:text-lg"
                  placeholder="+880 XXX XXX XXXX"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm lg:text-base font-medium text-[#d32f2f] mb-1 sm:mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-2 sm:px-3 lg:px-4 py-2 sm:py-3 border border-[#f5d5d5] rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#e57373] focus:border-transparent text-sm sm:text-base lg:text-lg resize-vertical"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#e57373] hover:bg-[#d32f2f] text-white font-semibold py-2 sm:py-3 lg:py-4 px-6 sm:px-8 lg:px-12 rounded-lg sm:rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base lg:text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>


      {/* Call-to-Action Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg border border-[#f5d5d5]">
            <div className="text-3xl sm:text-4xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6">✨</div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#d32f2f] mb-3 sm:mb-4 lg:mb-6">
              Let&apos;s power the future together – connect with us today.
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#5d4037] leading-relaxed">
              Ready to discuss your next project? We&apos;re here to help you achieve your goals with our expertise and commitment to excellence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
