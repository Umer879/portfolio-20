'use client';
import React from 'react';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact">
      {/* Top Heading Section */}
      <div className=" mb-12">
        <p className="flex">
                <span className="me-2">
                    <img src="/assets/icon/icon-1.avif" alt="" />
                </span>{' '}
                Contact Us
            </p>
            <h1 className="font-semibold text-[50px] mt-2">Let’s Build Something</h1>
            <h2 className="font-semibold text-[50px] ms-12 mb-4">
                Great{' '}
                <span className="italic text-[#FFAE00] underline">together</span>
            </h2>
      </div>

      {/* Contact Form Section */}
      <form className="max-w-5xl mx-auto grid gap-6 p-10 rounded-[8px] contact-form bg-[#1f3735]">
        {/* Row 1: Full Name + Email */}
        <h1 className='text-[24px]'>Let’s Work Together!</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full input-data bg-[#ffffff33] rounded-lg px-4 py-3 focus:ring-2  outline-none border-none"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full input-data bg-[#ffffff33] rounded-lg px-4 py-3 focus:ring-2  outline-none border-none"
            required
          />
        </div>

        {/* Row 2: Phone + Subject */}
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full input-data bg-[#ffffff33] rounded-lg px-4 py-3 focus:ring-2  outline-none border-none"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full input-data bg-[#ffffff33] rounded-lg px-4 py-3 focus:ring-2  outline-none border-none"
            required
          />
        </div>

        {/* Row 3: Budget */}
        <div>
          <input
            type="text"
            placeholder="Your Budget (Optional)"
            className="w-full input-data bg-[#ffffff33] rounded-lg px-4 py-3 focus:ring-2  outline-none border-none"
          />
        </div>

        {/* Row 4: Message */}
        <div>
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full input-data bg-[#ffffff33] rounded-lg px-4 py-3 focus:ring-2  outline-none border-none"
            required
          ></textarea>
        </div>

        {/* Send Button */}
        <div className='contact-button'>
          <button
            type="submit"
            className=" text-black hover:text-white  button px-10 py-3 rounded-[30px] inline-flex items-center gap-2 transition"
          >
            <FiSend className="text-lg" />
            Send 
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
