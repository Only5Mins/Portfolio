import React from 'react'
import { Globe, Briefcase, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white py-32"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Your Name
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl md:text-3xl mb-10"
        >
          Global Project Management Executive | Equipment Delivery Strategist
        </motion.p>
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center space-x-6"
        >
          <motion.a
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-100 transition-colors duration-200"
          >
            <Globe size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.projectmanagement.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-100 transition-colors duration-200"
          >
            <Briefcase size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:your.email@example.com"
            className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-100 transition-colors duration-200"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero