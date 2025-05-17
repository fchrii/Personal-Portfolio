"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

type Testimonial = {
  id: string
  name: string
  position: string
  avatar: string
  content: string
  rating: number
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
//   {
//      id: "1",
//      name: "Sarah Johnson",
//      position: "Marketing Director",
//      avatar: "/placeholder.svg?height=100&width=100",
//      content:
//        "Working with John was an absolute pleasure. He delivered our website on time and exceeded all our expectations. His attention to detail and creative solutions made our project stand out.",
//      rating: 5,
//    },
  ])

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    position: "",
    content: "",
    rating: 5,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const savedTestimonials = localStorage.getItem("testimonials")
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials))
    }
  }, [])

  // Save testimonials to localStorage when they change
  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials))
  }, [testimonials])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewTestimonial((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (rating: number) => {
    setNewTestimonial((prev) => ({ ...prev, rating }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!newTestimonial.name || !newTestimonial.position || !newTestimonial.content) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission delay
    setTimeout(() => {
      const id = Date.now().toString()
      const testimonial: Testimonial = {
        ...newTestimonial,
        id,
        avatar: "/placeholder.svg?height=100&width=100",
      }

      setTestimonials((prev) => [testimonial, ...prev])
      setNewTestimonial({
        name: "",
        position: "",
        content: "",
        rating: 5,
      })

      toast({
        title: "Success",
        description: "Your testimonial has been added. Thank you for your feedback!",
      })

      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Client Testimonials</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Here's what people are saying about working with me. I value every client relationship and strive to exceed
          expectations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white">{testimonial.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={`h-4 w-4 ${
                    i < testimonial.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Leave a Testimonial</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={newTestimonial.name}
                onChange={handleInputChange}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="position" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Position
              </label>
              <Input
                id="position"
                name="position"
                value={newTestimonial.position}
                onChange={handleInputChange}
                placeholder="Your job title"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Testimonial
            </label>
            <Textarea
              id="content"
              name="content"
              value={newTestimonial.content}
              onChange={handleInputChange}
              placeholder="Share your experience working with me"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Rating</label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  type="button"
                  onClick={() => handleRatingChange(rating)}
                  className="focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    className={`h-6 w-6 ${
                      rating <= newTestimonial.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Testimonial"}
          </Button>
        </form>
      </motion.div>
    </section>
  )
}
