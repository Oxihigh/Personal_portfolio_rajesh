"use client"

import { motion } from "framer-motion"

export default function Featured() {
  const headingText = "I bridge systems and people. Through code, leadership, and conviction."
  const words = headingText.split(" ")

  const descText = "Building agentic AI systems. Leading mission-driven communities. Commanding the stage. I design systems that scale, lead people toward purpose, and speak in ways that land. I obsess over clarity in everything I do. Everything else is noise."
  const descWords = descText.split(" ")

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-neutral-900 border-t border-b border-neutral-800">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center h-full">
        {/* Subtitle */}
        <motion.h3
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-widest text-amber-500 font-semibold mb-8 text-sm"
        >
          About Me
        </motion.h3>

        {/* Animated Heading */}
        <div className="flex flex-wrap justify-center mb-12">
          {words.map((word, i) => (
            <motion.span
              key={`headline-${i}-${word}`}
              initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05 + 0.2, // Stagger effect
                ease: "easeOut"
              }}
              className="text-4xl lg:text-5xl lg:text-6xl font-extrabold text-white mr-3 mb-2 leading-tight"
            >
              {['systems', 'people.', 'code,', 'leadership,', 'conviction.'].includes(word) ? (
                <span className="text-neutral-400">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </div>

        {/* Paragraph Description */}
        <div className="text-lg lg:text-xl text-neutral-300 mb-12 leading-relaxed max-w-2xl mx-auto flex flex-wrap justify-center">
          {descWords.map((word, i) => (
            <motion.span
              key={`desc-${i}-${word}`}
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.02 + 0.5, // Faster stagger so it doesn't take too long
                ease: "easeOut"
              }}
              className="mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Contact Info Row */}
        {/* <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 md:gap-12 mb-12 text-sm text-neutral-400 justify-center"
        >
          <div><strong className="text-white mr-2">Location:</strong>Bengaluru, India</div>
          <div><strong className="text-white mr-2">Email:</strong>rkumark.dev@gmail.com</div>
        </motion.div> */}

        {/* Resume Button */}
        <motion.a
          href="/Rajesh_resume_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ filter: "blur(10px)", opacity: 0, scale: 0.9 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button className="bg-white text-black font-semibold border border-white px-8 py-3 text-sm transition-all duration-300 hover:bg-neutral-200 cursor-pointer rounded-md">
            VIEW RESUME
          </button>
        </motion.a>
      </div>
    </section>
  )
}
