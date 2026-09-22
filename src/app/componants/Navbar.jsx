"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import navbarData from "@/app/Data/Navbar.json";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // ==========================================
  // CHECK CURRENT PAGE
  // ==========================================
  const isCurrentPage = (label) => {
    switch (label.toLowerCase()) {
      case "home":
        return pathname === "/";

      case "about":
        return pathname === "/about" || pathname.startsWith("/about/");

      case "contact":
        return pathname === "/contact" || pathname.startsWith("/contact/");

      default:
        return false;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5eee9] bg-white">
      
      {/* ==========================================
          NAVBAR
      ========================================== */}
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-6 lg:px-10">

        {/* ==========================================
            LOGO
        ========================================== */}
        <a
          href="/"
          className="flex items-center gap-3"
        >
          {/* Logo */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#4f8f57] sm:h-12 sm:w-12">
            <Image
              src="/logo.jpeg"
              alt="Prakruti Pharma logo"
              width={48}
              height={48}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          {/* Logo Text */}
          <div className="leading-tight">
            <p className="text-[14px] font-semibold text-[#111816]">
              {navbarData.logo.name}
            </p>

            <p className="mt-0.5 text-[8px] text-[#7a8581]">
              {navbarData.logo.tagline}
            </p>
          </div>
        </a>


        {/* ==========================================
            DESKTOP NAVIGATION
        ========================================== */}
        <div className="hidden items-center gap-8 md:flex">

          <nav className="flex items-center gap-7">

            {navbarData.links.map((link) => {
              const active = isCurrentPage(link.label);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`
                    text-[12px]
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      active
                        ? "text-[#16885f]"
                        : "text-[#202624] hover:text-[#16885f]"
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}

          </nav>


          {/* ==========================================
              DESKTOP CTA
          ========================================== */}
          <a
            href={navbarData.cta.href}
            className="flex items-center gap-2 rounded-[10px] bg-[#16885f] px-5 py-2.5 text-[11px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#117650]"
          >
            {navbarData.cta.label}

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

        </div>


        {/* ==========================================
            MOBILE MENU BUTTON
        ========================================== */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e2ebe7] text-[#16885f] transition-colors duration-200 hover:bg-[#f3f8f5] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            
            // CLOSE ICON
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

          ) : (

            // MENU ICON
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

          )}
        </button>

      </div>


      {/* ==========================================
          MOBILE MENU
      ========================================== */}
      {isMenuOpen && (
        <div className="border-t border-[#e5eee9] bg-white px-5 py-5 shadow-sm md:hidden">

          <nav className="flex flex-col gap-1">

            {navbarData.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="
                  rounded-lg
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-[#202624]
                  transition-colors
                  duration-200
                  hover:bg-[#eef8f3]
                  hover:text-[#16885f]
                "
              >
                {link.label}
              </a>
            ))}


            {/* ==========================================
                MOBILE CTA
            ========================================== */}
            <a
              href={navbarData.cta.href}
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-[10px] bg-[#16885f] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#117650]"
            >
              {navbarData.cta.label}

              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}