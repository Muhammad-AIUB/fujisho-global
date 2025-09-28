import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 dark:from-black dark:via-slate-900 dark:to-black border-t border-gray-700 dark:border-gray-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/Image/logo.jpg" alt="Fujisho Global" width={160} height={160} className="h-16 w-auto object-contain" />
              <div>
                <h3 className="text-xl font-bold text-white">Fujisho Global</h3>
                <p className="text-sm text-gray-300">Powering Progress, Bridging Nations</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Subsidiary of Fujisho Corporation Korea, delivering world-class EPC solutions and strategic trading for Bangladesh&apos;s power sector.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-[#D32F2F] transition-colors">Home</Link>
              <Link href="/about-us" className="block text-gray-300 hover:text-[#D32F2F] transition-colors">About Us</Link>
              <Link href="/business" className="block text-gray-300 hover:text-[#D32F2F] transition-colors">Our Business</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-[#D32F2F] transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Fujisho Global Ltd.</p>
              <p>Bangladesh</p>
              <p className="text-[#D32F2F] font-medium">info@fujishoglobal.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Fujisho Global. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


