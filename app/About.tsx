/* eslint-disable react/no-unescaped-entities */
// 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
import { motion } from 'framer-motion'
import React from 'react'

function About() {
  return (
    <motion.div 
    initial={{opacity: 0,}}
    whileInView={{ opacity: 1,}}
    transition={{duration: 1.5,}}
    className='flex flex-col relative text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen'>
        <h3 className='absolute top-20 uppercase tracking-[20px]
        text-gray-500 text-2xl'>
            About
            </h3>
            <motion.img
            initial={{
                x: -200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{once:true}}
            src='https://shorturl.at/hBIX7'
            className='-mb-30 mt-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-fit
            md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-3xl font-semibold '>
                    Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background:
                    </h4>
                    <p className='text-base'>Experience in working in operator's networks: designing, scripting, configuring, and maintaining Fiber, LTE, and 5G solutions with Ericsson, Nokia, NEC, Aviat & Huawei. Also a certified SOFTWARE ENGINEER where i analyse and modify existing software as well as designing, constructing and testing end-user applications that meet user needs using robust software programming languages and 
                    libraries such as Javascript, React, NextJs, Redux, PHP, JAVA and intergration of payment API's such as MPESA, Stripe, PAYPAL</p>
            </div> 
    </motion.div>
  )
}

export default About