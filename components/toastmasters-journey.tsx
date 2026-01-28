"use client"

import { motion } from "framer-motion"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function ToastmastersJourney() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"], {
    clamp: false,
  })
  const textY = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"], {
    clamp: false,
  })

  return (
    <section ref={container} className="min-h-screen bg-neutral-950 py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Toastmasters Journey
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{
              y: imageY,
              transform: "translate3d(0, 0, 0)",
            }}
            className="h-[400px] md:h-[500px] relative"
          >
            <Image
              src="/images/contest2.jpg"
              alt="Toastmasters speaking"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            style={{
              y: textY,
              transform: "translate3d(0, 0, 0)",
            }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Toastmasters International</h3>
              <ul className="space-y-4 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Club-level International Speech Contest Winner</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Area-level International Speech Contest Finalist</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Triple Crown Award Recipient</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>Vice President Membership(2025-26)</span>
                </li>
              </ul>
            </div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l-4 border-amber-500 pl-6 py-4 italic text-xl text-neutral-200"
            >
              "The mic taught me what silence never could — presence."
            </motion.blockquote>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-neutral-300 leading-relaxed text-base pt-4"
            >
              
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
