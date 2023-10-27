'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin, BsDownload, BsGithub } from 'react-icons/bs'

export default function Intro() {
  return (
    <section className="z-40">
      <motion.h1
        className="font-bold text-center mb-2 text-3xl sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Avary Mitchell
      </motion.h1>

      <motion.p
        className="font-bold text-center text-2xl mt-2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        Software Engineer & Full-Stack Developer
      </motion.p>

      <motion.div
        className="flex items-center justify-center mt-3 gap-2 sm:flex-row text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="flex items-center justify-center gap-2 bg-gray-900 text-white rounded-full py-3 px-3 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact <BsArrowRight classname="opacity-70" />
        </Link>{' '}
        <a
          href="/resume.pdf"
          download={true}
          className="bg-white flex items-center justify-center gap-2 text-black rounded-full py-3 px-3 outline-none focus:scale-110 hover:scale-110 hover:bg-white active:scale-105 transition cursor-pointer border border-black/10"
        >
          Resume <BsDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/avary-mitchell-6b493612a/"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 rounded-full
                border border-black/10 focus:scale-110 hover:scale-110 transition cursor-pointer active:scale-105 hover:text-gray-950"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Anmitchell"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 rounded-full border border-black/10 focus:scale-110 hover:scale-110 transition cursor-pointer active:scale-105 hover:text-gray-950"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  )
}
