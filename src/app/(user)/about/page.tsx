"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Exp from '@/components/Exp'
import ToolSkill from '@/components/ToolSkill'
import Feedback from '@/components/Feedback'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import Blank from '@/components/Blank'

export default function AboutPage() {
  const {darkMode} = useSelector((state: RootState) => state.darkMode)
  return (
    <div className={`relative z-0 ${darkMode ? 'bg-black-100' : 'bg-white-100'}`}>
        <About/>
        <Exp/>
        <ToolSkill/>
        <Blank/>
    </div>
  )
}
