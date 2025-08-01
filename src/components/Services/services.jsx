import React from 'react'

const data = [
    {
        title: 'UI/UX Design',
        des: 'Designing intuitive, user-focused interfaces that prioritize functionality & seamless navigation.',
    },
    {

        title: 'User Research & Prototyping',
        des: 'Conducting in-depth user research and creating interactive prototypes to validate ideas and refine designs.',
    },
    {

        title: 'Responsive Web Design',
        des: 'Crafting designs adapt seamlessly across all devices ensuring and a consistent user experience.',
    },
    {

        title: 'Wireframing & Visual Design',
        des: 'Creating detailed wireframes and visually stunning designs to bring ideas into focus.',
    },
];

const services = () => {
    return (
        <section id='services'>
            <div className='hero-text'>
                <p className='flex'><span className='me-2'><img src="/assets/icon/icon-1.avif" alt="" /></span> My Services</p>
                <h1 className='font-semibold text-6xl mt-2'>Elevating Brands</h1>
                <h2 className='font-semibold text-6xl ms-12 my-4'>Intuitive <span className='italic text-[#FFAE00] underline' >Designs</span></h2>
            </div>
            {/* about-skill-section */}
            <div className="about-section-2 flex justify-between items-center gap-5 mt-20 flex-wrap">
                {data.map((data, index) => (
                    <div
                        className="box rounded w-full px-5 py-10 bg-[#1f3735] flex flex-col justify-between "
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
        </section>
    )
}

export default services
