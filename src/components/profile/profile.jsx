'use client';

// import { motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaPaintBrush, FaQuoteRight, FaEnvelope, FaTools, FaDownload, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/navigation';




const navItems = [
  { id: 'home', icon: <FaHome />, path: '#home' },
  { id: 'about', icon: <FaUser />, path: '#about' },
  { id: 'settings', icon: <FaTools />, path: '#skill' },
  { id: 'portfolio', icon: <FaBriefcase />, path: '#portfolio' },
  { id: 'services', icon: <FaPaintBrush />, path: '#services' },
  { id: 'testimonial', icon: <FaQuoteRight />, path: '#testimonial' },
  { id: 'contact', icon: <FaEnvelope />, path: '#contact' },
];


export default function Profile() {
  const router = useRouter();
  return (
    <div className=" flex  profile-container pt-8 w-1/3 text-white">
      {/* Sidebar Navigation */}
      <div className=" px-3  flex icons flex-col gap-4 justify-start ">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              if (item.path) {
                router.push(item.path); // Navigate to the matching page
              }
            }}
            className="relative group cursor-pointer"
          >
            <div className="items bg-[#1f3735] flex justify-center items-center w-[70px] h-[70px] text-[30px] hover:[background-color:var(--bg-button)] rounded-md transition-colors duration-300">
              {item.icon}
            </div>
          </div>
        ))}

      </div>

      {/* Right Content */}
      <div>
        <div className=" bg-[#1f3435] p-3 rounded-lg profile text-center shadow-lg w-[310px]">
          <img
            src='/assets/photo/profile.avif'
            alt="Profile"
            className="w-full h-[300px] object-cover rounded-md mx-auto"
          />
          <h2 className="text-2xl font-bold my-3">Umer Gull </h2>
          <p className="text-sm my-2 text-gray-200">
            Hi, I’m Umer, a dedicated UI/UX Designer with 10 years of experience creating meaningful digital experiences.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-4">
            <div className="accounts flex justify-center items-center border w-[40px] h-[40px] rounded-full"><FaFacebook /></div>
            <div className="accounts flex justify-center items-center border w-[40px] h-[40px] rounded-full"> <FaInstagram /> </div>
            <div className="accounts flex justify-center items-center border w-[40px] h-[40px] rounded-full"> <FaLinkedin /> </div>
            <div className="accounts flex justify-center items-center border w-[40px] h-[40px] rounded-full"> <FaTwitter /> </div>
            <div className="accounts flex justify-center items-center border w-[40px] h-[40px] rounded-full">🌐</div>
          </div>
          {/* Button */}
          <button className="mt-5 my-2 px-6 py-1 bg-[#FFAE00] text-black font-bold rounded-full button hover:text-white transition">
            <div className='flex py-2 justify-center text-center'>DOWNLOAD NOW <span className='ms-2 mt-1'> <FaDownload /></span></div>
          </button>
          <p className="text-xs text-gray-400 mt-2">© 2025 OVRO. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
