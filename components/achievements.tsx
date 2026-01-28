"use client"

import { motion } from "framer-motion"
import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Achievements() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5])

  const achievements = [
    {
      title: "Red Hat Certified System Administrator",
      icon: "1",
    },
    {
      title: "Google Cloud Foundations",
      icon: "2",
    },
    {
      title: "Oracle cloud foundations",
      icon: "3",
    },
    {
      title: "AWS Cloud Practitioner",
      icon: "4",
    },
    
  ]

  return (
    <section ref={container} id="achievements" className="min-h-screen bg-neutral-950 py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications, awards and recognitions</h2>
          <p className="text-neutral-400 mb-16 text-lg">
            
          </p>
        </motion.div>

        <motion.div style={{ opacity }} className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-neutral-900 border  border-neutral-800 p-8 rounded-lg hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-800/50"
            >
              <div className="flex items-center gap-4">
                <span className="text-5xl">{achievement.icon}</span>
                <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
