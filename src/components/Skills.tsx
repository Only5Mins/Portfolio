import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Strategic Project Planning & Execution', level: 95 },
  { name: 'Risk Management & Mitigation', level: 90 },
  { name: 'Stakeholder Engagement & Communication', level: 92 },
  { name: 'Global Supply Chain Optimization', level: 88 },
  { name: 'Contract Negotiation & Vendor Management', level: 85 },
  { name: 'Cross-cultural Leadership & Team Building', level: 90 },
]

const Skills: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">{skill.name}</span>
                <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skills