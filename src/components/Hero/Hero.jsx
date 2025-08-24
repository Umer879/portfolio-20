'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import About from '@/components/About/About';
import Services from '@/components/Services/services';
import Skill from '@/components/Skill/Skill';
import Portfolio from '@/components/Portfolio/Portfolio';
import Testimonial from '@/components/Testimonial/Testimonial';
import Blog from '@/components/Blog/Blog';
import Contact from '@/components/Contact/Contact'
const Hero = () => {
    return (
        <div className='text-white pt-8 main xxl:px-40 px-5 py-10' id='home'>
            <div className='hero-text'>
                <p className='flex'><span className='me-2'><img src="/assets/icon/icon-1.avif" alt="" /></span> Hi, I’m Umer, Frontend Developer</p>
                <h1 className='font-semibold text-5xl mt-2'>From Design to Code</h1>
                <h2 className='font-semibold text-5xl ms-12 my-4'> Building <span className='italic text-[#FFAE00] text-4xl underline' >the Web with Purpose</span></h2>
                <p className='details text-end text-[14px] leading-[2] mt-[40px]'> Innovative design, smooth experiences, and impactful solutions — transforming <br /> complex ideas into easy-to-use digital products.</p>
            </div>
            <div className="hero-section-2 flex justify-between items-center">
                <motion.div className="hero-logo"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear", // <- very important for smooth loop
                    }}
                >
                    <img src="/assets/icon/icon.webp" className="rounded-full border border-white bg-[#1f3735]" alt="logo" />
                </motion.div>
                <div className="hero-reviews flex">
                    <img src="/assets/icon/icon3.webp" className="w-[120px]" alt="reviews images" /> <div className='hero-review-text ms-2 text-[12px] text-gray-500'><div>
                        2K + reviews</div>
                        <div>(4.90 of 5)</div></div>
                </div>
            </div>
            <div className="mt-10 w-full">
                <a
                    href="https://wa.me/923358069145"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="w-full flex items-center justify-center gap-3 
                       text-base sm:text-lg md:text-xl lg:text-2xl font-semibold 
                       bg-[#1f3735] text-white py-10 rounded-2xl
                       hover:bg-[#FFAE00] hover:text-black 
                       transition-all duration-300">
                        Let’s Work Together
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            <FaArrowUpRightFromSquare />
                        </span>
                    </button>
                </a>
            </div>


            <div className="about-section mt-sm-20 mt-10">
                <About />
                <Services />
                <Skill />
                <Portfolio />
                <Testimonial />
                <Blog />
                <Contact />
            </div>
        </div>
    )
}

export default Hero
