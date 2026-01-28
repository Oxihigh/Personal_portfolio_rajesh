"use client"

import { useEffect } from "react"
import { useScrollToTop } from "@/hooks/use-scroll-to-top"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Featured from "@/components/featured"
import Promo from "@/components/promo"
import Projects from "@/components/projects"
import Leadership from "@/components/leadership"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  useScrollToTop()

  // Framer Motion handles scroll natively with GPU acceleration
  useEffect(() => {
    // Enable smooth scrolling via CSS for better performance
    document.documentElement.style.scrollBehavior = "auto"
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <Featured />
      <Promo />
      <Projects />
      <Leadership />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
