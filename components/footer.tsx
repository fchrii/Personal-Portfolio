import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" suppressHydrationWarning>
          <div className="md:col-span-2" suppressHydrationWarning>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">About Us</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              A showcase of my work, skills, and experience as a web developer. Feel free to explore and get in touch if
              you'd like to collaborate.
            </p>
            <div className="flex space-x-4" suppressHydrationWarning>
              <a
                href="https://github.com/fchrii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/vynarchl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@vyarchl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div suppressHydrationWarning>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div suppressHydrationWarning>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Central Java, Indonesia</li>
              <li className="text-gray-600 dark:text-gray-300">fachriahsani86@gmail.com</li>
              <li className="text-gray-600 dark:text-gray-300">+62 851-1726-8127</li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400"
          suppressHydrationWarning
        >
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
