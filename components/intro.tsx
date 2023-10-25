'use client'

import Image from "next/image"
import profilePic from '../public/Profile.png'
import { motion } from "framer-motion"

export default function Intro() {
    return (
        <section className="z-40">
            <div className="flex items-center justify-center">

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
                    width={192}
                    height={192}
                    quality='95'
                    priority={true}
                    className="h-30 w-30 rounded-lg border-[0.35rem] border-white object-cover shadow-xl"/>
                </motion.div>
            </div>

            <p>
                Include quick intro here.
            </p>
        </section>
    )
}