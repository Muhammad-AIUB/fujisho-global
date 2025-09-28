"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isBusinessDesktopOpen, setIsBusinessDesktopOpen] = useState(false);
  const desktopTimerRef = useRef<number | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f5d5d5] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-14 sm:h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/" className="flex items-center gap-1 sm:gap-2">
              <Image src="/Image/logo.jpg" alt="Fujisho Global" width={160} height={160} className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
            </Link>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
            <Link href="/" className="text-sm sm:text-base md:text-lg font-bold tracking-tight text-[#e57373]">
              Fujisho Global
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-[#e57373] hover:text-[#d32f2f] hover:underline underline-offset-4">Home</Link>
            <Link href="/about-us" className="text-[#e57373] hover:text-[#d32f2f] hover:underline underline-offset-4">About Us</Link>
            <div
              className="relative"
              onMouseEnter={() => {
                if (desktopTimerRef.current) window.clearTimeout(desktopTimerRef.current);
                setIsBusinessDesktopOpen(true);
              }}
              onMouseLeave={() => {
                if (desktopTimerRef.current) window.clearTimeout(desktopTimerRef.current);
                desktopTimerRef.current = window.setTimeout(() => setIsBusinessDesktopOpen(false), 120);
              }}
            >
              <Link href="/business" className="text-[#e57373] hover:text-[#d32f2f] hover:underline underline-offset-4 flex items-center gap-1" aria-expanded={isBusinessDesktopOpen}>
                Our Business
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.189l3.71-3.96a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </Link>
              <div className={`${isBusinessDesktopOpen ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-150 absolute left-0 top-full mt-0 w-56 rounded-md border border-[#f5d5d5] bg-white shadow-lg`}
                role="menu"
                aria-label="Our Business submenu"
              >
                <div className="py-2">
                  <Link href="/business/sid" className="block px-4 py-2 text-[#e57373] hover:text-[#d32f2f] hover:bg-[#ffebee]">SID</Link>
                  <Link href="/business/yrp-lpp" className="block px-4 py-2 text-[#e57373] hover:text-[#d32f2f] hover:bg-[#ffebee]">YRP-LPP</Link>
                  <Link href="/business/local-construction" className="block px-4 py-2 text-[#e57373] hover:text-[#d32f2f] hover:bg-[#ffebee]">Local Construction</Link>
                  <Link href="/business/overseas-construction" className="block px-4 py-2 text-[#e57373] hover:text-[#d32f2f] hover:bg-[#ffebee]">Overseas Construction</Link>
                  <Link href="/business/trade" className="block px-4 py-2 text-[#e57373] hover:text-[#d32f2f] hover:bg-[#ffebee]">Trade</Link>
                  <Link href="/business/green-energy" className="block px-4 py-2 text-[#e57373] hover:text-[#d32f2f] hover:bg-[#ffebee]">Green Energy</Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-[#e57373] hover:text-[#d32f2f] hover:underline underline-offset-4">Contact Us</Link>
          </div>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#e57373] hover:bg-[#ffebee] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e57373] transition-colors"
            >
              <svg className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`md:hidden border-t border-[#f5d5d5] bg-white ${isOpen ? "block" : "hidden"} transition-all duration-300`}>
        <div className="space-y-1 px-3 py-4">
          <Link href="/" className="block rounded-lg px-4 py-3 text-base font-medium text-[#e57373] hover:bg-[#ffebee] hover:text-[#d32f2f] transition-colors">Home</Link>
          <Link href="/about-us" className="block rounded-lg px-4 py-3 text-base font-medium text-[#e57373] hover:bg-[#ffebee] hover:text-[#d32f2f] transition-colors">About Us</Link>
          <button
            type="button"
            aria-expanded={isBusinessOpen}
            onClick={() => setIsBusinessOpen((v) => !v)}
            className="w-full text-left block rounded-lg px-4 py-3 text-base font-medium text-[#e57373] hover:bg-[#ffebee] hover:text-[#d32f2f] transition-colors"
          >
            Our Business
          </button>
          <div className={`${isBusinessOpen ? "block" : "hidden"} ml-4 space-y-1 transition-all duration-300`}
            role="region"
            aria-label="Our Business submenu"
          >
            <Link href="/business/sid" className="block rounded-lg px-4 py-2 text-sm font-medium text-[#e57373] hover:bg-[#ffebee] hover:text-[#d32f2f] transition-colors">SID</Link>
            <Link href="/business/yrp-lpp" className="block rounded-lg px-4 py-2 text-sm font-medium text-[#e57373] hover:bg-[#ffebee] hover:text-[#d32f2f] transition-colors">YRP-LPP</Link>
            <Link href="/business/local-construction" className="block rounded-lg px-4 py-2 text-sm font-medium text-[#e57373] hover:bg-[#ffebee] hover:text-[#d32f2f] transition-colors">Local Construction</Link>
            <Link href="/business/overseas-construction" className="block rounded-lg px-4 py-2 text-sm font-medium text-[#e57373] hover:bg-[#ffebee] hover:text-[#d32f2f] transition-colors">Overseas Construction</Link>
            <Link href="/business/trade" className="block rounded-lg px-4 py-2 text-sm font-medium text-[#e57373] hover:bg-[#ffebee] hover:text-[#d32f2f] transition-colors">Trade</Link>
            <Link href="/business/green-energy" className="block rounded-lg px-4 py-2 text-sm font-medium text-[#e57373] hover:bg-[#ffebee] hover:text-[#d32f2f] transition-colors">Green Energy</Link>
          </div>
          <Link href="/contact" className="block rounded-lg px-4 py-3 text-base font-medium text-[#e57373] hover:bg-[#ffebee] hover:text-[#d32f2f] transition-colors">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}


