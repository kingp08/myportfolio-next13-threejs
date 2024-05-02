"use client"
import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn } from '../utils/motion'
import MySocialLink from './MySocialLink'
import LaptopCanvas from './canvas/Laptop'

const Contact = () => {

  const {darkMode} = useSelector((state: RootState) => state.darkMode)

  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: any) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      ) {
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            e.currentTarget,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              setLoading(false);
              alert("Thank you. I will get back to you as soon as possible.");
    
              setForm({
                name: "",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
    
              alert("Ahh, something went wrong. Please try again.");
            }
          );

      }
    else {
        console.error("Missing environment variables");
    }
  };

  return (
    <div
      className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        id='contact-form'
        className={`flex-[0.75] m-8 md:m-16 2xl:m-8 ${darkMode?'bg-black-100 text-white-100 shadow-card1':'bg-white-100 text-black-100 shadow-card0'} p-8 rounded-2xl`}
      >
        <p className="font-medium lg:text-2xl sm:text-xl xs:text-lg text-base mt-2">Get in touch</p>
        <h3 className="font-black lg:text-5xl sm:text-3xl xs:text-2xl text-xl mt-2">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className="font-medium mb-4">Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your full name?"
              className={`${darkMode?'bg-black-100 shadow-inset0':'bg-white-100 shadow-inset1'} py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className='flex flex-col'>
            <span className="font-medium mb-4">Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className={`${darkMode?'bg-black-100 shadow-inset0':'bg-white-100 shadow-inset1'} py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className='flex flex-col'>
            <span className="font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`${darkMode?'bg-black-100 shadow-inset0':'bg-white-100 shadow-inset1'} py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}
            />
          </label>

          <button
            type='submit'
            className="flex flex-row items-center justify-center gap-2 rounded bg-button-gradien px-6 py-2.5 
              text-xs font-medium uppercase leading-tight text-white shadow-white 
              transition duration-150 ease-in-out active:bg-primary-800 active:shadow-lg"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className='xl:hidden'>
          <MySocialLink/>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:min-h-[450px] md:max-h-[550px] max-h-screen'
      >
        <motion.div className='h-full w-full'>
          <LaptopCanvas/>
        </motion.div>
        
        <div className='xl:hidden absolute xs:bottom-8 bottom-16 w-full flex justify-center items-center'>
          <a href='#contact-form'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>

        <div className="hidden xl:block">
          <MySocialLink/>
        </div>

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,'contact')