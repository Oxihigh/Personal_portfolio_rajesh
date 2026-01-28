"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Featured() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"])
  const textY = useTransform(scrollYProgress, [0, 1], ["-40px", "40px"])

  return (
    <section
      ref={container}
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-20 bg-neutral-900"
    >
      {/* Image Section */}
      

      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 h-[300px] lg:h-[600px] mb-8 lg:mb-0 lg:order-2 relative w-[80%] lg:w-[60%] mx-auto"
      >
      <div className="hidden md:block">
        <Image
          src="/images/pes-up.jpg"
          alt="Professional portrait"
          fill
          className="object-cover rounded-xl shadow-2xl"
        /></div>
      </motion.div>
      


      {/* Text Section */}
      <motion.div
        style={{ y: textY }}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-left flex flex-col justify-center lg:mr-12 lg:order-1 text-white"
      >
        <h3 className="uppercase mb-4">About Me</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-300 leading-relaxed">
          An engineer passionate about building intelligent systems that are explainable, transparent, and human-centered.
          
          Rooted in the discipline of Linux and Red Hat, I believe technology should not just perform but be understood.
      
          As a Toastmasters mentor and Rotaract leader, I strive to bring the same clarity and purpose from code to communication.
        </p>

        <div className="text-sm space-y-2 mb-8 text-neutral-400">
          <p><strong className="text-white">Location:</strong> Bengaluru, Karnataka, India</p>
          <p><strong className="text-white">Email:</strong> oxihigh@gmail.com</p>
          <p><strong className="text-white">Phone:</strong> +91 7975590933</p>
        </div>

        <motion.a
          href="/Rajesh_resume_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-black text-white border border-white px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit rounded-md">
            VIEW RESUME
          </button>
        </motion.a>
      </motion.div>
    </section>
  )
}
