"use client"
import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Exp from '@/components/Exp'
import ToolSkill from '@/components/ToolSkill'
import Project from '@/components/Project'
import Feedback from '@/components/Feedback'
import Contact from '@/components/Contact'
import StarsCanvas from '@/components/canvas/Stars'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'

export default function ContactPage() {
  const {darkMode} = useSelector((state: RootState) => state.darkMode)
  return (
    <div className={`relative z-0 ${darkMode ? 'bg-black-100' : 'bg-white-100'}`}>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
    </div>
  )
}
