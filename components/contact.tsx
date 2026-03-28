"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react"
import { BlurText } from "@/components/ui/blur-text"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus("success")
        ;(e.target as HTMLFormElement).reset()
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactLinks = [
    {
      label: "Email",
      value: "rkumark.dev@gmail.com",
      href: "mailto:rkumark.dev@gmail.com",
      icon: <Mail className="w-6 h-6 text-amber-500" />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/rajeshkannumukkala",
      href: "https://linkedin.com/in/rajeshkannumukkala",
      icon: <Linkedin className="w-6 h-6 text-amber-500" />,
    },
    {
      label: "GitHub",
      value: "github.com/Oxihigh",
      href: "https://github.com/Oxihigh",
      icon: <Github className="w-6 h-6 text-amber-500" />,
    },
    {
      label: "Phone",
      value: "+91 7975590933",
      href: "tel:+917975590933",
      icon: <Phone className="w-6 h-6 text-amber-500" />,
    },
  ]

  return (
    <section id="contact" className="min-h-screen bg-neutral-950 py-24 px-6 relative overflow-hidden flex items-center">
      
      {/* Background ambient glow matching the site vibe */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Left Column - Contact Details */}
          <div className="space-y-12">
            <div>
              <motion.h3 
                initial={{ filter: "blur(10px)", opacity: 0, x: -30 }} 
                whileInView={{ filter: "blur(0px)", opacity: 1, x: 0 }} viewport={{ once: true }} 
                transition={{ duration: 0.6 }}
                className="uppercase tracking-widest text-amber-500 font-semibold mb-3 text-sm"
              >
                Get In Touch
              </motion.h3>
              <BlurText 
                text="Let's build something extraordinary." 
                highlightWords={["extraordinary."]} 
                highlightColor="text-neutral-500"
                className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight" 
                delay={0.2}
              />
              <motion.p 
                initial={{ filter: "blur(10px)", opacity: 0, x: -30 }} 
                whileInView={{ filter: "blur(0px)", opacity: 1, x: 0 }} viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-neutral-400 mb-12 text-lg leading-relaxed max-w-md"
              >
                Whether you want to collaborate on innovative projects or discuss opportunities in AI and robust systems, I'm always open to connecting.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                  whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-3 bg-black/40 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm">{link.label}</h3>
                    <p className="text-neutral-400 text-sm group-hover:text-amber-500 transition-colors break-all line-clamp-1">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Glassmorphic Form */}
          <motion.div 
            initial={{ filter: "blur(10px)", opacity: 0, x: 30 }} 
            whileInView={{ filter: "blur(0px)", opacity: 1, x: 0 }} viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Form subtle inner glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    placeholder="How can we work together?"
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group flex items-center justify-center gap-2 bg-amber-500 text-black font-bold text-sm px-6 py-4 rounded-xl hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : status === "success" ? (
                    <><span>Sent Successfully</span><CheckCircle2 className="w-4 h-4" /></>
                  ) : status === "error" ? (
                    <><span>Failed to Send</span><AlertCircle className="w-4 h-4" /></>
                  ) : (
                    <><span>Send Message</span><Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>

        {/* Footer info merged elegantly */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-neutral-500 text-sm font-medium">© 2025 Rajesh Kumar K. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
