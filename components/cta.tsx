"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function CTA() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your project?</h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          Let's work together to create something amazing. Contact me today to discuss your project requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
              Get in Touch
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/projects">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
              View My Work
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
