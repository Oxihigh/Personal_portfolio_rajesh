"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isLeadershipPage = pathname === "/leadership"

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[9999] px-6 py-3 
                 bg-black/0 backdrop-md border-b border-white/10 shadow-md"
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link
          href="/"
          className="text-white text-xs md:text-sm uppercase tracking-wide hover:text-neutral-400 transition-colors"
        >
          Rajesh
        </Link>

        <nav className="flex gap-5 md:gap-8">
          {!isLeadershipPage && (
            <>
              <Link
                href="#projects"
                className="text-white text-xs md:text-sm hover:text-neutral-400 transition-colors duration-300 uppercase"
              >
                Projects
              </Link>
              <Link
                href="/leadership"
                className="text-white text-xs md:text-sm hover:text-neutral-400 transition-colors duration-300 uppercase"
              >
                Leadership
              </Link>
              <Link
                href="#contact"
                className="text-white text-xs md:text-sm hover:text-neutral-400 transition-colors duration-300 uppercase"
              >
                Contact
              </Link>
            </>
          )}
          {isLeadershipPage && (
            <Link
              href="/"
              className="text-white text-xs md:text-sm hover:text-neutral-400 transition-colors duration-300 uppercase"
            >
              Portfolio
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
