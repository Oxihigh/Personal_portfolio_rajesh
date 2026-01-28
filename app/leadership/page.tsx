"use client"

import { useEffect } from "react"
import { useScrollToTop } from "@/hooks/use-scroll-to-top"
import Header from "@/components/header"
import LeadershipHero from "@/components/leadership-hero"
import ToastmastersJourney from "@/components/toastmasters-journey"
import RotaractLeadership from "@/components/rotaract-leadership"
import Reflections from "@/components/reflections"
import LeadershipCTA from "@/components/leadership-cta"
import Footer from "@/components/footer"

export default function LeadershipPage() {
  useScrollToTop()

  // Framer Motion handles scroll natively with GPU acceleration
  useEffect(() => {
    // Enable smooth scrolling via CSS for better performance
    document.documentElement.style.scrollBehavior = "auto"
  }, [])

  return (
    <main>
      <Header />
      <LeadershipHero />
      <ToastmastersJourney />
      <RotaractLeadership />
      <Reflections />
      <LeadershipCTA />
      <Footer />
    </main>
  )
}
