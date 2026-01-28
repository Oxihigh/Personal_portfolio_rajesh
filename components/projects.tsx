"use client"

import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Histopathology-based mitotic Detection",
      description:
        "yolo and resnet based deep learning model to detect mitotic figures in histopathology images to assist pathologists in cancer diagnosis.",
      tags: ["PyTorch", "OpenCV", "Deep Learning","Streamlit", "Healthcare AI"],
      link: "https://github.com/Oxihigh/Bcosified_Mitotic_detection.git",
    },
    {
      title: "Multi-purpose Chatbot",
      description:
        "AI-powered chatbot using LangChain, Cohere, and FAISS for RAG-based context-aware responses with Streamlit UI.",
      tags: ["LangChain", "Cohere", "FAISS", "Streamlit"],
      link: "https://github.com/Oxihigh/TextFile-retrieval-based-chatbot-with-streamlit.git",
    },
  ]

  return (
    <section id="projects" className="min-h-screen bg-neutral-950 py-20 px-6">
      <motion.div className="max-w-6xl mx-auto">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</motion.h2>
        <p className="text-white mb-16 text-lg">
          Exploring the intersection of AI, computer vision, and real-world applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-neutral-900 border border-neutral-800 p-8 rounded-lg hover:border-neutral-600 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neutral-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 text-neutral-400 group-hover:text-white transition-colors">View on GitHub →</div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
