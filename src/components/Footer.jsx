import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
	
	return (
		<footer className="flex flex-col items-center justify-center border-t border-violet-200/60 bg-violet-50/80 px-6 py-10 text-center dark:border-violet-900/50 dark:bg-[#170d20]">
			

				<p className="text-center text-sm text-gray-500 dark:text-gray-400">
					© {new Date().getFullYear()} Sanjaya. All rights reserved.
				</p>
			
		</footer>
	)
}

export default Footer
