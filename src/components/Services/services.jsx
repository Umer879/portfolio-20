import React from 'react'

const data = [
  {
   
    title: "React & Next.js Development",
    des: "Building fast, scalable, and interactive web applications using React.js and Next.js with modern best practices.",
  },
  {
   
    title: "UI/UX Design",
    des: "Crafting clean, user-friendly, and visually appealing interfaces with a focus on user experience.",
  },
  {
   
    title: "Responsive Web Design",
    des: "Developing websites that look great and work smoothly on all devices, from desktops to mobiles.",
  },
  {
   
    title: "Performance Optimization",
    des: "Optimizing websites for speed, SEO, and smooth user interaction using modern frontend tools and techniques.",
  },
];


const services = () => {
    return (
        <section id='services'>
            <div className='hero-text'>
                <p className='flex'><span className='me-2'><img src="/assets/icon/icon-1.avif" alt="" /></span> My Services</p>
                <h1 className='font-semibold text-[50px] mt-2'>Building Scalable Solutions</h1>
                <h2 className='font-semibold text-[45px] ms-12 my-4'>From <span className='italic text-[#FFAE00] underline' >Frontend developement</span></h2>
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
