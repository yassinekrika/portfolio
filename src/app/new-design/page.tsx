'use client'

import HackathonSnapCard from '@/components/HackathonSnapCard'
import BlurFade from '@/components/magicui/blur-fade'
import { ProjectMagicCard } from '@/components/project-magic-card'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import IconCloud from '@/components/ui/icon-cloud'
import { MagicCard } from '@/components/ui/magic-card'
import Meteors from '@/components/ui/meteors'
import Particles from '@/components/ui/particles'
import TypingAnimation from '@/components/ui/typing-animation'
import { DATA } from '@/data/resume'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';


const Page = () => {
  const greeting = "Hi, I'm Yassine";
  const paragraph = 'Software Engineer | Full-Stack';
  const question = "What do you do?";
  const summary = 'Software engineer specializing in full-stack web development, with expertise in API development using Node Js and Express Js. Skilled in crafting interactive, data-driven dashboards with Angular and Next Js, dedicated to delivering impactful solutions and enhancing user engagement.'
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];


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
  });



  return (
    <main>
      <section id="hero" >
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
          {scrollDirection === 'down' ? (
            <>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, translateY: 60 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.8, }}
                  className="w-[250px] min-sm:w-[300px] sm:w-[400px] h-[350px] flex items-center justify-center"
                >
                  <div className="w-full flex flex-col items-center gap-6 mx-2">
                    <div className="w-full flex flex-col gap-2 items-end ">
                      <div className="bg-black text-white dark:text-black dark:bg-white px-4 py-2 rounded-2xl">
                        {question}
                      </div>
                    </div>
                    <div className='w-full flex justify-start '>
                      <MagicCard gradientColor={resolvedTheme === "dark" ? "#262626" : "#D9D9D955"} className="w-[300px] border rounded-2xl">
                        <CardContent className="p-4">
                          <div className="text-md font-normal">
                            <TypingAnimation className='text-base text-black dark:text-white leading-6 font-normal' duration={30}>{summary}</TypingAnimation>
                          </div>
                        </CardContent>
                      </MagicCard>
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
            </>
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
                  <p className="w-[350px] text-base xl:text-xl leading-7 text-center text-muted-foreground">{paragraph}</p>
                </div>
              </motion.div>
              <Particles
                className="absolute inset-0"
                quantity={300}
                ease={100}
                color={color}
                refresh
              />
              <Meteors number={20} />
            </>
          )}
        </div>
        <div className='w-full h-[1px]'></div>
      </section>
      {scrollDirection === 'down' && (
        <div className='mb-[700px]'>
          <section id='skills'>
            <div className='max-w-4xl mx-auto pb-80'>
              <AnimatePresence>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}>
                  <div className='w-full flex flex-col items-center gap-10'>
                    <div className='flex flex-col items-center gap-10'>
                      <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Tech Stack</h1>
                      <p className="w-[80%] leading-7 text-center text-muted-foreground text-sm xl:text-base">
                        Proficient in Angular, React, Next.js, Node.js, Express.js, Sql, NoSql, delivering scalable full-stack solutions.
                      </p>
                    </div>
                    <div className='w-[50%]'>
                      <IconCloud iconSlugs={slugs} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          <section id="projects">
            <div className="max-w-4xl mx-auto pb-80">
              <div className='w-full flex flex-col items-center gap-10 px-2'>
                <AnimatePresence>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}>
                    <div className='flex flex-col items-center gap-10'>
                      <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Check out my latest work</h1>
                      <p className="w-[70%] leading-7 text-center text-muted-foreground text-sm xl:text-base">
                        I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-10">
                  {DATA.projects.map((project, id) => (
                    <BlurFade
                      key={project.title}
                      delay={0.04 * 12 + id * 0.05}
                    >
                      <ProjectMagicCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        video={project.video}
                        links={project.links}
                      />
                    </BlurFade>
                  ))}
                </div>
              </div>

            </div>
          </section>

          <section id="hackathons" className='snap-y snap-mandatory overflow-auto'>
            <div className="max-w-4xl mx-auto pb-80">
              <AnimatePresence>
                <div className='w-full flex flex-col items-center gap-10 px-2'>
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}>
                    <div className='flex flex-col items-center gap-10'>
                      <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>I like building things</h1>
                      <p className="w-[70%] leading-7 text-center text-muted-foreground text-sm xl:text-base">
                        During my time in university, I attended 3+ hackathons. People from around the country would come together and build incredible things in 2-3 days.                      </p>
                    </div>
                  </motion.div>
                  <div className=''>
                    {DATA.hackathons.map((item, index) => (
                      <div key={index} className='w-full h-screen snap-center flex flex-col justify-center items-center'>

                        <HackathonSnapCard
                          title={item.title}
                          description={item.description}
                          img={item.image}
                          date={item.dates}
                        />
                      </div>
                    ))}

                  </div>
                </div>
              </AnimatePresence>
            </div>
          </section>

        </div>
      )}
    </main>
  );
};

export default Page;
