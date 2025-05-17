"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">My Projects</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore my latest work and personal projects. Each project represents my passion for creating beautiful and
          functional web experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {["all", "web", "iot", "mobile"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  )
}

const projects = [
  {
    title: "Techtonics Websites",
    description:
      "A class website, which combines beauty, dynamism, and unity among students.",
    image: "/techtonics.png?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Framer Motion"],
    category: "web",
    link: "https://techtonics.space",
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio website, created to showcase all the developer's skills.",
    image: "/portfolio.png?height=400&width=600",
    technologies: ["Next.js", "Tailwind CSS", "React.js"],
    category: "web",
    link: "https://fachriahsani.vercel.app",
  }
]
