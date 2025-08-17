import React from 'react'

const data = [
    {
    title: 'Frontend Development',
    des: 'Building modern, responsive, and interactive user interfaces with React.js, Next.js, and Tailwind CSS.',
},
{
    title: 'Backend Development',
    des: 'Developing secure, scalable, and high-performance server-side applications using Node.js & Express.js.',
},
{
    title: 'Database Management',
    des: 'Designing, integrating, and optimizing databases with MongoDB & SQL for smooth data handling.',
},
{
    title: 'API Development & Integration',
    des: 'Creating and connecting RESTful & GraphQL APIs to enable seamless communication between systems.',
},
{
    title: 'Deployment & Maintenance',
    des: 'Deploying applications on cloud platforms (AWS, Vercel, Netlify) and ensuring continuous performance & updates.',
}

];

const services = () => {
    return (
        <section id='services'>
            <div className='hero-text'>
                <p className='flex'><span className='me-2'><img src="/assets/icon/icon-1.avif" alt="" /></span> My Services</p>
                <h1 className='font-semibold text-[50px] mt-2'>Building Scalable Solutions</h1>
                <h2 className='font-semibold text-[50px] ms-12 my-4'>From <span className='italic text-[#FFAE00] underline' >Frontend to Backend</span></h2>
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
