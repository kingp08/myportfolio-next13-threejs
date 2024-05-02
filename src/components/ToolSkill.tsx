"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import BallCanvas from './canvas/Ball';
import SectionWrapper from '../hoc/SectionWrapper';
import { technologies } from '@/utils/constants';

const Tech = () => {
    const {darkMode} = useSelector((state: RootState) => state.darkMode)
    return (
        <div className={`sm:px-16 px-6 mt-8 ${darkMode ? 'text-white-100' : 'text-black-100'}`}>
            <div>
                <h2 className="font-black lg:text-5xl sm:text-3xl xs:text-2xl text-xl mt-2 mb-4 text-center">
                    Skill Sets.
                </h2>
            </div>
            <div className='flex flex-row flex-wrap justify-center gap-8'>
                {technologies.map((technology) => (
                    <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </div>
  );
};

export default SectionWrapper(Tech, "");