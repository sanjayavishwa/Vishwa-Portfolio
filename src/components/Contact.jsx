import React from 'react'
import Portfolio1 from "../assets/Portfolio1.png";
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contacts' className="py-20 relative overflow-hidden">
        <div className='container mx-auto px-6 max-w-6xl relative z-10'>
            <div className="text-center mb-6"
            data-aos='fade-up'>
                <h2 className="text-3xl sm:text-4xl font-bold mb-3 dark:text-white text-gray-900">
                    Get In <span className="text-violet-500
                    dark:text-[#e0c0fd]">Touch</span>
                </h2>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
                <div className="flex justify-center w-full relative min-h-120 lg:-translate-x-48"
                data-aos='fade-up'>
               


            <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                <div className=" w-75 h-90 rounded-full bg-violet-400/65
                dark:bg-violet-500/40 blur-3xl scale-110">

                </div>
                <img src={Portfolio1} alt="Contact" className='w-96 h-120 object-cover rounded-3xl relative
                z-10'/>

                 
             
             </div>

                     </div>

           
            <form 
            onSubmit={(e) => e.preventDefault()}
            className='flex flex-col gap-5 dark:bg-zinc-900/30
            bg-white/50 p-8 sm:p-10 rounded-3xl border
            dark:border-zinc-800 border-gray-100 backdrop-blur-sm
            w-full max-w-xl mx-auto lg:mx-0 '
            data-aos='fade-up'>
              <input 
              type='text'
                placeholder='Your Name'
                className='w-full px-5 py-4 rounded-xl border
                outline-hidden text-base transition-all dark:border-zinc-800
                border-gray-200 dark:bg-zinc-900/60 bg-white
                dark:text-white text-gray-800 focus:border-violet-500
                dark:focus:border-violet-400'
                required
                data-aos='fade-up '
                data-aos-delay='100'
                />
                <input 
              type='email'
                placeholder='Your Email'
                className='w-full px-5 py-4 rounded-xl border
                outline-hidden text-base transition-all dark:border-zinc-800
                border-gray-200 dark:bg-zinc-900/60 bg-white
                dark:text-white text-gray-800 focus:border-violet-500
                dark:focus:border-violet-400'
                required
                data-aos='fade-up '
                data-aos-delay='200'
                />
                 <textarea
                 rows='5'
                placeholder='Your Message'
                className='w-full px-5 py-4 rounded-xl border
                outline-hidden text-base transition-all dark:border-zinc-800
                border-gray-200 dark:bg-zinc-900/60 bg-white
                dark:text-white text-gray-800 focus:border-violet-500
                dark:focus:border-violet-400'
                required
                data-aos='fade-up '
                data-aos-delay='300'
                />


              
              
              
                <button type='submit'
                 className='inline-flex items-center justify-center
                 gap-2 px-8 py-4 rounded-xl text-white font-medium
                 text-base bg-violet-600 hover:bg-violet-700
                 active:scale-98 transition-all cursor-pointer
                 w-full sm:w-fit '
                    data-aos='fade-up'
                    data-aos-delay='400'>
                        <Send size={20}/>
                
                    Send Message
                </button>
            </form>
        </div>

            </div>

    </section>
  )
}

export default Contact