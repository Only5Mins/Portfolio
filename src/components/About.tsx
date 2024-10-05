import React from 'react'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Professional Synopsis</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Your Name" className="rounded-full w-64 h-64 mx-auto shadow-lg object-cover" />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:w-1/2"
          >
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              As a distinguished Global Project Management Executive with [X] years of experience, I specialize in orchestrating complex equipment delivery initiatives across international markets. My expertise lies in optimizing global supply chain logistics, implementing robust risk mitigation strategies, and ensuring seamless project execution from inception to closure.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Leveraging my proficiency in advanced project management methodologies such as PMBOK, PRINCE2, and Agile frameworks, I have successfully delivered multimillion-dollar projects on time and within budget. My strategic approach to stakeholder engagement and cross-cultural communication has been instrumental in fostering strong partnerships with clients, vendors, and team members across diverse global landscapes.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default About