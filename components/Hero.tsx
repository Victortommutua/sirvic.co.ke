/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {  Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from 'next/link'
import Image from 'next/image'
type Props = {}

function Hero({}: Props) {
  const src ='https://bit.ly/3IgkwsX'
    const [text, count] = useTypewriter({
        words: [
        `With every end, comes a new beginning.`,
        'May God 🙏 fill this New Year with great memories, ', 
        'Continue to pursue your dreams and aspirations.',
        'If it had not been the Lord who was on our side,',
        'now may Israel say 🙏 Psalms 124',
        'Wishing you ❣️ a prosperous 2023',
        'Yours truly SIRVIC',
    ],
    loop: true,
    delaySpeed: 2000,
    })
  return (
    <div  className='h-screen flex flex-col space-y-8 items-center justify-center text-center
    overflow-hidden'>
        {/* <Image 
        loading='lazy'
        className='relative rounded-full h-32 w-32 mx-auto object-fit'
        src='http://bit.ly/3jz6Fnf'
        width={100}
        height={100}
         alt=''
         /> */}
      <video 
      loop={true}
      width="100%"
      muted={true}
      autoPlay={true}
      className='relative rounded-full h-32 w-32 mx-auto object-fit'
       >
      <source src={src} type="video/mp4" />
    </video>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500
            pb-2 tracking-[15px]'>RF & MW ENGINEER</h2>
        <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
            <Link href='#skills'>
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
            <button className='heroButton'>Projects</button>
            </Link>
            <Link href='#gallery'>
            <button className='heroButton'>Gallery</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Hero