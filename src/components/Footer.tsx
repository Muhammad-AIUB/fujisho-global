import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#ffebee] via-[#ffcdd2] to-[#ffebee] border-t border-[#f5d5d5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <Image src="/Image/logo.jpg" alt="Fujisho Global" width={160} height={160} className="h-12 sm:h-16 w-auto object-contain" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#d32f2f]">Fujisho Global</h3>
                <p className="text-xs sm:text-sm text-[#5d4037]">Powering Progress, Bridging Nations</p>
              </div>
            </Link>
            <p className="text-[#5d4037] text-xs sm:text-sm leading-relaxed">
              Subsidiary of Fujisho Corporation Korea, delivering world-class EPC solutions and strategic trading for Bangladesh&apos;s power sector.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-[#d32f2f]">Quick Links</h4>
            <div className="space-y-1 sm:space-y-2">
              <Link href="/" className="block text-xs sm:text-sm text-[#5d4037] hover:text-[#d32f2f] transition-colors">Home</Link>
              <Link href="/about-us" className="block text-xs sm:text-sm text-[#5d4037] hover:text-[#d32f2f] transition-colors">About Us</Link>
              <Link href="/business" className="block text-xs sm:text-sm text-[#5d4037] hover:text-[#d32f2f] transition-colors">Our Business</Link>
              <Link href="/business/sid" className="block text-xs sm:text-sm text-[#5d4037] hover:text-[#d32f2f] transition-colors">SID</Link>
              <Link href="/business/yrp-lpp" className="block text-xs sm:text-sm text-[#5d4037] hover:text-[#d32f2f] transition-colors">YRP-LPP</Link>
              <Link href="/business/local-construction" className="block text-xs sm:text-sm text-[#5d4037] hover:text-[#d32f2f] transition-colors">Local Construction</Link>
              <Link href="/business/overseas-construction" className="block text-xs sm:text-sm text-[#5d4037] hover:text-[#d32f2f] transition-colors">Overseas Construction</Link>
              <Link href="/business/trade" className="block text-xs sm:text-sm text-[#5d4037] hover:text-[#d32f2f] transition-colors">Trade</Link>
              <Link href="/business/green-energy" className="block text-xs sm:text-sm text-[#5d4037] hover:text-[#d32f2f] transition-colors">Green Energy</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-[#d32f2f]">Contact Information</h4>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-[#5d4037]">
              <p className="font-semibold text-[#d32f2f]">Fujisho Global Ltd.</p>
              <p className="text-[#d32f2f] font-medium hover:underline">
                <a href="mailto:zahin@fujishocorp.com">zahin@fujishocorp.com</a>
              </p>
              <p className="text-[#d32f2f] font-medium hover:underline">
                <a href="mailto:Info@fujishocorp.com">Info@fujishocorp.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#f5d5d5] pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm text-[#5d4037] text-center sm:text-left">© {new Date().getFullYear()} Fujisho Global. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#5d4037]">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


