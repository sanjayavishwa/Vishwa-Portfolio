import { Layout } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillItems = [
    { name: 'React.js', category: 'Frontend', level: '90%', icon: Layout },
    { name: 'React.js', category: 'Frontend', level: '90%', icon: Layout },
    { name: 'React.js', category: 'Frontend', level: '90%', icon: Layout },
    { name: 'React.js', category: 'Frontend', level: '90%', icon: Layout },
    { name: 'React.js', category: 'Frontend', level: '90%', icon: Layout },
    { name: 'React.js', category: 'Frontend', level: '90%', icon: Layout }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.8 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 max-w-5xl">
        <div className="mb-16 flex flex-col items-center lg:items-start">
          <span className="text-xs font-mono tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-gray-900">
            Skills<span className="text-violet-500 dark:text-[#c0c0fd]">&</span>Technologies
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-gray-200/50 dark:border-zinc-800/50"
        >
          {skillItems.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 sm:px-8 flex flex-col justify-between group relative transition-colors duration-300 hover:bg-violet-500/5 dark:hover:bg-violet-500/10 ${index % 2 === 0 ? 'md:border-r' : ''} ${index < skillItems.length - 2 ? 'border-b' : 'max-md:border-b'} border-gray-200/50 dark:border-zinc-800/50`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-violet-500 dark:group-hover:text-[#e0c0fd] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-xs font-mono text-gray-500 dark:text-zinc-500">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-sm font-mono text-violet-400 font-semibold">
                    {skill.level}
                  </span>
                </div>

                <div className="w-full h-2 bg-gray-200/50 dark:bg-zinc-800/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                    className="h-full bg-violet-500 dark:bg-violet-400"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills