'use client';
import { FaFigma, FaUserCheck, FaClipboardList } from 'react-icons/fa';
import { MdOutlinePsychology } from 'react-icons/md';
import React from 'react';

const data = [
    {
        icon: <FaFigma />,
        title: 'UI/UX Design',
        des: 'Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.',
    },
    {
        icon: <FaUserCheck />,
        title: 'User Research & Prototyping',
        des: 'Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.',
    },
    {
        icon: <FaClipboardList />,
        title: 'Responsive Web Design',
        des: 'Crafting designs adapt seamlessly across all devices ensuring and a consistent user experience.',
    },
    {
        icon: <MdOutlinePsychology />,
        title: 'Wireframing & Visual Design',
        des: 'Creating detailed wireframes and visually stunning designs to bring ideas into focus.',
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
            <h1 className="font-semibold text-6xl mt-2">Crafting Seamless</h1>
            <h2 className="font-semibold text-6xl ms-12 my-4">
                User{' '}
                <span className="italic text-[#FFAE00] underline">Experiences</span>
            </h2>

            <div className="about my-10 bg-[#1f3735] py-3 px-5 rounded">
                <h4 className="font-semibold text-2xl">Umer Gull </h4>
                <p className="font-thin">
                    Hi, I’m Umer Gull, a dedicated UI/UX Designer with 10 years of
                    experience creating meaningful digital experiences. I specialize in
                    crafting user-centered designs that enhance engagement and drive
                    results. By combining research, creativity, and technical skills, I
                    deliver solutions that not only look great but also function
                    seamlessly.
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
                        <p>2012 - 2020</p>
                        <h3 className='font-bold my-3'>UI/UX Designer</h3>
                        <p>Creative Spart Agency</p>
                        <p className='my-3'>2020 - present</p>
                        <h3 className='mb-3 font-bolda'>Senior UI/UX Desinger</h3>
                        <p>Visionary Tech</p>
                    </div>
                </div>
                <div className="work ">
                    <h2 className='text-3xl'>Education</h2>
                    <div className="box mt-5 p-5 rounded  bg-[#1f3735]">
                        <p>2012 - 2020</p>
                        <h3 className='font-bold my-3'>Bachelor Degree in Graphic Design</h3>
                        <p>Air University</p>
                        <p className='my-3'>2013 - 2015</p>
                        <h3 className='mb-3 font-bolda'>Master Degree in User Experiene Design</h3>
                        <p>Massachusetts Institute of Technology (MIT)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
