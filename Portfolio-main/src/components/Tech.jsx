import React from 'react'
import {RiReactjsLine} from "react-icons/ri";
import javascript from "../assets/javascript-48.png";
import MongoDB from "../assets/mongo-db-48.png";
import Tailwind from "../assets/tailwind-css-48.png";
import Git from "../assets/icons8-git-48.png";
import Material from "../assets/material-ui.png";
import Django from "../assets/icons8-django.png";
import Bootstrap from "../assets/icons8-bootstrap.png";
import Software from "../assets/software-development.png";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion';
import Express from "../assets/icons8-express-js-50.png";
import MySql from "../assets/mysql-50.png"

const iconVariants= (duration) => ({
    initial: { y: -10 },
    animate: { 
        y: [0, 10,0, -10,0],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
        },
    },
});

const slowIconVariants = iconVariants(4);

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2
        whileInView={{opacity: 1, y:0 }}
        initial={{opacity: 0, y: -100 }}
        transition={{duration: 1.5 }}
         className="my-20 text-center text-4xl">Technologies</h2>
        <motion.div 
        whileInView={{opacity: 1, x:0 }}
        initial={{opacity: 0, x: -100 }}
        transition={{duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={slowIconVariants}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-6xl text-cyan-400 h-12 w-12" />
            </motion.div>
            <motion.div
            variants={slowIconVariants}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <img className="text-6xl  bg-white rounded text-cyan-400" src={Express} alt=""/>
            </motion.div>
            <motion.div
            variants={slowIconVariants}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <img  className="text-6xl text-cyan-400" src={MongoDB} alt="" />

            </motion.div>
            <motion.div 
            variants={slowIconVariants}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className=" text-green-500 text-6xl  h-12 w-12" />
            </motion.div>
            <motion.div
            variants={slowIconVariants}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={javascript} alt="" className="text-6xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={slowIconVariants}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={MySql} alt="" className="text-6xl text-cyan-400  bg-white rounded" />
            </motion.div>
            <motion.div
            variants={slowIconVariants}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={Software} alt="" className="text-6xl text-cyan-400 h-12 w-12" />
            </motion.div>
            <motion.div
            variants={slowIconVariants}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={Tailwind} alt="" className="text-6xl text-cyan-400 h-12 w-12" />
            </motion.div>
            <motion.div 
            variants={slowIconVariants}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={Material} alt="" className="text-6xl text-cyan-400 h-12 w-12 " />
            </motion.div>
            <motion.div
            variants={slowIconVariants}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <img src={Git} alt="" className="text-6xl text-cyan-400 h-12 w-12" />
            </motion.div>
            
        </motion.div>
      
    </div>
  )
}

export default Tech
