"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { BlurText } from "@/components/ui/blur-text"

export default function LeadershipCTA() {
  return (
    <section className="min-h-screen bg-neutral-900 py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-800 border border-neutral-700 p-12 rounded-lg text-center"
        >
          <BlurText text="Want to see my technical work?" className="text-3xl md:text-4xl font-bold text-white justify-center mb-6 text-center" delay={0.4} />
          <p className="text-neutral-400 mb-8 text-lg">
            Explore my AI and computer vision projects, technical expertise, and innovative solutions.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-neutral-200 transition-all duration-300"
          >
            Return to Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
