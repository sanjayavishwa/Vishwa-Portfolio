import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Phone, Sun, X } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contacts', link: '#contacts' },
  ]

  return (
    <div className="fixed z-50 w-full mt-4 flex justify-center">
      <motion.nav
        initial={false}
        animate={{ y: 0 }}
        className="relative w-[90%] max-w-4xl rounded-2xl border
          border-white/20 bg-linear-to-br from-violet-400 to-white
          px-6 py-3 shadow-2xl backdrop-blur-xl
          dark:border-gray-700/50 dark:from-purple-950 dark:to-black"
      >
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="bg-linear-to-r from-purple-600 to-violet-600
              bg-clip-text text-2xl font-bold text-transparent"
          >
            Portfolio
            <span className="text-gray-800 dark:text-white">.</span>
          </motion.a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="font-medium text-gray-700 transition-colors
                  hover:text-purple-600 dark:text-gray-300
                  dark:hover:text-purple-400"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Contact me"
              className="rounded-full bg-purple-100 p-2 transition-colors
                hover:bg-purple-200 dark:bg-purple-900/30
                dark:hover:bg-purple-800/30"
            >
              <Phone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </motion.a>

            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="rounded-full bg-gray-100 p-2 transition-colors
                hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </motion.button>

            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen((previous) => !previous)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              className="rounded-lg bg-gray-100 p-2 transition-colors
                hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
                md:hidden"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-gray-700 dark:text-white" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700 dark:text-white" />
              )}
            </motion.button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mt-4 w-full overflow-hidden border-t
                border-gray-200 pt-4 dark:border-gray-700 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="rounded-xl py-3 text-center font-medium
                      text-gray-700 transition-all hover:bg-purple-50
                      hover:text-purple-600 dark:text-gray-300
                      dark:hover:bg-purple-900/20
                      dark:hover:text-purple-400"
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="rounded-xl bg-linear-to-r from-purple-600
                    to-violet-600 py-3 text-center font-semibold text-white
                    shadow-lg transition-shadow hover:shadow-purple-500/25"
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navbar