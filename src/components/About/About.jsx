'use client';
import { FaReact, FaPaintBrush, FaMobileAlt, FaRocket } from 'react-icons/fa';
import React from 'react';

const data = [
  {
    icon: <FaReact className="text-blue-500" />,
    title: "React & Next.js Development",
    des: "Building fast, scalable, and interactive web applications using React.js and Next.js with modern best practices.",
  },
  {
    icon: <FaPaintBrush className="text-pink-500" />,
    title: "UI/UX Design",
    des: "Crafting clean, user-friendly, and visually appealing interfaces with a focus on user experience.",
  },
  {
    icon: <FaMobileAlt className="text-green-500" />,
    title: "Responsive Web Design",
    des: "Developing websites that look great and work smoothly on all devices, from desktops to mobiles.",
  },
  {
    icon: <FaRocket className="text-purple-500" />,
    title: "Performance Optimization",
    des: "Optimizing websites for speed, SEO, and smooth user interaction using modern frontend tools and techniques.",
  },
];


const About = () => {
    return (
        <div id='about' className="xxl:px-40 px-5 py-10 hero-text"> {/* <-- Responsive wrapper */}
            <p className="flex">
                <span className="me-2">
                    <img src="/assets/icon/icon-1.avif" alt="" />
                </span>{' '}
                About Us
            </p>
            <h1 className="font-semibold text-6xl mt-2">Building Seamless</h1>
            <h2 className="font-semibold text-6xl ms-12 my-4">
                Web{" "}
                <span className="italic text-[#FFAE00] underline">Solutions</span>
            </h2>

            <div className="about my-10 bg-[#1f3735] py-3 px-5 rounded">
                <h4 className="font-semibold text-2xl">Umer Gull </h4>
                <p className="font-thin">
                    Hi, I’m  a passionate Frontend developer with 1 year of experience building modern, responsive, and high-performing web applications. I specialize in creating user-friendly interfaces backed by solid, efficient code. By combining clean design, problem-solving skills, and technical expertise, I deliver solutions that not only look great but also work flawlessly across devices.
                </p>
            </div>

            {/* about-skill-section */}
            <div className="about-section-2 flex justify-between items-center gap-y-7 flex-wrap">
                {data.map((data, index) => (
                    <div
                        className="box rounded w-full sm:w-[48%] px-5 pt-5 bg-[#1f3735] flex flex-col justify-between min-h-[150px]"
                        key={index}
                    >
                        <div className="flex items-start mb-3">
                            <div className="icon text-3xl me-3 mt-1">{data.icon}</div>
                            <div className="box-text">
                                <h3 className="font-semibold text-lg mb-1">{data.title}</h3>
                                <p className='text-[12px]'>{data.des}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


           {/* Work & Experience */}
<div className="education mt-10 flex justify-between items-center flex-wrap">
    <div className="work ">
        <h2 className='text-3xl'>Work & Experience</h2>
        <div className="box mt-5  p-5 rounded bg-[#1f3735]">
            <p>2023 - 2024</p>
            <h3 className='font-bold my-3'>Frontend Developer</h3>
            <p>Pak Digital </p>
            <p className='my-3'>2025 - Present</p>
            <h3 className='mb-3 font-bolda'>Frontend Developer</h3>
            <p>Oxmite Digtal Ltd</p>
        </div>
    </div>
    <div className="work ">
        <h2 className='text-3xl'>Education</h2>
        <div className="box mt-5 p-5 rounded  bg-[#1f3735]">
            <p>2020 - 2024</p>
            <h3 className='font-bold my-3'>Bachelor’s Degree in Computer Science</h3>
            <p>Air University</p>
            <p className='my-3'>2018 - 2020</p>
            <h3 className='mb-3 font-bolda'>Intermediate in CS</h3>
            <p>Harvard College of Commerce Science</p>
        </div>
    </div>
</div>

        </div>
    );
};

export default About;
