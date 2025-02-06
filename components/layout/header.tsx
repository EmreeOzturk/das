"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#about", label: "ABOUT", scroll: true },
    { href: "#solutions", label: "SOLUTIONS", scroll: true },
    { href: "#grants", label: "GRANTS", scroll: true },
    { href: "https://das-agent.gitbook.io/das-agent", label: "DOCS", external: true },
    { href: "https://map.dasagent.xyz", label: "LIVE ATTACK MAP", external: true },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Mobile Header */}
      <div className="md:hidden w-full">
        <div className="flex justify-between items-center px-6 py-4 bg-black/80 backdrop-blur-md">
          <Link href="/" className="relative block h-12 w-24">
            <div className="relative w-full h-full">
              <Image
                src="/logo-das-1.png"
                alt="DAS Logo"
                fill
                className="object-contain"
                priority
              />
              <div className="w-full h-full absolute top-0 left-[2px] z-10">
                <Image
                  src="/logo2.svg"
                  alt="DAS Logo Overlay"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>

          <button
            onClick={toggleMenu}
            className="text-white p-2 focus:outline-none z-50 relative"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
              isMenuOpen ? 'transform rotate-45 translate-y-2' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
            }`}></div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-x-0 top-[72px] bottom-0 bg-gradient-to-b from-black/95 to-black backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <nav className="flex flex-col h-full px-6 py-8">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  scroll={item.scroll}
                  target={item.external ? "_blank" : undefined}
                  className="py-4 border-b border-white/10 text-lg font-light tracking-wider hover:text-blue-400 transition-colors flex items-center justify-between group"
                  onClick={toggleMenu}
                >
                  <span>{item.label}</span>
                  <span className="text-white/30 group-hover:text-blue-400 transition-colors">
                    {item.external ? '↗' : '→'}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="mt-auto">
              <Link
                href="https://x.com/dasagentxyz?s=21&t=7Hrigd2DXnuEFeHqb2gHmA"
                target="_blank"
                className="flex items-center gap-3 py-6 text-lg font-light tracking-wider hover:text-blue-400 transition-colors border-t border-white/10"
                onClick={toggleMenu}
              >
                <div className="relative w-6 h-6">
                  <Image
                    src="/icons8-twitter.svg"
                    alt="Twitter"
                    fill
                    className="object-contain invert"
                  />
                </div>
                <span>Follow us on X</span>
                <span className="text-white/30 ml-auto">↗</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <div className="w-full text-white py-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-12">
            {/* Desktop Logo Cell */}
            <div className="border border-white p-6 col-span-3 h-full backdrop-blur-md bg-black/30">
              <Link href="/" className="relative block h-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/logo-das-1.png"
                    alt="DAS Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                  <div className="w-full h-full absolute top-0 left-[2px] z-10">
                    <Image
                      src="/logo2.svg"
                      alt="DAS Logo Overlay"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Grid */}
            <div className="grid col-span-9 backdrop-blur-md bg-black/30">
              {/* Top Row */}
              <div className="grid grid-cols-11 border-l border-white">
                {menuItems.slice(0, 3).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    scroll={item.scroll}
                    className="px-8 py-4 border-r border-b border-t border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-3"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-12 border-l border-white">
                {menuItems.slice(3).map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    className="px-8 py-4 border-r border-b border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-3"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center justify-center w-full border-r border-b border-t border-white col-span-2">
                  <div className="relative w-8 h-8">
                    <Link
                      href="https://x.com/dasagentxyz?s=21&t=7Hrigd2DXnuEFeHqb2gHmA"
                      target="_blank"
                    >
                      <Image
                        src="/icons8-twitter.svg"
                        alt="Vector Icon"
                        fill
                        className="object-contain"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
