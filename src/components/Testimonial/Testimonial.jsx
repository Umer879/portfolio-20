'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
{
  id: 1,
  name: "David Elson",
  message: "Working with Umer was a turning point for our business. His full stack expertise delivered a fast, scalable, and user-friendly website that boosted our performance and customer satisfaction.",
  title: "Ezhe Source",
  image: "/assets/testimonial/img-1.webp",
},
{
  id: 2,
  name: "Chris Glasser",
  message: "Umer exceeded expectations with his clean code, problem-solving mindset, and seamless API integrations. Our web app now runs smoother than ever and perfectly serves our audience.",
  title: "Auto Works",
  image: "/assets/testimonial/img-2.webp",
},
{
  id: 3,
  name: "Rodger Struck",
  message: "The solution delivered by Umer was powerful and reliable. His ability to handle both frontend and backend made our platform faster, more secure, and easier to use.",
  title: "Specialty Restaurant Group",
  image: "/assets/testimonial/img-3.webp",
},
{
  id: 4,
  name: "Mary Freund",
  message: "From planning to deployment, Umer managed everything with precision. The final product is modern, fully responsive, and runs flawlessly across all devices.",
  title: "Rink's",
  image: "/assets/testimonial/img-3.webp",
}

];

const Testimonial = () => {
  return (
    <section className="my-10 px-4" id="testimonial">

      {/* Heading Section */}
      <div className="hero-text mb-14">
        <p className="flex">
                <span className="me-2">
                    <img src="/assets/icon/icon-1.avif" alt="" />
                </span>{' '}
                Testimonial
            </p>
            <h1 className="font-semibold text-6xl mt-2">What Client Says</h1>
            <h2 className="font-semibold text-6xl ms-12 my-4">
                About
                <span className="italic text-[#FFAE00] underline">My Work</span>
            </h2>
      </div>
      

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto">
        {/* Desktop/Tablet layout */}
        <div className="hidden sm:grid grid-cols-12 gap-6">
          {/* Row 1 */}
          <div className="col-span-7">
            <TestimonialCard {...testimonials[0]} />
          </div>
          <div className="col-span-5">
            <TestimonialCard {...testimonials[1]} />
          </div>

          {/* Row 2 */}
          <div className="col-span-5">
            <TestimonialCard {...testimonials[2]} />
          </div>
          <div className="col-span-7">
            <TestimonialCard {...testimonials[3]} />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="sm:hidden grid grid-cols-1 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, message, title, image }) => (
  <div className="testimonial-item text-[#fff] rounded bg-[#1f3735] px-6  h-[240px]  transition-all">
    <div className="flex justify-between items-center">
      {/* Star Icon */}
      <div className='flex'>
        <FaStar className="text-white text-[20px]" />
      <FaStar className="text-white text-[20px]" />
      <FaStar className="text-white text-[20px]" />
      <FaStar className="text-white text-[20px]" />
      </div>

      {/* Double Colon / Quote Symbol */}
      <div className="text-white  text-[50px] font-serif">”</div>
    </div>
    <p className=" text-[12px] ">"{message}"</p>
    <div className="flex items-center gap-4 my-3">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 rounded-full object-cover border"
      />
      <div>
        <h3 className="font-semibold text-[12px]">{name}</h3>
        <span className="text-[10px] text-gray-300">{title}</span>
      </div>
    </div>
  </div>
);

export default Testimonial;

