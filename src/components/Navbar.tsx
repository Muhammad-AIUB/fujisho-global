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
    <header className="sticky top-0 z-50 w-full border-b border-[#F3CACA] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Image/logo.jpg" alt="Fujisho Global" width={160} height={160} className="h-16 md:h-20 w-auto object-contain" />
            </Link>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="text-base sm:text-lg font-bold tracking-tight text-[#D32F2F]">
              Fujisho Global
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-[#D32F2F] hover:text-[#B71C1C] hover:underline underline-offset-4">Home</Link>
            <Link href="/about-us" className="text-[#D32F2F] hover:text-[#B71C1C] hover:underline underline-offset-4">About Us</Link>
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
              <Link href="/business" className="text-[#D32F2F] hover:text-[#B71C1C] hover:underline underline-offset-4 flex items-center gap-1" aria-expanded={isBusinessDesktopOpen}>
                Our Business
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.189l3.71-3.96a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </Link>
              <div className={`${isBusinessDesktopOpen ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-150 absolute left-0 top-full mt-0 w-56 rounded-md border border-[#F3CACA] bg-white shadow-lg`}
                role="menu"
                aria-label="Our Business submenu"
              >
                <div className="py-2">
                  <Link href="/business/sid" className="block px-4 py-2 text-[#D32F2F] hover:text-[#B71C1C] hover:bg-[#FDE7E7]">SID</Link>
                  <Link href="/business/yrp-lpp" className="block px-4 py-2 text-[#D32F2F] hover:text-[#B71C1C] hover:bg-[#FDE7E7]">YRP-LPP</Link>
                  <Link href="/business/local-construction" className="block px-4 py-2 text-[#D32F2F] hover:text-[#B71C1C] hover:bg-[#FDE7E7]">Local Construction</Link>
                  <Link href="/business/overseas-construction" className="block px-4 py-2 text-[#D32F2F] hover:text-[#B71C1C] hover:bg-[#FDE7E7]">Overseas Construction</Link>
                  <Link href="/business/trade" className="block px-4 py-2 text-[#D32F2F] hover:text-[#B71C1C] hover:bg-[#FDE7E7]">Trade</Link>
                  <Link href="/business/green-energy" className="block px-4 py-2 text-[#D32F2F] hover:text-[#B71C1C] hover:bg-[#FDE7E7]">Green Energy</Link>
                </div>
              </div>
            </div>
            <Link href="/contact" className="text-[#D32F2F] hover:text-[#B71C1C] hover:underline underline-offset-4">Contact Us</Link>
          </div>

          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#D32F2F] hover:bg-[#FDE7E7] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E57373]"
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

      <div className={`md:hidden border-t border-[#F3CACA] bg-white ${isOpen ? "block" : "hidden"}`}>
        <div className="space-y-1 px-4 py-3">
          <Link href="/" className="block rounded px-3 py-2 text-base font-medium text-[#D32F2F] hover:bg-[#FDE7E7] hover:text-[#B71C1C]">Home</Link>
          <Link href="/about-us" className="block rounded px-3 py-2 text-base font-medium text-[#D32F2F] hover:bg-[#FDE7E7] hover:text-[#B71C1C]">About Us</Link>
          <button
            type="button"
            aria-expanded={isBusinessOpen}
            onClick={() => setIsBusinessOpen((v) => !v)}
            className="w-full text-left block rounded px-3 py-2 text-base font-medium text-[#D32F2F] hover:bg-[#FDE7E7] hover:text-[#B71C1C]"
          >
            Our Business
          </button>
          <div className={`${isBusinessOpen ? "block" : "hidden"} ml-3 space-y-1`}
            role="region"
            aria-label="Our Business submenu"
          >
            <Link href="/business/sid" className="block rounded px-3 py-2 text-base font-medium text-[#D32F2F] hover:bg-[#FDE7E7] hover:text-[#B71C1C]">SID</Link>
            <Link href="/business/yrp-lpp" className="block rounded px-3 py-2 text-base font-medium text-[#D32F2F] hover:bg-[#FDE7E7] hover:text-[#B71C1C]">YRP-LPP</Link>
            <Link href="/business/local-construction" className="block rounded px-3 py-2 text-base font-medium text-[#D32F2F] hover:bg-[#FDE7E7] hover:text-[#B71C1C]">Local Construction</Link>
            <Link href="/business/overseas-construction" className="block rounded px-3 py-2 text-base font-medium text-[#D32F2F] hover:bg-[#FDE7E7] hover:text-[#B71C1C]">Overseas Construction</Link>
            <Link href="/business/trade" className="block rounded px-3 py-2 text-base font-medium text-[#D32F2F] hover:bg-[#FDE7E7] hover:text-[#B71C1C]">Trade</Link>
            <Link href="/business/green-energy" className="block rounded px-3 py-2 text-base font-medium text-[#D32F2F] hover:bg-[#FDE7E7] hover:text-[#B71C1C]">Green Energy</Link>
          </div>
          <Link href="/contact" className="block rounded px-3 py-2 text-base font-medium text-[#D32F2F] hover:bg-[#FDE7E7] hover:text-[#B71C1C]">Contact Us</Link>
        </div>
      </div>
    </header>
  );
}


