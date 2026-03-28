"use client"

import { motion } from "framer-motion"
import { BlurText } from "@/components/ui/blur-text"

export default function Projects() {
  const projects = [
    {
      title: "Explainable AI Decision Support System for Mitotic Detection using B-cos Networks",
      description:
        "YOLO and Resnet based deep learning model that can detect mitotic figures in histopathology WSI leveraging Bcos networks which makes the model transparent and explainable.",
      tags: ["PyTorch", "OpenCV", "Deep Learning", "Streamlit", "Healthcare AI"],
      link: "https://github.com/Oxihigh/Bcosified_Mitotic_detection.git",
    },
    {
      title: "Multi-purpose Chatbot",
      description:
        "AI-powered chatbot using LangChain, Cohere, and FAISS for RAG-based context-aware responses where the user can upload a document and get responses based off the document with citations.",
      tags: ["LangChain", "Cohere", "FAISS", "Streamlit"],
      link: "https://github.com/Oxihigh/TextFile-retrieval-based-chatbot-with-streamlit.git",
    },
    {
      title: "Mortgage Automation Engine",
      description:
        "This project leverages an agentic workflow to streamline the mortgage origination process. By integrating intelligent AI agents, it automates complex data extraction and validation tasks traditionally handled manually. The system enhances operational efficiency and accuracy within the mortgage lifecycle through seamless tool orchestration.",
      tags: ["n8n", "Agentic AI", "Workflow Automation", "Mortgage Tech"],
      link: "https://github.com/Oxihigh/Mortgage-Automation",
    },
  ]

  return (
    <section id="projects" className="min-h-screen bg-neutral-950 py-20 px-6">
      <motion.div className="max-w-6xl mx-auto">
        <BlurText text="Featured Projects" className="text-4xl md:text-5xl font-bold text-white mb-4" />
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
              initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }} viewport={{ once: true }}
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
