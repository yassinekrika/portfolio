'use client'

import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import Meteors from '@/components/ui/meteors'
import Particles from '@/components/ui/particles'
import TypingAnimation from '@/components/ui/typing-animation'
import { DATA } from '@/data/resume'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const greeting = "Hi, I'm Yassine";
  const paragraph = 'Software Engineer passionate about innovation and technology';
  const question = "What do you do?";
  const summary = 'Software engineer specializing in full-stack web development, with expertise in API development using Node Js and Express Js. Skilled in crafting interactive, data-driven dashboards with Angular and Next Js, dedicated to delivering impactful solutions and enhancing user engagement.'

  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>("up")

  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current
    setScrollDirection(diff == 0 ? "up" : "down")
  })



  return (
    <main>
      <section id="hero" >
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
          {scrollDirection === 'down' ? (
            <div>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, translateY: 60 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.8, }}
                  className="w-[250px] min-sm:w-[300px] sm:w-[400px] flex items-center justify-center h-full "
                >
                  <div className="w-full flex flex-col items-center gap-6 mx-2">
                    <div className="w-full flex flex-col gap-2 items-end ">
                      <div className="bg-gray-200 text-black px-4 py-2 rounded-2xl">
                        {question}
                      </div>
                    </div>
                    <div className='w-full flex justify-start '>
                      <Card className="w-[300px] border rounded-2xl">
                        <CardContent className="p-4">
                          <div className="text-md font-normal">
                            <TypingAnimation className='text-sm text-black dark:text-white leading-6 font-normal' duration={60}>{summary}</TypingAnimation>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Particles
                  className="absolute inset-0"
                  quantity={300}
                  ease={100}
                  color={color}
                  refresh
                />

              </motion.div>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="h-[90vh] flex justify-center items-center"
              >
                <div className="flex flex-col items-center gap-7">
                  <span className="flex items-center text-4xl xl:text-7xl">
                    <TypingAnimation className="text-4xl xl:text-7xl font-bold">{greeting}</TypingAnimation> 👋
                  </span>
                  <p className="w-[55%] font-medium text-base xl:text-xl text-center">{paragraph}</p>
                </div>
              </motion.div>
              <Particles
                className="absolute inset-0"
                quantity={300}
                ease={100}
                color={color}
                refresh
              />
              <Meteors number={5} />
            </>
          )}
        </div>
        <div className='w-full h-[1px]'></div>
      </section>
      {scrollDirection === 'down' && (
        <>
          <section id='work-expirience'>
            <div className='w-full h-[300px]'>

            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Page;
