import React from 'react'
import Portfolio1 from "../assets/Portfolio1.png";
import { ArrowRight } from 'lucide-react';

const About = () => {
    const stats = [
        { value: '3+',label: "Years"},
        { value: '30+',label: "projects"},
        { value: '100%',label: "Saticsfaction"},
    ]
    return (
        <section id='about' className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden">
            <div clasName='max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6'>
            <div
                className="relative order-2 lg:order-1"
                    data-aos='fade-right'>
                        <div
                            className = 'relative w-full max-w-sm mx-auto lg:mx-0'>
                                <div className="absolute inset-0 bg-linear-to-tr from-violet-500
                                to-transparent rounded-[40%_60%_60%/40%_60%_70%]
                                transform rotate-3"></div>
                                <img
                                src={Portfolio1}
                                alt="Portfolio1"
                                className="relative rounded-[40%_60%_60%/40%_60%_70%]
                                shadow-2xl w-full h-auto object-cover transform
                                rotate-3"
                                />
                                <div className="absolute bottom-4 right-4 w-20 h-20 bg-violet-500/20
                                rounded-full blur-2xl">

                                </div>
                            </div>
                        </div>
                        <div className='order-1 lg:order-2'
                         data-aos='fade-left'>
                            <span className='inline-block text-violet-500
                            dark:text-violet-400 font-semibold text-sm tracking-wider
                            uppercase mb-3'>About Me
                            </span>
                            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6
                             dark:text-white text-gray-600'>
                                I'm a Passionate Developer
                            </h2>
                            <p className=' text-base lg:text-lg mb-8 leading-relaxed
                             dark:text-gray-300 text-gray-600'>
                                I am a dedicated software developer with a passion for creating innovative solutions.
                                 With over 5 years of experience, I specialize in building scalable web applications using 
                                 modern technologies.
                            </p>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                                {stats.map((stat, index) => (
                                    <div key={index}
                                     className='p-4 rounded-4xl text-center transition-all
                                     duration-300 hover:scale-105 dark:bg-white/5
                                     bg-gray-50 hover:dark:bg-white/10
                                     hover:bg-gray-100'
                                     data-aos='zoom-in'
                                     data-aos-delay={index * 100}>
                                        <div className='text-2xl font-bold text-violet-500 dark:text-white'>
                                            {stat.value}
                                        </div>
                                        <div className='text-sm  dark:text-gray-400
                                        text-gray-500'>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className='group inline-flex items-center gap-6 m-4
                            px-8 py-3 rounded-full font-semibold transition-all
                            duration-300 hover:scale:105 dark:bg-violet-500 bg-violet-500
                            text-white hover:dark:shadow-[0_0_40px_rgba(139,92,246,0.5)]
                            hover:shadow-[0_4px_10px_rgba(139,92,246,0.4)]'
                            data-aos='fade-up'
                            data-aos-delay='300'>
                                Let's Connect
                                <ArrowRight className="w-5 h-5 transition-transform
                                group-hover:translate-x-1"/>
                            </button>
                        </div>
                        </div>
        </section>
    )
}

export default About