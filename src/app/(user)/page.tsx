"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'

export default function Home() {
  const {darkMode} = useSelector((state: RootState) => state.darkMode)

  return (
    <div className={`relative z-0 ${darkMode ? 'bg-black-100' : 'bg-white-100'}`}>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero/>
      </div>
    </div>
  )
}
