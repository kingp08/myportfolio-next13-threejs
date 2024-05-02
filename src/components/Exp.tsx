"use client"
import React from 'react'
import Image from 'next/image'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import { experiences } from '@/utils/constants'
import { textVariant } from '@/utils/motion'
import SectionWrapper from '@/hoc/SectionWrapper'

const ExperienceCard: React.FC<
{experience: {title: string, company_name: string, icon: string, iconBg: string, date: string, points: string[]},dark: boolean}
> = ({ experience, dark }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      dateClassName={`${dark?'text-white-100':'text-black-100'}`}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon}
            width={10}
            height={10}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold m-0'
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const {darkMode} = useSelector((state: RootState) => state.darkMode)
  return (
    <div className={`sm:px-16 px-6 mt-8 ${darkMode ? 'text-white-100' : 'text-black-100'}`}>
        <motion.div variants={textVariant(0.5)}>
            <p className="font-medium lg:text-2xl sm:text-xl xs:text-lg text-base mt-2 text-center">What I have done so far</p>
            <h2 className="font-black lg:text-5xl sm:text-3xl xs:text-2xl text-xl mt-2 text-center">Work Experience.</h2>
        </motion.div>

        <div className='mt-4 flex flex-col'>
            <VerticalTimeline lineColor={ darkMode ? 'white' : 'black' } >
                {experiences.map((experience, index) => (
                <ExperienceCard
                    key={`experience-${index}`}
                    experience={experience}
                    dark={darkMode}
                />
                ))}
            </VerticalTimeline>
        </div>
    </div>
  )
}

export default SectionWrapper(Experience,'work')