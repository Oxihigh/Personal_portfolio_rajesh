"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Leadership() {
  const leadershipItems = [
    {
      title: "Toastmasters International",
      icon: "🎙️",
      achievements: [
        "Toastmasters International is a global platform that empowers people to communicate with confidence and lead with purpose. Through speeches, evaluations, and mentorship, it’s where I learned that leadership begins with listening — and that every story told well can inspire change.",
      ],
    },
    {
      title: "Rotaract Club (President 2024–25)",
      icon: "🤝",
      achievements: [
        "Rotaract is a global community of young leaders driven by service, collaboration, and innovation. Through projects, teamwork, and shared purpose, it’s where I learned that real leadership isn’t about authority — it’s about empathy, initiative, and making a difference that outlives you.",
      ],
    },
  ]

  return (
    <section id="leadership" className="min-h-screen bg-neutral-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership & Impact
          </h2>
          <p className="text-neutral-400 mb-16 text-lg max-w-3xl">
            Building communities, inspiring others, and creating meaningful change through leadership.
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {leadershipItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-neutral-900 border border-neutral-800 p-8 rounded-lg 
                         hover:border-neutral-600 transition-all duration-300 
                         hover:shadow-lg hover:shadow-neutral-800/50"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-neutral-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {item.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="text-neutral-400 group-hover:text-neutral-300 transition-colors flex items-start gap-3"
                  >
                    <span className="text-neutral-600 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            <Link href="/leadership" passHref>
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-2 backdrop-blur-md bg-white/90 
                           border border-white/20 text-black font-bold 
                           px-8 py-3 rounded-xl hover:bg-white/20 
                           hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] 
                           transition-all duration-300"
              >
                Checkout my leadership journey
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
