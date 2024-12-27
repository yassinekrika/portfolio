'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { MagicCard } from './ui/magic-card'
import Image from 'next/image'
import TypingAnimation from './ui/typing-animation'
import { useTheme } from 'next-themes'

interface Props {
  title: string,
  description: string, 
  img: string
  date: string
}

const HackathonSnapCard = ({title, description, img, date}: Props) => {
  const { resolvedTheme } = useTheme();


  return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}  transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true, amount: 0.2 }}>
      <div className='flex flex-col xl:flex-row justify-between items-end'>
        <div className='w-full xl:w-1/2 mb-4 flex flex-col items-center xl:items-start gap-2'>
          <Image className='rounded-2xl' src={img} width={80} height={80} alt='hackware logo' />
          <h2 className='font-bold text-muted-foreground'>{title}</h2>
          <p className='text-muted-foreground text-xs'>{date}</p>
        </div>
        <MagicCard gradientColor={resolvedTheme === "dark" ? "#262626" : "#D9D9D955"} className='p-8 w-full xl:w-1/2'>
          <TypingAnimation className='text-base text-black dark:text-white leading-6 font-normal' duration={30}>{description}</TypingAnimation>
        </MagicCard>
      </div>
    </motion.div>
  )
}

export default HackathonSnapCard