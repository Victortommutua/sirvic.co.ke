import Image from 'next/image'
import React from 'react'

type Props = {}

function Gallery({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3  className='absolute top-20 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            Gallery
        </h3> 
          <div className='w-screen mt-20 flex-shrink-0 snap-center flex flex-col 
          space-y-5  md:p-44 p-20 h-screen'>
            <Image
            className='relative rounded-sm h-32 w-32 mx-auto object-fit'
            src='https://shorturl.at/ahzDV'
            width={100}
            height={100}
             alt=''
            />
          </div>
    </div>
  )
}

export default Gallery