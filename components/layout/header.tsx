import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full  text-white py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-12">
        {/* Logo Cell */}
        <div className="border border-white p-6 col-span-3 h-full">
          <Link href="/" className="relative block h-full">
            <div className="relative w-full h-full ">
              <Image
                src="/logo.svg"
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

        {/* Navigation Grid */}
        <div className="grid col-span-9">
          {/* Top Row */}
          <div className="grid grid-cols-11 border-l border-white">
            <Link href="/about" className="px-8 py-4 border-r border-b border-t border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-2">
              ABOUT
            </Link>
            <Link href="/features" className="px-8 py-4 border-r border-b border-t border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-3">
              FEATURES
            </Link>
            <Link href="/solutions" className="px-8 py-4 border-r border-b border-t border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-3">
              SOLUTIONS
            </Link>
            <Link href="/metrics" className="px-8 py-4 border-r border-b border-t border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-2">
              METRICS
            </Link>
            <div className="flex items-center justify-center w-full border-r border-b border-t border-white col-span-1">
              <div className="relative w-8 h-8">
                <Image
                  src="/vector.svg"
                  alt="Vector Icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-12 border-l border-white">
            <Link href="/partners" className="px-8 py-4 border-r border-b border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-4">
              PARTNERS
            </Link>
            <Link href="/docs" className="px-8 py-4 border-r border-b border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-2">
              DOCS
            </Link>
            <Link href="/contact" className="px-8 py-4 border-r border-b border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-3">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 