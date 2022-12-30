import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}

export default function Contact({}: Props) {
const { register, handleSubmit} = useForm<Inputs>();
const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href=`mailto:mutuavictor801@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}
    ${formData.message}`
}
  return (
    <div className='relative flex md:text-left flex-col text-center 
    md:flex-row max-w-7xl mx-auto items-center justify-evenly h-screen'>
        <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            Contact
        </h3>
        <div className='flex space-y-10 flex-col'>
            <h4 className='text-2xl font-semibold text-center'>
                Hook up with me.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]'/>
                <p className='text-2xl'>+254741030066</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <MapIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]'/>
                <p className='text-2xl'>mutuavictor801@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='h-7 w-7 animate-pulse text-[#F7AB0A]'/>
                <p className='text-2xl'>Nairobi</p>
                </div>

            </div>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto'> 
                <div className='flex space-x-2'>
                    <input {...register('name')}placeholder='Name' className='contactInput' type='text'/>
                    <input {...register('email')} placeholder='Email' className='contactInput' type='email'/>
                </div>
                <input {...register('subject')}placeholder='Subject' className='contactInput' type='text'/>
                <textarea {...register('message')} placeholder='Message' className='contactInput'/>
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black
                font-bold text-lg
                '>Submit
                </button>
            </form>
        </div>
    </div>
  )
}