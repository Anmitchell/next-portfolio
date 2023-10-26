'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import profilePic from '../public/Profile.png'
import SectionHeading from './section-heading'


export default function About() {
    return (
        <motion.section 
        className="flex-col"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175}}
        >

            <SectionHeading>about me</SectionHeading>

            <div className='flex justify-center my-20'>
                <motion.div
                initial= {{ opacity: 0, scale: 0}}
                animate= {{ opacity: 1, scale: 1}}
                transition= {{ 
                type: 'tween',
                duration: 0.2,
            }}
        >
                <Image 
                src={profilePic}
                alt='Avary Mitchell'
                width={400}
                height={400}
                quality='95'
                priority={true}
                className="h-30 w-30 rounded-[1rem] border-[0.35rem] border-white object-cover shadow-xl"/>
                </motion.div>
            </div>

        <div className='text-left text-xl leading-8'>
            <p className=''>I'm a full-stack software engineer, and while I have some experience under my belt, I'm always eager to learn and grow. I've worked with HTML and CSS to design user-friendly interfaces and dabbled in Javascript, React, Node.js, and Express to build the back-end functionality. It's been a journey of challenges and discoveries, and I'm grateful for every opportunity to expand my skills. I believe in the power of collaboration and the value of humility in this ever-evolving field. So, whether it's fixing bugs or tackling new projects, I approach each task with an open mind and a commitment to delivering quality solutions.</p>

            <p className='mt-8'>As a new full-stack software engineer, I'm like a kid in a candy store, excited to dive into the world of code and tech. I'm not here to reinvent the wheel, but I sure want to make it spin smoother and faster. Whether I'm debugging a pesky error or crafting a user-friendly interface, I approach every line of code with a mix of curiosity and determination. I'm all about teamwork and collaboration, because I know that's where the real magic happens. So, while I'm just starting on this coding journey, I'm ready to learn, adapt, and build awesome things with my fellow engineers.</p>
        </div>
    </motion.section>
    )
}