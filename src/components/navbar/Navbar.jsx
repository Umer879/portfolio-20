'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiMessageSquare } from 'react-icons/fi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: 'Home', path: '#home' },
        { label: 'About', path: '#about' },
        { label: 'Service', path: '#services' },
        { label: 'Skill', path: '#skill' },
        { label: 'Portfolio', path: '#portfolio' },
        { label: 'Testimonial', path: '#testimonial' },
        { label: 'Blog', path: '#blog' },
        { label: 'Contact', path: '#contact' },
    ];

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isOpen && !e.target.closest('.side-menu') && !e.target.closest('.menu-btn')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isOpen]);

    return (
        <>
            {/* Top Navbar */}
            <nav className=" top-0 flex justify-between items-center lg:px-[60px] sm:px-[40px] px-3 py-3 bg-[#061D1E] z-50 h-20">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <img src="/assets/logo/logo1.webp" alt="Logo" className="w-[100px] lg:w-[150px]" />
                </div>

                {/* Buttons and Toggle */}
                <div className="flex items-center gap-4">
                    <a href="#contact">
                        <button className="button rounded-4xl flex items-center justify-center px-4 sm:mx-[20px] py-2 text-black hover:text-white transition duration-300 ease-in-out">
                            Hire Me <span className="ms-2"><FiMessageSquare /></span>
                        </button>
                    </a>

                    {!isOpen && (
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-3xl text-white cursor-pointer menu-btn hover:text-[#FFAE00] transition"
                        >
                            <FiMenu />
                        </button>
                    )}
                </div>
            </nav>

            {/* Side Menu */}
            <div
                className={`fixed top-0 right-0 h-screen w-full lg:w-[26vw] sm:w-[40vw] bg-[#09282a] text-white transform transition-transform duration-300 z-[999] side-menu ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-3xl text-white cursor-pointer hover:text-[#FFAE00] transition"
                    >
                        <FiX />
                    </button>
                </div>

                {/* Nav Links */}
                <ul className="flex flex-col ps-10 uppercase text-1xl gap-4 font-medium mt-7">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <a
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className="hover:text-[#FFAE00] transition"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}

                    {/* CTA Button */}
                    <a href="#contact">
                        <button className="button uppercase rounded-4xl flex items-center justify-center px-3 py-2 text-black hover:text-white transition duration-300 ease-in-out">
                            Get in touch now <span className="ms-2"><FiMessageSquare /></span>
                        </button>
                    </a>
                </ul>
            </div>

            {/* Overlay */}
            {isOpen && <div className="fixed inset-0 z-40" />}
        </>
    );
}
