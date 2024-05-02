"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import SectionWrapper from '@/hoc/SectionWrapper'
import { fadeIn, textVariant } from '@/utils/motion'
import { testimonials } from '@/utils/constants'

const FeedbackCard: React.FC<{
    index: number,
    testimonial: string,
    name: string,
    designation: string,
    company: string,
    image: string,
    dark: boolean
}> = ({index,testimonial,name,designation,company,image,dark}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className={`${dark?'text-white':'text-black'} font-black text-[48px]`}>"</p>

    <div className='mt-0'>
      <p className={`${dark?'text-white':'text-black'} tracking-wider text-[18px]`}>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className={`${dark?'text-white':'text-black'} font-medium text-[16px]`}>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
      <hr className='mt-1 h-1 bg-primary' />
    </div>
  </motion.div>
)

const Feedbacks = () => {
  const {darkMode} = useSelector((state: RootState) => state.darkMode)
  return (
    <div className={`sm:px-16 px-6 mt-8 ${darkMode ? 'text-white-100' : 'text-black-100'}`}>
        <div className={`mt-12 ${darkMode?'bg-black-100':'bg-white-100'} rounded-[20px]`}>
        <div
            className="bg-primary rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[150]"
        >
            <motion.div variants={textVariant(1)}>
            <p className="font-medium lg:text-2xl sm:text-xl xs:text-lg text-base">What others say</p>
            <h2 className="font-black lg:text-5xl sm:text-3xl xs:text-2xl text-xl mt-2">Testimonials.</h2>
            </motion.div>
        </div>
        <div className="mt-1 pb-14 sm:px-16 px-6 flex flex-wrap gap-7">
            {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} dark={darkMode}/>
            ))}
        </div>
        </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,'')