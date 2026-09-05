import React from 'react'
import { FaInstagram, FaGithub, FaTiktok, FaYoutube } from 'react-icons/fa'

const Hero = ({ darkMode }) => {
    const socialIcons = [
        { icon: FaInstagram, alt: 'Instagram', link: 'https://instagram.com' },
        { icon: FaYoutube, alt: 'Youtube', link: 'https://youtube.com' },
        { icon: FaGithub, alt: 'Github', link: 'https://github.com' },
        { icon: FaTiktok, alt: 'Tiktok', link: 'https://tiktok.com' }
    ]

    return (
        <div>
            <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
                <div className='container mx-auto px-4 sm:px-8 lg:px-14 lg:py-0 lg:mt-8'>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                        <div
                            className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
                            data-aos="fade-right"
                        >
                            <div className='flex gap-4 sm:gap-6 mb-6'>
                                {socialIcons.map((social, index) => {
                                    const Icon = social.icon

                                    return (
                                        <a
                                            key={index}
                                            href={social.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label={social.alt}
                                            className='p-2 rounded-full transition-all duration-300
                                            hover:scale-100 dark:hover:bg-violet-500/20
                                            hover:bg-violet-500/10 dark:text-gray-300
                                            text-gray-600 dark:hover:text-violet-400
                                            hover:text-violet-600'
                                        >
                                            <Icon size={24} />
                                        </a>
                                    )
                                })}
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
                                Hi, I'm <span className="text-purple-600 dark:text-purple-400">Sanjaya Vishwa</span>
                            </h1>
                            <h2 className='text-xl sm:text-2xl lg:text-3xl font-mono mb-4
                            dark:text-violet-400 text-violet-600'>FULLSTACK DEVELOPER</h2>
                            <p className= "mb-8 leading-relaxed max-w-md dark:text-white"> I'm Sanjaya Vishwa Anuradha.I'm 25 years old.I have successfully completed Bsc(hons) Software Engineering.

                            
                            </p>

                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero