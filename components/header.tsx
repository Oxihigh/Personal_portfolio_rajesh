"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const isLeadershipPage = pathname === "/leadership"
  
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  // Use motion value event to detect scroll position without re-rendering the whole page heavily
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] px-6 py-4 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 w-full max-w-3xl ${
          isScrolled 
            ? "bg-neutral-950/80 backdrop-blur-md border-neutral-800 shadow-xl shadow-black/50" 
            : "bg-transparent border-transparent"
        }`}
      >
        <Link
          href="/"
          className="text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:text-amber-500 transition-colors"
        >
          Rajesh
        </Link>

        <nav className="flex gap-6 md:gap-8 items-center">
          {!isLeadershipPage && (
            <>
              <Link
                href="#projects"
                className="text-neutral-400 text-xs md:text-sm font-medium hover:text-white transition-colors uppercase tracking-wider"
              >
                Projects
              </Link>
              <Link
                href="/leadership"
                className="text-neutral-400 text-xs md:text-sm font-medium hover:text-white transition-colors uppercase tracking-wider"
              >
                Leadership
              </Link>
            </>
          )}
          {isLeadershipPage && (
            <Link
              href="/"
              className="text-neutral-400 text-xs md:text-sm font-medium hover:text-white transition-colors uppercase tracking-wider"
            >
              Portfolio
            </Link>
          )}

          {/* Contact Button */}
          <Link
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-white text-black text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-amber-500 hover:text-black transition-colors"
          >
            Contact
          </Link>
        </nav>
      </motion.div>
    </header>
  )
}

