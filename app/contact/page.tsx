"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      form.reset()
      setIsSubmitting(false)
    }, 1500)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <motion.div variants={fadeIn} className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a question or want to work together? Feel free to reach out to me using the contact form or through
              any of my social media channels.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <FontAwesomeIcon icon={faLocationDot} className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">Central Java, Indonesia</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Email</h3>
                <a className="text-gray-600 dark:text-gray-400" href="mailto:fachriahsani86@gmail.com">fachriahsani86@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <FontAwesomeIcon icon={faPhone} className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Phone</h3>
                <a className="text-gray-600 dark:text-gray-400" href="https://wa.me/6285117268127">+62 851-1726-8127</a>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Connect with me</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/fchrii"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="https://instagram.com/vynarchl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
              <motion.a
                href="https://tiktok.com/@vynarchl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <FontAwesomeIcon icon={faTiktok} className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Send Me a Message</h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject of your message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message" className="min-h-32" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </motion.div>
    </div>
  )
}
