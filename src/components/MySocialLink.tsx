import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import { BsGithub, BsLinkedin, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { FACEBOOK_LINK, GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, TWITTER_LINK } from '@/utils/constants';

const MySocialLink = () => {
    const {darkMode} = useSelector((state: RootState) => state.darkMode)
    return (
        <>
        <p className='mt-16 text-center'>feel free to visit my social media</p>
        <div className="mb-4 flex justify-center flex-row lg:mb-0">
            <a
            href={GITHUB_LINK}
            className="group rounded-lg border border-transparent px-2 py-2 mx-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="mb-0 transition-transform group-hover:scale-125 motion-reduce:transform-none">
                <BsGithub color={`${darkMode ? 'white' : 'black'}`}/>
            </div>
            </a>

            <a
            href={LINKEDIN_LINK}
            className="group rounded-lg border border-transparent px-2 py-2 mx-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="mb-0 transition-transform group-hover:scale-125 motion-reduce:transform-none">
                <BsLinkedin color={`${darkMode ? 'white' : 'black'}`}/>
            </div>
            </a>

            <a
            href={TWITTER_LINK}
            className="group rounded-lg border border-transparent px-2 py-2 mx-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="mb-0 transition-transform group-hover:scale-125 motion-reduce:transform-none">
                <BsTwitter color={`${darkMode ? 'white' : 'black'}`}/>
            </div>
            </a>

            <a
            href={FACEBOOK_LINK}
            className="group rounded-lg border border-transparent px-2 py-2 mx-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="mb-0 transition-transform group-hover:scale-125 motion-reduce:transform-none">
                <BsFacebook color={`${darkMode ? 'white' : 'black'}`}/>
            </div>
            </a>

            <a
            href={INSTAGRAM_LINK}
            className="group rounded-lg border border-transparent px-2 py-2 mx-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            >
            <div className="mb-0 transition-transform group-hover:scale-125 motion-reduce:transform-none">
                <BsInstagram color={`${darkMode ? 'white' : 'black'}`}/>
            </div>
            </a>
        </div>
        </>
    )
}

export default MySocialLink