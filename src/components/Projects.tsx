import React from 'react'
import { ExternalLink, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Global Manufacturing Equipment Deployment',
    description: 'Spearheaded a cross-functional team in the successful delivery and installation of state-of-the-art manufacturing equipment across 15 international sites, resulting in a 30% increase in production efficiency and a 25% reduction in operational costs.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    caseStudy: '#',
  },
  {
    title: 'Supply Chain Optimization Initiative',
    description: 'Orchestrated a comprehensive supply chain optimization project, implementing lean methodologies and advanced logistics solutions, resulting in a 40% reduction in lead times and a 25% decrease in operational costs across the global supply network.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    caseStudy: '#',
  },
  {
    title: 'Multinational Stakeholder Alignment Project',
    description: 'Led a complex stakeholder alignment initiative involving 20+ global partners, resulting in streamlined communication channels, a 50% reduction in project delays, and a 35% improvement in overall stakeholder satisfaction scores.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    caseStudy: '#',
  },
]

const Projects: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Signature Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-end">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    <FileText size={20} className="mr-1" /> Case Study
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Projects