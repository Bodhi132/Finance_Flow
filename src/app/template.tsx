"use client"

import {motion} from "framer-motion"

export default function Template({children}){


    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      

    return (
        <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
        style={{ listStyle: 'none', padding: 0 }}
        >
            {children}
        </motion.div>
    )
}