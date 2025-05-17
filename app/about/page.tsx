"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const handleDownloadCV = () => {
    // Analytics tracking could be added here
    console.log("CV download initiated")
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl" suppressHydrationWarning>
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-16">
        <motion.div variants={fadeIn} className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3" suppressHydrationWarning>
            <div
              className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-500"
              suppressHydrationWarning
            >
              <Image src="/profil-about.jpg?height=256&width=256" alt="Profile picture" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-8" suppressHydrationWarning>
            {" "}
            {/* Mengubah space-y-6 menjadi space-y-8 untuk menambah jarak */}
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate web developer with expertise in modern frontend technologies. I love creating beautiful,
              interactive, and user-friendly websites that provide exceptional user experiences.
            </p>
            <div className="pt-4" suppressHydrationWarning>
              {" "}
              {/* Menambahkan padding top untuk jarak tambahan */}
              <Link href="/cv.pdf" download onClick={handleDownloadCV}>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <FontAwesomeIcon icon={faFileArrowDown} className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Rest of the component remains the same but with suppressHydrationWarning added */}
        <motion.div variants={fadeIn} suppressHydrationWarning>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Experience</h2>
          <div className="space-y-8" suppressHydrationWarning>
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500"
                suppressHydrationWarning
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{experience.role}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{experience.company}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{experience.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn} suppressHydrationWarning>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" suppressHydrationWarning>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
                suppressHydrationWarning
              >
                <p className="font-medium text-gray-700 dark:text-gray-200">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn} suppressHydrationWarning>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Education</h2>
          <div className="space-y-6" suppressHydrationWarning>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                suppressHydrationWarning
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

const experiences = [
  {
    role: "CyberSecurity Competition Participants",
    company: "SMK Muhammadiyah 1 Ajibarang",
    period: "2024 - Present",
    description:
      "Achieved 3rd place in a Cyber Security competition.",
  },
]

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Git",
  "Responsive Design",
  "UI/UX Design",
]

const education = [
  {
    degree: "SMK Muhammadiyah 1 Ajibarang",
    institution: "Computer and Network Engineering",
    period: "2023 - 2026",
  },
]
