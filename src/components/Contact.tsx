import React from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Initiate Dialogue</h2>
        <motion.form
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Full Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message Content</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" required></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Inquiry
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  )
}

export default Contact