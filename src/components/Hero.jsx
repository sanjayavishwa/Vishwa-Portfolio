import { Download, Mail } from 'lucide-react'
import { FaInstagram, FaGithub, FaTiktok, FaYoutube } from 'react-icons/fa'
import Portfolio1 from "../assets/Portfolio1.png";

// Put your CV PDF inside the /public folder, e.g. public/Sanjaya Vishwa Anuradha CV.pdf
const cvUrl = 'Sanjaya Vishwa Anuradha CV.pdf'

// Note: dark mode is handled with Tailwind's `dark:` classes, so the
// `darkMode` prop passed from App.jsx is intentionally not destructured.
const Hero = () => {
    const socialIcons = [
        { icon: FaInstagram, alt: 'Instagram', link: 'https://instagram.com' },
        { icon: FaYoutube, alt: 'Youtube', link: 'https://youtube.com' },
        { icon: FaGithub, alt: 'Github', link: 'https://github.com' },
        { icon: FaTiktok, alt: 'Tiktok', link: 'https://tiktok.com' }
    ]

    const buttonClasses =
        'w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white ' +
        'font-semibold bg-linear-to-r from-violet-500 to-violet-700 ' +
        'hover:shadow-[0_0_40px_rgba(0,0,0,0.2)] transition-all duration-300 ' +
        'hover:scale-105 hover:-translate-y-0.5 cursor-pointer ' +
        'dark:from-violet-600 dark:to-violet-800'

    return (
        <div>
            <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-8 lg:px-14 lg:py-0 lg:mt-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                        <div
                            className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
                            data-aos="fade-right"
                        >
                            <div className="flex gap-4 sm:gap-6 mb-6">
                                {socialIcons.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.alt}
                                        className="p-2 rounded-full transition-all duration-300
                                        hover:scale-100 dark:hover:bg-violet-500/20
                                        hover:bg-violet-500/10 dark:text-gray-300
                                        text-gray-600 dark:hover:text-violet-400
                                        hover:text-violet-600"
                                    >
                                        <social.icon size={24} />
                                    </a>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
                                Hi, I&apos;m <span className="text-purple-600 dark:text-purple-400">Sanjaya Vishwa</span>
                            </h1>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-mono mb-4 dark:text-violet-400 text-violet-600">
                                FULLSTACK DEVELOPER
                            </h2>
                            <p className="mb-8 leading-relaxed max-w-md dark:text-white">
                                I&apos;m Sanjaya Vishwa Anuradha. I&apos;m 25 years old. I have successfully completed Bsc(hons) Software Engineering.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <a
                                    href={cvUrl}
                                    download="Sanjaya Vishwa Anuradha CV.pdf"
                                    className={buttonClasses}
                                >
                                    <Download size={24} />
                                    Download Resume
                                </a>
                                <a href="#contact" className="w-full sm:w-auto">
                                    <button className="w-full sm:w-auto inline-flex items-center
                                    justify-center gap-2 px-8 py-3 rounded-full
                                    font-semibold border-2
                                    dark:border-violet-500 border-violet-600
                                    dark:text-white text:gray-800
                                    dark:hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]
                                    hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]
                                    transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 cursor-pointer">
                                    <Mail size={24} />
                                    Hire Me
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full max-w-md lg:max-w-lg flex justify-center relative"
                            data-aos="fade-left">
                                <div className='relative'>
                                    <img src={Portfolio1} alt="Portfolio1" className="w-full lg:w-7xl h-auto object-cover 
                                    transform hover:scale-105 transition
                                    duration-500" />

                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero