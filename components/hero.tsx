"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { BlurText } from "@/components/ui/blur-text"

export default function Hero() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end center"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section
      ref={container}
      className="relative min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient Animation */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-700/20 via-transparent to-black" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6 max-w-6xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, scale: 0.9 }}
          animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl w- h-80 md:w-70 md:h-[25rem]"
        >
          <Image
            src="/images/hero.png"
            alt="Rajesh Kumar K"
            width={384}
            height={48}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <BlurText
            text="Rajesh Kumar"
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 justify-center md:justify-start"
            delay={0.1}
          />

          <motion.p
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-zinc-400 font-medium mb-6"
          >
            <span className="text-white-400">Engineer</span> ,{" "}
            <span className="text-white-400">Toastmaster</span> ,{" "}
            <span className="text-white-400">Rotaractor</span>
          </motion.p>

          <motion.blockquote
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-l-4 border-amber-500 pl-6 py-4 italic text-xl text-neutral-200"
          >
            "Smarter code. Stronger communities. Bolder voices."
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
