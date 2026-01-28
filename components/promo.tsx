"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function Section() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"], { clamp: false })

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Explainable AI", "Computer Vision", "langchain"],
    },
    {
      title: "Programming & Data",
      skills: ["Python", "C/C++", "Pandas", "NumPy", "Matplotlib", "LangChain", "Cohere LLMs"],
    },
    {
      title: "Systems & DevOps",
      skills: ["Linux", "Red Hat", "Docker", "Git" ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["Google Cloud", "Oracle Cloud", ],
    },
    {
      title: "Leadership & Mentoring",
      skills: ["Toastmasters", "Rotaract", "Team Building", "Mentorship", "Public Speaking"],
    },
  ]

  return (
    <div
      ref={container}
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Background Parallax Image */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div
          style={{ y, transform: "translate3d(0, 0, 0)" }}
          className="relative w-full h-full"
        >
          <video
    src="/images/tech-background.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  ></video>
        </motion.div>
      </div>

      <motion.h3
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative z-20 mt-16 mb-8 
             text-center text-2xl sm:text-3xl lg:text-4xl 
             font-extrabold text-white tracking-wide"
>
  Technical Expertise
</motion.h3>

      {/* Skill Boxes */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-black/40 border border-white/20 rounded-2xl p-5 backdrop-blur-md hover:bg-white/10 transition-all"
          >
            <h4 className="text-white text-lg font-semibold mb-3">{category.title}</h4>
            <ul className="text-white/80 text-sm space-y-1">
              {category.skills.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
