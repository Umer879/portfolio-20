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
                <p className='flex'><span className='me-2'><img src="/assets/icon/icon-1.avif" alt="" /></span> Hi, I’m Umer, UI/UX Designer</p>
                <h1 className='font-semibold text-6xl mt-2'>Designing Intuitive</h1>
                <h2 className='font-semibold text-6xl ms-12 my-4'> Experiences <span className='italic text-[#FFAE00] underline' >Inspire</span></h2>
                <p className='details text-end text-[12px] leading-[2]'>Your gateway to innovative design, seamless user experiences, and impactful <br /> solutions.Turning complex ideas into user-friendly designs.</p>
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
                    <img src="/assets/icon/icon3.webp"  className="w-[120px]" alt="reviews images" /> <div className='hero-review-text ms-2 text-[12px] text-gray-500'><div>
                        2K + reviews</div>
                        <div>(4.90 of 5)</div></div>
                </div>
            </div>
            <div className="hero-button text-6xl mt-10 bg-[#1f3735] py-8 rounded px-5 cursor-pointer hover:bg-[#FFAE00] transition-all 4s">
                <button className='flex justify-center text-center cursor-pointer'>Lets Work Together <span className='ms-4 mt-4 text-4xl cursor-pointer'><FaArrowUpRightFromSquare /></span></button>
            </div>
            <div className="about-section mt-20">
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
