import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full text-white py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-12">
        {/* Logo Cell */}
        <div className="border border-white p-6 col-span-3 h-full">
          <Link href="/" className="relative block h-full">
            <div className="relative w-full h-full ">
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

        {/* Navigation Grid */}
        <div className="grid col-span-9">
          {/* Top Row */}
          <div className="grid grid-cols-11 border-l border-white">
            <Link
              href="#about"
              scroll={true}
              className="px-8 py-4 border-r border-b border-t border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-3"
            >
              ABOUT
            </Link>

            <Link
              href="#solutions"
              scroll={true}
              className="px-8 py-4 border-r border-b border-t border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-3"
            >
              SOLUTIONS
            </Link>
            <Link
              href="#grants"
              scroll={true}
              className="px-8 py-4 border border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-3"
            >
              GRANTS
            </Link>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-12 border-l border-white">
            <Link
              href="https://das-agent.gitbook.io/das-agent"
              target="_blank"
              className="px-8 py-4 border-r border-b border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-3"
            >
              DOCS
            </Link>
            <Link
              href="https://map.dasagent.xyz"
              target="_blank"
              className="px-8 py-4 border-r border-b border-white text-sm tracking-wider hover:text-blue-400 transition-colors text-center col-span-3"
            >
              LIVE ATTACK MAP
            </Link>
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
    </header>
  );
}
