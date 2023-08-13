/* eslint-disable @next/next/no-img-element */
'use client'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Contact from './Contact'
import Gallery from './Gallery'
import Header from './Header'
import Hero from './Hero'
import Projects from './Projects'
// import Skills from '../components/Skills'
import WorkExperience from './WorkExperience'
import About from './About'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="https://bit.ly/3AZ3Phj" />
      </Head>
      {/*header */}
      <Analytics />
      <Header/>
      {/*hero */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>
      {/* about */}
      <section id='about' className='snap-center'>
        <About/>
      </section>
      <section  id='experience' className='snap-center'>
      <WorkExperience/>
      </section>
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>
      <section id='gallery' className='snap-start'>
        <Gallery/>
      </section>
      <section id='contact' className='snap-start'>
        <Contact/>
      </section>
      <Link href='#hero'>
      <footer className='sticky bottom-20 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <Image 
          className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
          cursor-pointer'
          src='https://bit.ly/37UsMyW'
          height={100} 
          width={100}
          alt=''/>
        </div>
      </footer>
      </Link>
    </div>
  )
}