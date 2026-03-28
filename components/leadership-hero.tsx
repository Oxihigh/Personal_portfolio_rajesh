"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { BlurText } from "@/components/ui/blur-text"

export default function LeadershipHero() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end center"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-neutral-950" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <BlurText text="Leadership, Communication & Impact" className="text-5xl md:text-7xl font-bold text-white justify-center mb-6" />
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-300 mb-8"
        >
          Beyond code — building communities and empowering people.
        </motion.p>
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"
        />
      </div>
    </section>
  )
}
