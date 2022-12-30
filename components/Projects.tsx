/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'


function Projects() {

    const projects = [
        {
            id: 1,
            title: 'Netflix clone',
            image: '../netflix.png',
            href: 'https://nf-clone-tol7.vercel.app/',
            summary: 'Netflix app that has a log in and log out authentication with google. it has a beautiful home screen with all the movies looking just like Netflix. There is also a subscription where you can see your active monthly subscription. We also use stripe payments for the monthly Netflix Subscription!',

        },
        {
            id: 2,
            title: 'Amazon clone',
            image: '../amazon.png',
            href: '',
            summary: 'Amazon clone its web based where one can shop online, add to basket, remove from basket and stripe payment method.',
        },
        {
            id: 3,
            title: 'Medium clone',
            image: '../medium.png',
            href: '',
            summary: 'Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.',
        },
        {
            id: 4,
            title: 'Hulu clone',
            image: '../hulu.png',
            href: '',
            summary: 'Hulu app that has a log in and log out authentication with google. it has a beautiful home screen with all the movies looking just like Hulu. There is also a subscription where you can see your active monthly subscription. We also use stripe payments for the monthly Netflix Subscription!',
        },
        {
            id: 5,
            title: 'Google clone',
            image: '../google.png',
            href: 'https://google-clone-omega-tawny.vercel.app/',
            summary: 'A replica of Google search engine',
        },
        {
            id: 6,
            title: 'AirBnB clone',
            image: '../airbnb.png',
            href: '',
            summary: 'AirBnB web app just like the original one it offers short term stay. It offers online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in specific locales.',
        }
    ]
  return (
    <motion.div 
    initial={{opacity: 0,}}
    whileInView={{ opacity: 1,}}
    transition={{duration: 1.5,}}
    className='h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
       <h3  className='absolute top-20 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            Projects
        </h3> 
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
        snap-mandatory snap-x z-20 scrollbar-thin scrollbar-track-gray-400/20 
        scrollbar-thumb-[#F7AB0A]/80'>
            {projects?.map((project, i)=> (
                <div 
                key={i}
                className='w-screen flex-shrink-0 snap-center flex flex-col 
                space-y-5 items-center justify-center md:p-44 p-20 h-screen'>
                    <a href={project?.href}>
                    <motion.img
                    initial={{
                        y:300,
                        opacity:0,
                    }}
                    whileInView={{ opacity: 1, y:0 }}
                    transition={{duration: 1.2,}}
                    viewport={{once:true}}
                    src={project?.image}
                    />
                    </a>
                    <div className='space-y-10 px:0 md:px-10 max-w-6xl'>
                        <h4 className=' font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case Study {i + 1} of {projects.length}: 
                            </span>{" "}
                           {project?.title}
                        </h4>
                        <p className='text-sm text-center md:text-left'>
                            {project?.summary}
                        </p>
                        </div>
                </div>
            ))}
            <div>
            </div>
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0
        h-[500px] -skew-y-12'>
        </div>
    </motion.div>
  )
}

export default Projects