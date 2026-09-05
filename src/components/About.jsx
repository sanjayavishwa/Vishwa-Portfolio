import React from 'react'

const About = () => {
    const stats = [
        { value: '5+',label: "Years"},
        { value: '50+',label: "projects"},
        { value: '100%',label: "Saticsfaction"},
    ]
    return (
        <section id='about' className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden">
            <div
                className="relative order-2 lg:order-1"
                    data-aos='fade-right'>
                        <div
                            className = 'relative w-full max-w-sm mx-auto lg:mx-0'>
                                <div className="absolute inset-0 bg-linear-to-tr from-violet-500
                                to-transparent rounded-[40%_60%_60%/40%_60%_70%]
                                transform rotate-3"></div>
                                <img
                                src={about}
                                alt="About"
                                className="relative rounded-[40%_60%_60%/40%_60%_70%]
                                shadow-2xl w-full h-auto object-cover transform
                                rotate/>
                        </div>

            </div>

        </section>
    )
}