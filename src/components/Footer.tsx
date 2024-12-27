'use client'

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Meteors from './ui/meteors'
import Particles from './ui/particles'
import { useTheme } from 'next-themes'
import { DATA } from '@/data/resume'


const Footer = () => {

  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#000");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#000" : "#fff");
  }, [resolvedTheme]);

  return (
    <footer className='relative w-full overflow-hidden h-[700px] bg-black dark:bg-white'>
      <div className='absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}>
          <div className='flex flex-col justify-center items-center gap-10'>
            <h1 className='text-3xl font-bold text-white dark:text-black tracking-tighter sm:text-5xl'>Get in Touch</h1>
            <p className="leading-7 text-white dark:text-black text-sm xl:text-base">
              yassinekrika2016@gmail.com
            </p>

            <div className='flex gap-7'>
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => (

                  <Link
                    key={name}
                    href={social.url}
                    className='text-white dark:text-black'
                    target='_blank'
                  >
                    <social.icon className="size-7 hover:scale-110 transition-all ease-linear" />
                  </Link>

                ))}
            </div>
          </div>
        </motion.div>
      </div>
      <Particles
        className="absolute z-0 inset-0"
        quantity={300}
        ease={100}
        color={color}
        refresh
      />
      <Meteors number ={20} />
    </footer>
  )
}

export default Footer