"use client"
import React from 'react'
import Project from '@/components/Project'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import Blank from '@/components/Blank'

export default function ProjectPage() {
  const {darkMode} = useSelector((state: RootState) => state.darkMode)
  return (
    <div className={`relative z-0 ${darkMode ? 'bg-black-100' : 'bg-white-100'}`}>
        <Project/>
        <Blank/>
    </div>
  )
}
