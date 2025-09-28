import Link from "next/link";
import Image from "next/image";

export default function BusinessPage() {
  const businessCategories = [
    {
      title: "SID",
      description: "Strategic Infrastructure Development",
      link: "/business/sid",
      image: "/sid/1.jpg"
    },
    {
      title: "YRP-LPP",
      description: "Your Reliable Partner - Large Power Projects",
      link: "/business/yrp-lpp",
      image: "/yrp/11.jpg"
    },
    {
      title: "Local Construction",
      description: "Domestic Construction & Development",
      link: "/business/local-construction",
      image: "/local/1.jpg"
    },
    {
      title: "Overseas Construction",
      description: "International Construction Projects",
      link: "/business/overseas-construction",
      image: "/con/1.jpg"
    },
    {
      title: "Trade",
      description: "Commercial Trading & Supply",
      link: "/business/trade",
      image: "/trade/1.jpg"
    },
    {
      title: "Green Energy",
      description: "Sustainable Energy Solutions",
      link: "/business/green-energy",
      image: "/green/10.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#2c1810]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#d32f2f] mb-6 sm:mb-8">
              Our <span className="text-[#e57373]">Business</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#5d4037] max-w-4xl mx-auto leading-relaxed px-2">
              Comprehensive EPC solutions, strategic trading, and infrastructure development across multiple sectors
            </p>
          </div>
        </div>
      </section>

      {/* Business Categories Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-[#f8f5f5] via-[#ffebee] to-[#f8f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d32f2f] mb-4">
              Business <span className="text-[#e57373]">Categories</span>
            </h2>
            <div className="w-24 h-1 bg-[#e57373] mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-[#5d4037] max-w-3xl mx-auto px-2">
              Explore our diverse range of business solutions and services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {businessCategories.map((category, index) => (
              <Link key={index} href={category.link} className="group">
                <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 border border-[#f5d5d5]">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    
                    {/* Category title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                      <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-1">{category.title}</h3>
                      <p className="text-gray-200 text-xs sm:text-sm">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-[#2c1810] mb-1 sm:mb-2">
                          {category.title}
                        </h3>
                        <p className="text-[#5d4037] text-xs sm:text-sm">
                          {category.description}
                        </p>
                      </div>
                      <div className="text-[#e57373] group-hover:translate-x-1 transition-transform duration-300 text-lg sm:text-xl">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


