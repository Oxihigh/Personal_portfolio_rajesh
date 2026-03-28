// components/ui/blur-text.tsx
"use client"

import { motion } from "framer-motion"

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  highlightWords?: string[] // Words to color differently
  highlightColor?: string // Tailwind color class for highlighted words
}

export function BlurText({ 
  text, 
  className = "", 
  delay = 0, 
  highlightWords = [],
  highlightColor = "text-neutral-400"
}: BlurTextProps) {
  const words = text.split(" ")

  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: i * 0.12 + delay,
            ease: "easeOut"
          }}
          className="mr-[0.25em]"
        >
          {highlightWords.includes(word) ? (
            <span className={highlightColor}>{word}</span>
          ) : (
            word
          )}
        </motion.span>
      ))}
    </div>
  )
}
