"use client"
import React, {Suspense} from 'react'
import Image from 'next/image'
import { Tilt } from 'react-tilt'
import { color, motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import SectionWrapper from '@/hoc/SectionWrapper'
import { projects } from '@/utils/constants'
import { fadeIn, textVariant } from '@/utils/motion'

const github = '/assets/github.png'
const link = '/link.svg'



const ProjectCard: React.FC<{
    index: number,
    name: string,
    description: string,
    tags: any[],
    image: string,
    source_code_link: string
    dark: boolean
}> = ({index,name,description,tags,image,source_code_link,dark}) => {
  return (
    <motion.div 
    // variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${dark?'bg-black-100':'bg-white-100'} border-2 border-secondary p-5 rounded-2xl sm:w-[325px] w-full`}
      >
        <div className='relative w-full h-[230px]'>
          <Suspense>
              <Image 
                src={image}
                width={1000}
                height={1000}
                alt='project_image'
                className='w-full h-full object-cover rounded-2xl'
              />
          </Suspense>
          

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={link}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className={`mt-5 ${dark?'text-white-100':'text-black-100'}`}>
          <h3 className='font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const {darkMode} = useSelector((state: RootState) => state.darkMode)
  return (
    <div className={`sm:px-16 px-6 mt-8 ${darkMode ? 'text-white-100' : 'text-black-100'}`}>
        <motion.div 
        // variants={textVariant(1)}
        >
            <p className="font-medium lg:text-2xl sm:text-xl xs:text-lg text-base mt-2">My work</p>
            <h2 className="font-black lg:text-5xl sm:text-3xl xs:text-2xl text-xl mt-2">Projects.</h2>
        </motion.div>

        <div className='w-full flex'>
            <motion.p
            // variants={fadeIn("", "", 0.2, 1.5)}
            className='mt-3 text-[17px] max-w-3xl leading-[30px]'
            >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
            </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7 justify-center'>
            {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} dark={darkMode}/>
            ))}
        </div>
    </div>
  )
}

export default SectionWrapper(Works,'')