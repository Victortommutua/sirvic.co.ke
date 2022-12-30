/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

function ExperienceCard() {
    const WorkExperience = [
        {
            id: 1,
            company: "Afro Egypt Engineering",
            jobTittle: "RF & MW ENGINEER",
            image: "/afro.png",
            dateStarted: '',
            dateEnded: '',
            isCurrentlyWorkingHere: 'Present',
            imageAlt: "img.",
            points: 'Perform pre-commission, Commissioning, Integration, Maintenance, and Upgrades to LTE cell site equipment and auxiliary equipment. LTE BTS Installation, Configuration, Maintenance, and Trouble Shooting Create and manage Integration Ready to Proceed (INTP) Responsible for equipment powered up and testing in a production environment including cable connections.,'
          },
          {
            id: 2,
            company: "SAFARICOM PLC",
            jobTittle: "JUNIOR SOFTWARE ENGINEER",
            image: "/safaricom.jpg",
            dateStarted: 'TUE SEP 28 2021 -',
            dateEnded: 'THU FEB 24 2022',
            isCurrentlyWorkingHere: '',
            imageAlt: "img.",
            points: '',
          },
          {
            id: 3,
            company: "MAKUENI COUNTY ASSEMBLY",
            jobTittle: "NETWORK ENGINEER",
            image: "/makueni.png",
            dateStarted: 'MON MAY 03 2021 - ',
            dateEnded: 'FRI JUL 30 2021',
            isCurrentlyWorkingHere: '',
            imageAlt: "img.",
            points:'',
          },
          
]
  return ( 
  <article  className='flex flex-col rounded-lg items-center space-y-7
  flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] 
  p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity
  duration-200 overflow-hidden'>
    <motion.img 
     initial={{
      y: -100,
      opacity: 0,
    }}
    transition={{duration: 1.2,}}
  whileInView={{ opacity: 1, y: 0}}
  viewport={{once:true}}
    className='rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px]
    object-cover object-top mt-20'
    src='../safaricom.jpg'
    alt="" />
    

    
    <div  className='px-0 md:px-10 overflow-y-auto'>
      <h4 className='text-xl font-light'>JUNIOR SOFTWARE ENGINEER</h4>
      <p className='font-bold text-xl mt-1'>SAFARICOM PLC</p>
      <div className='flex space-x-2 my-2'>
      </div>
      <p className='uppercase py-5 text-gray-300'>
      08-09-2021 - 24-02-2022
      </p>
      <ul className='list-disc space-y-4 ml-5 text-md'>
        <li>Analyse user requirements</li>
        <li>Write and test code, refining and rewriting it as necessary and communicate with any programmers involved in the project</li>
        <li>Research, design and write new software programs</li>
        <li>Develop existing programs by analysing and identifying areas for modification</li>
        <li>Work closely with other staff, such as project managers, graphic artists, UX designers, other developers, systems analysts and sales and marketing professionals</li>
        <li>Continually update technical knowledge and skills by attending in-house and external courses, reading manuals and accessing new applications</li>
        <li>Investigate new technologies</li>
      </ul>
    </div>
    </article>
  )
}

export default ExperienceCard