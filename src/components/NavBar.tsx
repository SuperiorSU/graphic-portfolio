"use client"
import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar: React.FC = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    // Function to scroll to a section with smooth effect and optional delay
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Adding delay before scroll
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100); // Adjust delay as needed
        }
    };

    return (
        <div className='scroll-smooth sticky top-0 z-[1000] bg-slate-950'>
            <nav className='flex justify-between py-4 items-center lg:ps-7 lg:pe-7 ps-2 pe-2 border-b-[1px] border-slate-600'>
                <div>
                    <div className='flex gap-x-9 justify-around items-center'>
                        <div className='logo grid grid-cols-2 content-center place-items-center text-white font-medium'>
                            <div className='w-8 h-8  inline-block'>
                                <img src="https://utfs.io/f/a9350f24-f2a2-4eed-8c78-d3a0118ba03c-1q4e47.jpg" alt="" className='w-8 h-8 object-cover rounded-full ' />
                            </div>
                            <div className='lg:text-[18px] text-sm font-semibold'>KUMAR SUJAL</div>
                        </div>
                        <div>
                            {/* Navigation items, hidden on smaller screens */}
                            <ul className='hidden gap-x-7 justify-around items-center lg:flex md:flex sm:hidden'>
                                <li className='text-gray-400 hover:text-white uppercase duration-150'>
                                    <button onClick={() => scrollToSection('home')}>Home</button>
                                </li>
                                <li className='text-gray-400 hover:text-white uppercase duration-150'>
                                    <button onClick={() => scrollToSection('about')}>About</button>
                                </li>
                                <li className='text-gray-400 hover:text-white uppercase duration-150'>
                                    <button onClick={() => scrollToSection('highlights')}>Highlights</button>
                                </li>
                                <li className='text-gray-400 hover:text-white uppercase duration-150'>
                                    <button onClick={() => scrollToSection('designs')}>Designs</button>
                                </li>
                                <li className='text-gray-400 hover:text-white uppercase duration-150'>
                                    <button onClick={() => scrollToSection('reviews')}>Reviews</button>
                                </li>
                                <li className='text-gray-400 hover:text-white uppercase duration-150'>
                                    <button onClick={() => scrollToSection('contact')}><a href='mailto:sujalsinha2001@gmail.com'>Contact</a></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-x-4'>
                    <a href="https://github.com/SuperiorSU">
                        <button className='text-gray-400 hover:text-white duration-150 lg:block md:block hidden sm:hidden border-t-[1px] border-white/30 px-2 py-2 bg-[#0b112a] rounded-full'>
                            <FaGithub size={20} />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/kumar-sujal/">
                        <button className='text-gray-400 hover:text-white duration-150 lg:block md:block hidden sm:hidden border-t-[1px] border-white/30 px-2 py-2 bg-[#0b112a] rounded-full'>
                            <FaLinkedinIn size={20} />
                        </button>
                    </a>
                    <div>
                        {!isClicked && (
                            <GiHamburgerMenu size={24} className='text-white lg:hidden md:hidden sm:block' onClick={handleClick} />
                        )}

                        {isClicked && (
                            <RxCross1 onClick={handleClick} size={24} className='text-white lg:hidden md:hidden sm:block' />
                        )}
                    </div>
                </div>
            </nav>
            <div className='relative'>
                {isClicked && (
                    <div className='bg-white/15 backdrop-blur-md py-5 absolute w-60 right-0 border-2 border-gray-600'>
                        <ul className='flex flex-col gap-y-7 justify-around items-center'>
                            <li className='text-gray-200 hover:text-white uppercase duration-150'>
                                <button onClick={() => scrollToSection('home')}>Home</button>
                            </li>
                            <li className='text-gray-200 hover:text-white uppercase duration-150'>
                                <button onClick={() => scrollToSection('about')}>Highlights</button>
                            </li>
                            <li className='text-gray-200 hover:text-white uppercase duration-150'>
                                <button onClick={() => scrollToSection('highlights')}>Highlights</button>
                            </li>
                            <li className='text-gray-200 hover:text-white uppercase duration-150'>
                                <button onClick={() => scrollToSection('designs')}>Designs</button>
                            </li>
                            <li className='text-gray-200 hover:text-white uppercase duration-150'>
                                <button onClick={() => scrollToSection('reviews')}>Reviews</button>
                            </li>
                            <li className='text-gray-200 hover:text-white uppercase duration-150'>
                                <button onClick={() => scrollToSection('contact')}><a href='mailto:sujalsinha2001@gmail.com'>Contact</a></button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
