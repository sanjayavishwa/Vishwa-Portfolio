import { ChevronLeft } from 'lucide-react'
import { useRef } from 'react'
import project1 from '../assets/project1.png'



const Projects = () => { 
        const scrollRef =useRef(null)

        const projectsData =[
            {
                id:1,
                image:project1,
                title:'3D Portfolio',
                desc:'lgddhd hdhddhd gdgdgdgd ddydydyd gdggdgd gdggdgd hdhd dhd dhd dhd',
                tags:['React','Tailwincss','Framer Motion']
            },
            {
                id:2,
                image:project1,
                title:'3D Portfolio',
                desc:'lgddhd hdhddhd gdgdgdgd ddydydyd gdggdgd gdggdgd hdhd dhd dhd dhd',
                tags:['React','Tailwincss','Framer Motion']
            },
            {
                id:3,
                image:project1,
                title:'3D Portfolio',
                desc:'lgddhd hdhddhd gdgdgdgd ddydydyd gdggdgd gdggdgd hdhd dhd dhd dhd',
                tags:['React','Tailwincss','Framer Motion']
            },
            {
                id:4,
                image:project1,
                title:'3D Portfolio',
                desc:'lgddhd hdhddhd gdgdgdgd ddydydyd gdggdgd gdggdgd hdhd dhd dhd dhd',
                tags:['React','Tailwincss','Framer Motion']
            },
            {
                id:5,
                image:project1,
                title:'3D Portfolio',
                desc:'lgddhd hdhddhd gdgdgdgd ddydydyd gdggdgd gdggdgd hdhd dhd dhd dhd',
                tags:['React','Tailwincss','Framer Motion']
            },
            {
                id:6,
                image:project1,
                title:'3D Portfolio',
                desc:'lgddhd hdhddhd gdgdgdgd ddydydyd gdggdgd gdggdgd hdhd dhd dhd dhd',
                tags:['React','Tailwincss','Framer Motion']
            }
            
        ]

        const infiniteProjects=[
            ...projectsData, ...projectsData, ...projectsData
        ]
        const handleScroll =(direction) => {
            if(scrollRef.current){
                const { scrollLeft ,clientWidth} = scrollRef.current
                const scrollAmount =clientWidth
                const targetScroll = direction === 'left'
                ? scrollLeft - scrollAmount : scrollLeft + scrollAmount

                scrollRef.current.scrollTo({
                    left:targetScroll,
                    behavior:'smooth'
                })
                setTimeout(() => {
                    if(scrollRef.current){
                        const maxScroll = scrollRef.current.scrollWidth /3
                        if (scrollRef.current.scrollLeft >= maxScroll * 2){
                            scrollRef.current.scrollLeft = maxScroll
                        } else if (scrollRef.current.scrollLeft <=0){
                            scrollRef.current.scrollLeft = maxScroll
                        }
                    }
                }, 400)
            }
        }
     return(
         
        <section id='projects' className='py-20 relative overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-14 relative z-10'>
                <div className='text-center sm:text-left'>
                    <h2 className='text-3xl sm:text-4xl font-bold mb-4
                    dark:text-white text-gray-900'>My Creative <span className='text-violet-500 dark:text-[#e0cfd]'>
                        Projects
                    </span>

                    </h2>

                </div>
                <div className='flex gap-4'>
                    <button
                    onClick={() => handleScroll('left')}
                     className='p-3 rounded-full border-2 transition-all
                     duration-300 dark:border-zinc-200 border-gray-800
                     dark:text-white text-gray-800 hover:border-violet-500
                     dark:hover:border-violet-500 hover:bg-violet-500/10
                     dark:hover:bg-violet-500/10'>
                        <ChevronLeft size={22}/>

                    </button>
                    <button 
                    onClick={() => handleScroll('right')}
                     className='p-3 rounded-full border-2 transition-all
                     duration-300 dark:border-zinc-200 border-gray-800
                     dark:text-white text-gray-800 hover:border-violet-500
                     dark:hover:border-violet-500 hover:bg-violet-500/10
                     dark:hover:bg-violet-500/10'>
                        <ChevronLeft size={22}/>


                    </button>

                </div>

            </div>
            <div 
            ref={scrollRef}
            className='flex gap-6 scrollbar-none snap-mandatory
            overflow-x-hidden w-full px-4 '>
                {infiniteProjects.map((project,index) => (

                    <div key={`${project.id}-${index}`}
                    className='w-full md:w-[calc(50%-12px)]
                    lg:w-[calc(33.333%-16px)] shrink-0 snap-start
                    group rounded-3xl overflow-hidden border-2
                    transition-all duration-300 dark:border-zinc-800/60
                    border-gray-100 dark:bg-zinc-900/40 bg-white
                    hover:border-violet-500/50
                    dark:hover:border-violet-500/50
                    hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)]
                    flex flex-col'>
                        <div className='realtive overflow-hidden aspect-video
                        bg-gray-100 dark:bg-zinc-900'>
                            <img src={project1.image}
                            alt={project1.title}
                            className='w-full h-full object-cover
                            transition-transform duration-500 group-hover:scale-105'/>

                            <div className='absolute inset-0 bg-linear-to-t from-black/20
                            to-transparent opacity-0 group-hover:opacity-100 transition-opacity
                            duration-300'>

                            </div>
                            <div className='p-6  flex flex-col justify-between grow min-h-50'>
                                <div >
                                    <h3 className='text-lg font-bold mb-2 dark:text-white
                                    text-gray-900 group-hover:text-violet-500
                                    dark:group-hover:text-violet-400 transition-colors
                                    duration-300'>
                                        {project.title}

                                    </h3>
                                    <p className='text-xs leading-relaxed mb-4
                                    dark:text-gray-400 text-gray-600 line-clamp-2
                                    '>
                                        {project.desc}

                                    </p>

                                </div>
                                <div>
                                    <div className='flex flex-wrap gap-1.5 mb-4'>
                                        {project.tags.map((tag,i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] font-medium px-2.5 py-0.5 
                                                rounded-full font-mono dark:bg-violet-500/10
                                                bg-violet-500/5 dark:text-violet-300
                                                text-violet-600">
                                                    {tag}
                                            </span>
                                        ))}


                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>


                ))}

            </div>

            
            
        </section>

     )

}

export default Projects