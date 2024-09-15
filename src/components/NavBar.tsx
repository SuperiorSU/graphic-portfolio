"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names

const sections = ["home", "about", "highlights", "designs","clients", "reviews"];

const NavBar: React.FC = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("home");

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // Adjust threshold as needed for when the section is considered in view
        );

        sections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
                const section = document.getElementById(sectionId);
                if (section) {
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
        <div className="scroll-smooth sticky top-0 z-[1000] bg-slate-950">
            <nav className="flex justify-between py-4 items-center lg:ps-7 lg:pe-7 ps-2 pe-2 border-b-[1px] border-slate-600">
                <div>
                    <div className="flex gap-x-9 justify-around items-center">
                        <a href="#">
                            <div className="logo grid grid-cols-2 content-center place-items-center text-white font-medium">
                                <div className="w-8 h-8 inline-bloc">
                                    <img
                                        src="https://utfs.io/f/a9350f24-f2a2-4eed-8c78-d3a0118ba03c-1q4e47.jpg"
                                        alt=""
                                        className="w-8 h-8 object-cover rounded-full "
                                    />
                                </div>
                                <div className="lg:text-[18px] text-sm font-semibold">KUMAR SUJAL</div>
                            </div>
                        </a>
                        <div>
                            {/* Navigation items */}
                            <ul className="hidden gap-x-7 justify-around items-center lg:flex md:flex sm:hidden">
                                {sections.map((section) => (
                                    <li
                                        key={section}
                                        className={cn(
                                            "text-gray-400 uppercase duration-150",
                                            activeSection === section && "text-white font-bold"
                                        )}
                                    >
                                        <button onClick={() => scrollToSection(section)}>{section.charAt(0).toUpperCase() + section.slice(1)}</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <a href="https://github.com/SuperiorSU">
                        <button className="text-gray-400 hover:text-white duration-150 lg:block md:block hidden sm:hidden border-t-[1px] border-white/30 px-2 py-2 bg-[#0b112a] rounded-full">
                            <FaGithub size={20} />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/kumar-sujal/">
                        <button className="text-gray-400 hover:text-white duration-150 lg:block md:block hidden sm:hidden border-t-[1px] border-white/30 px-2 py-2 bg-[#0b112a] rounded-full">
                            <FaLinkedinIn size={20} />
                        </button>
                    </a>
                    <div>
                        {!isClicked && (
                            <GiHamburgerMenu size={24} className="text-white lg:hidden md:hidden sm:block" onClick={handleClick} />
                        )}

                        {isClicked && (
                            <RxCross1 onClick={handleClick} size={24} className="text-white lg:hidden md:hidden sm:block" />
                        )}
                    </div>
                </div>
            </nav>
            <div className="relative">
                {isClicked && (
                    <div className="bg-white/15 backdrop-blur-md py-5 absolute w-60 right-0 border-2 border-gray-600">
                        <ul className="flex flex-col gap-y-7 justify-around items-center">
                            {sections.map((section) => (
                                <li
                                    key={section}
                                    className={cn(
                                        "text-gray-200 uppercase duration-150",
                                        activeSection === section && "text-white font-bold"
                                    )}
                                >
                                    <button onClick={() => scrollToSection(section)}>
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
