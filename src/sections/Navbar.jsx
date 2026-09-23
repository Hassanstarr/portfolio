import React, { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import logo from "../assets/logo.png";

const navItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Achievements", target: "achievements" },
    { label: "Contact", target: "contact" },
];

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const scrollPosition = window.scrollY + 150;

            for (const item of navItems) {
                const section = document.getElementById(item.target);

                if (!section) continue;

                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                ) {
                    setActiveSection(item.target);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (target) => {
        const section = document.getElementById(target);

        if (!section) {
            console.warn(`Section with id="${target}" not found.`);
            return;
        }

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={"fixed left-0 top-0 z-50 w-full transition-all duration-300 border-b border-[#30343B]/70 bg-[#0D0F12] backdrop-blur-md"}
        >
            <div className="mx-auto flex h-20 w-full max-w-auto items-center justify-between px-5 sm:px-6 lg:px-10">

                <button
                    type="button"
                    onClick={() => scrollToSection("home")}
                    className="group flex cursor-pointer items-center gap-3"
                >
                    <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full">
                        <img
                            src={logo}
                            alt="Muhammad Hassan logo"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <span className="text-sm font-medium tracking-wide text-[#F5F5F5] transition-colors duration-300 group-hover:text-[#B96CFF] sm:text-base">
                        Muhammad Hassan
                    </span>
                </button>

                <div className="hidden md:block">
                    <ul className="flex items-center gap-1 lg:gap-2">
                        {navItems.map((item) => (
                            <li key={item.target}>
                                <button
                                    type="button"
                                    onClick={() => scrollToSection(item.target)}
                                    className={`relative cursor-pointer px-3 py-2 text-sm transition-colors duration-300 lg:px-4 ${
                                        activeSection === item.target
                                            ? "text-[#F5F5F5]"
                                            : "text-[#9297A1] hover:text-[#F5F5F5]"
                                    }`}
                                >
                                    {item.label}

                                    <span
                                        className={`absolute bottom-0 left-3 h-px bg-[#B96CFF] transition-all duration-300 lg:left-4 ${
                                            activeSection === item.target
                                                ? "w-[calc(100%-24px)] lg:w-[calc(100%-32px)]"
                                                : "w-0"
                                        }`}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    type="button"
                    onClick={() =>
                        setIsMobileMenuOpen((prev) => !prev)
                    }
                    aria-label={
                        isMobileMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    className="flex cursor-pointer items-center justify-center rounded-md border border-[#30343B] p-2 text-[#F5F5F5] transition-all duration-300 hover:border-[#B96CFF] hover:text-[#B96CFF] md:hidden"
                >
                    {isMobileMenuOpen ? (
                        <HiOutlineXMark size={25} />
                    ) : (
                        <HiOutlineBars3 size={25} />
                    )}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="border-t border-[#30343B]/70 bg-[#0D0F12]/95 px-5 pb-5 backdrop-blur-md sm:px-6 md:hidden">
                    <ul className="mx-auto flex w-full max-w-7xl flex-col pt-3">
                        {navItems.map((item) => (
                            <li key={item.target}>
                                <button
                                    type="button"
                                    onClick={() =>
                                        scrollToSection(item.target)
                                    }
                                    className={`w-full cursor-pointer border-b border-[#30343B]/50 px-2 py-3 text-left text-sm transition-colors duration-300 ${
                                        activeSection === item.target
                                            ? "text-[#B96CFF]"
                                            : "text-[#9297A1] hover:text-[#F5F5F5]"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;