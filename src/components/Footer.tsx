import React from 'react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="mt-2">Global Project Management Executive | Equipment Delivery Strategist</p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4"
        >
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Return to Top</a>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer