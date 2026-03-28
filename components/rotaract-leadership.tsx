"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { BlurText } from "@/components/ui/blur-text"

export default function RotaractLeadership() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"], {
    clamp: false,
  })
  const textY = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"], {
    clamp: false,
  })

  const achievements = [
    "President, Rotaract Club of Jyothy Institute of Technology (2024–25)",
    "Aspiring Club of the Quarter – RY 2024–25",
    "Best Club Service Project Award",
    "People's Choice – Redefining Rotaract Initiative",
  ]

  return (
    <section ref={container} className="min-h-screen bg-neutral-900 py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <BlurText text="Rotaract Leadership" className="text-4xl md:text-5xl font-bold text-white mb-16" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{
              y: textY,
              transform: "translate3d(0, 0, 0)",
            }}
            className="space-y-6"
          >
            <div className="bg-neutral-800 border border-neutral-700 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Leadership Achievements</h3>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, x: -20 }}
                    whileInView={{ filter: "blur(0px)", opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 text-neutral-300"
                  >
                    <span className="text-amber-500 mt-1 flex-shrink-0">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            style={{
              y: imageY,
              transform: "translate3d(0, 0, 0)",
            }}
            className="h-[400px] md:h-[500px] relative"
          >
            <Image
              src="/images/blazer.jpeg"
              alt="Rotaract community service"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>

        <motion.blockquote
              initial={{ filter: "blur(10px)", opacity: 0 }}
              whileInView={{ filter: "blur(0px)", opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l-4 border-amber-500 pl-6 py-4 italic text-xl text-neutral-200"
            >
              "Service gave my leadership a purpose — and my purpose, a voice."
            </motion.blockquote>
      </div>
    </section>
  )
}
