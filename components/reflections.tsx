"use client"

import { motion } from "framer-motion"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Reflections() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  return (
    <section ref={container} className="min-h-screen bg-neutral-950 py-20 px-6 flex items-center justify-center">
      <motion.div style={{ scale, opacity }} className="max-w-3xl text-center">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight"
        >
          Leadership taught me what code never could — how to inspire, communicate, and build trust.
        </motion.blockquote>
      </motion.div>
    </section>
  )
}
