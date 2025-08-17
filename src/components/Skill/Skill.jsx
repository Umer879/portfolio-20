import React from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

const mySkill = [
    {
        icon: <FaReact className="text-sky-500" />,
        percentage: "85%",
        title: "React.js",
    },
    {
        icon: <TbBrandNextjs className="text-black" />,
        percentage: "80%",
        title: "Next.js",
    },
    {
        icon: <SiTailwindcss className="text-teal-400" />,
        percentage: "90%",
        title: "Tailwind CSS",
    },
    {
        icon: <FaNodeJs className="text-green-600" />,
        percentage: "75%",
        title: "Node.js",
    },
    {
        icon: <SiExpress className="text-[#ffae00]" />,
        percentage: "70%",
        title: "Express.js",
    },
    {
        icon: <SiMongodb className="text-green-500" />,
        percentage: "80%",
        title: "MongoDB",
    }
];

const Skill = () => {
    return (
        <section className='skill my-10 ' id='skill'>
            <div className='hero-text'>
                <p className='flex'><span className='me-2'><img src="/assets/icon/icon-1.avif" alt="" /></span> My Skill</p>
                <h1 className='font-semibold text-[50px] mt-2'>Tools & Technologies</h1>
                <h2 className='font-semibold text-[50px] ms-12 my-4'>That <span className='italic text-[#FFAE00] underline' >Drive my Code</span></h2>
            </div>
            <div className="skill-container w-[80%] sm:w-full mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
                {mySkill.map((skill, index) => (
                    <div key={index} className="skill-items py-5 px-10 rounded bg-[#1f3735] text-center">
                        <div className="mb-3 flex justify-center text-4xl">{skill.icon}</div>
                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                        <p className='text-[#979797d9] '>{skill.percentage}</p>
                    </div>
                ))}
            </div>



        </section>
    )
}

export default Skill
