"use client"

import { motion } from "framer-motion"

export default function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: "rkumark.dev@gmail.com",
      href: "mailto:rkumark.dev@gmail.com",
      icon: "✉️",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/rajeshkannumukkala",
      href: "https://linkedin.com/in/rajeshkannumukkala",
      icon: "💼",
    },
    {
      label: "GitHub",
      value: "github.com/Oxihigh",
      href: "https://github.com/Oxihigh",
      icon: "🔗",
    },
    {
      label: "Phone",
      value: "+91 7975590933",
      href: "tel:+917975590933",
      icon: "📱",
    },
  ]

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-neutral-400 mb-16 text-lg">
            Let's collaborate on innovative projects or discuss opportunities in AI and computer vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-neutral-900 border border-neutral-800 p-8 rounded-lg hover:border-white transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{link.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-2">{link.label}</h3>
                  <p className="text-neutral-400 group-hover:text-white transition-colors break-all">{link.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-neutral-800 text-center"
        >
          <p className="text-neutral-500 text-sm">© 2025 Rajesh Kumar K. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
