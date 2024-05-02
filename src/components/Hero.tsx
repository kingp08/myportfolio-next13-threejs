"use client"
import React, {useState} from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import LaptopCanvas from "./canvas/Laptop"
import { USER_EXPERIENCE, USER_NAME } from '@/utils/constants'

const Hero = () => {

  const {darkMode} = useSelector((state: RootState) => state.darkMode)

  return(
    <section className="relative w-full sm:w-4/5 h-screen ml-auto">
      <div
        className={`absolute inset-0 top-8 max-w-7xl max-h-fit z-[2] mx-auto
        sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-primary' />
            <div className='w-1 sm:h-80 h-40 torque-gradient' />
        </div>
  
        <div className={`flex flex-col items-center ${darkMode ? 'text-white-100' : 'text-black-100'}`}>
            <h1 className={`font-black lg:text-6xl sm:text-4xl xs:text-3xl text-3xl mt-2`}>
              Hi, I'm <span className='text-primary'> {USER_NAME} </span>
            </h1>
            <p className={`font-medium lg:text-3xl sm:text-2xl xs:text-xl text-base mt-2`}>
              I am a Senior Full Stack developer. <br className='sm:block hidden' />
              🏆 {USER_EXPERIENCE}+ years of experience <br className='sm:block hidden' />
              Welcome to my website!
            </p>
            <div className="flex flex-row gap-8 mt-4">
              <Link href="/project">
                <button
                className="mb-2 flex flex-row items-center justify-center gap-2 rounded bg-button-gradien px-6 py-2.5 
                text-xs font-medium uppercase leading-tight text-white shadow-white 
                transition duration-150 ease-in-out active:bg-primary-800 active:shadow-lg hover:scale-125">
                  <p>My Project</p>
                </button>
              </Link>
              <Link href="/blog">
                <button
                className={`mb-2 flex flex-row items-center justify-center gap-2 rounded ${darkMode?'bg-black-100':'bg-white-100'} px-6 py-2.5 
                text-xs font-medium uppercase leading-tight text-secondary border-2 border-secondary
                transition duration-150 ease-in-out active:bg-primary-800 active:shadow-lg hover:scale-125`}>
                  <p>Blog</p>
                </button>
              </Link>
            </div>
            {/* <div className="mt-4">
              <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1aacd3HOVgNqlob7UJqMYHIKEfghLDEid/view?usp=drive_link" className="cursor-pointer text-primary hover:text-tertiary hover:scale-105">Download My CV</a>
            </div> */}
        </div>
      </div>
      <motion.div className="h-full w-full">
        <LaptopCanvas/>
      </motion.div>
    </section>
  )
}

export default Hero