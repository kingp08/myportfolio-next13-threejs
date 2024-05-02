"use client"
import React, {useEffect,useState} from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector,useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store/store'
import { toggleDarkMode } from '@/redux/slices/darkModeSlice'
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { USER_DOMAIN, USER_NAME, navLinks } from '@/utils/constants'
import LogoCanvas from './canvas/Logo'
import { motion } from 'framer-motion'
const menu = '/assets/menu.svg'
const close = '/assets/close.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const {darkMode} = useSelector((state: RootState) => state.darkMode)
  const pathname = usePathname()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)")
    setToggle(mediaQuery.matches)
    const handleMediaQueryChange = (event: any) => {
      setToggle(event.matches)
    }
    mediaQuery.addEventListener("change", handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  },[])

  return (
    <>
    <nav id="sidenav-1" className={`fixed left-0 top-0 z-20 h-full w-1/2 sm:w-1/5 -translate-x-full 
    overflow-hidden ${darkMode ? 'bg-black-100 shadow-white' : 'bg-white-100 shadow-black'} data-[te-sidenav-hidden='false']:translate-x-0`}
    data-te-sidenav-init 
    data-te-sidenav-hidden={`${!toggle ? "true" : "false"}`} 
    data-te-sidenav-position="absolute" 
    >
      <div className='relative w-full h-full flex flex-col justify-start items-center my-4 gap-8'>

        {/* Logo Link */}
        <Link
          href="/"
          className='flex items-center flex-col'
        >
          <motion.div className=" h-32 w-32">
            <LogoCanvas/>
          </motion.div>
          <p className={`${darkMode ? 'text-white-100' : 'text-black-100'} text-[18px] font-bold cursor-pointer flex`}>
            {USER_NAME}
            {/* 
            {USER_DOMAIN === 'localhost:3000' ? '' : USER_DOMAIN} &nbsp;
             <span className='xl:block hidden'> | by ${USER_NAME}</span> 
            */}
          </p>
        </Link>

        {/* Nav Link */}
        <ul className='relative list-none flex flex-col gap-2'>
          {navLinks.map((nav) => {
            const isActive = pathname.startsWith(nav.id)
            return (
              <Link key={nav.title} href={`/${nav.id}`} className={`${
                isActive ? "text-primary" : `${darkMode ? "text-white-100" : "text-black-100"}`} 
                hover:text-secondary hover:scale-105 text-[18px] font-medium cursor-pointer`}>
                  {nav.title}
              </Link>
            )
          })}
        </ul>

        {/* togle dark ligt button */}
        <div className="flex justify-center">
          <input type="checkbox" className="absolute opacity-0" id="checkbox-darkmode" role="switch" checked={darkMode} onChange={() => dispatch(toggleDarkMode())}/>
          <label 
            htmlFor="checkbox-darkmode" 
            className={`flex w-12 h-5 rounded-3xl items-center justify-between relative scale-150 cursor-pointer ${darkMode?'shadow-inset0':'shadow-inset1'}`}>
            <BsMoonStarsFill color="white" />
            <BsFillSunFill color="yellow" />
            <div className={`w-5 h-5 bg-secondary absolute top-[1] left-[1] rounded-3xl transition-transform 
            ${darkMode ? 'translate-x-8' : 'translate-x-0'}`}></div>
          </label>
        </div>

      </div>
    </nav>

    {/* Button Toggle Mobile*/}
    <div className='sm:hidden fixed bottom-0 z-30 w-full'>
      <div className="flex flex-row items-center justify-center w-full">
        <button
        className=" mb-2 flex flex-row items-center justify-center gap-2 rounded bg-button-gradien px-6 py-2.5 
        text-xs font-medium uppercase leading-tight text-white shadow-white 
        transition duration-150 ease-in-out active:bg-primary-800 active:shadow-lg" 
        onClick={() => setToggle(!toggle)}>
          <Image
              src={toggle ? close : menu}
              width={10}
              height={10}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
            />
          <p>Menu</p>
        </button>
      </div>
    </div>
    </>
  )
}

export default Navbar