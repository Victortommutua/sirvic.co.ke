import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCardOne from './ExperienceCardOne'
import ExperienceCardTwo from './ExperienceCardTwo'
import ExperienceCardThree from './ExperienceCardThree'



function WorkExperience() {
  return (
    <motion.div 
    initial={{opacity: 0,}}
    whileInView={{ opacity: 1,}}
    transition={{duration: 1.5,}}
    className='h-screen flex relative overflow-hidden flex-col text-left
    md:flex-row max-w-full  justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px]
        text-gray-500 text-2xl'>
            Experience
            </h3>
            <div className='w-full flex space-x-5 overflow-x-scroll snap-x
            snap-mandatory scrollbar scrollbar-track-gray-400/20 
            scrollbar-thumb-[#F7AB0A]/80'>
                <ExperienceCardOne/>
                <ExperienceCardTwo/>
                <ExperienceCardThree/>
            </div>
        </motion.div>
  )
}

export default WorkExperience