import React from "react";
import { FiArrowUp, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const footerNav = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Achievements", target: "achievements" },
    { label: "Contact", target: "contact" },
];

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/Hassanstarr",
        icon: <FiGithub size={17} />,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/1ts-muhammad-hassan/",
        icon: <FiLinkedin size={17} />,
    },
];

function Footer() {
    const currentYear = new Date().getFullYear();

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
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-[#30343B] bg-[#0D0F12]">

            <div
                className="pointer-events-none absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "linear-gradient(#B96CFF 1px, transparent 1px), linear-gradient(90deg, #B96CFF 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full border border-[#B96CFF]/10" />
            <div className="pointer-events-none absolute -right-24 top-20 h-48 w-48 rounded-full border border-[#2BB6B6]/10" />
            <div className="pointer-events-none absolute left-[10%] top-20 h-1.5 w-1.5 rounded-full bg-[#B96CFF] shadow-[0_0_15px_#B96CFF]" />
            <div className="pointer-events-none absolute right-[15%] bottom-24 h-1.5 w-1.5 rounded-full bg-[#2BB6B6] shadow-[0_0_15px_#2BB6B6]" />


            <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

                <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:gap-16">

                    <div>
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="group cursor-pointer text-left"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center border border-[#30343B] bg-[#15181D] font-mono text-sm font-semibold text-[#B96CFF] transition-all duration-300 group-hover:border-[#B96CFF] group-hover:shadow-[0_0_20px_rgba(185,108,255,0.1)]">
                                    MH
                                </div>

                                <span className="font-mono text-sm font-medium tracking-wide text-[#F5F5F5] transition-colors duration-300 group-hover:text-[#B96CFF]">
                                    Muhammad Hassan
                                </span>
                            </div>
                        </button>

                        <p className="mt-6 max-w-md font-mono text-sm leading-7 text-[#9297A1]">
                            Mathematician & Coder
                            <br />
                            <span className="text-[#B96CFF]">
                                From Integrals to Interface.
                            </span>
                        </p>

                        <p className="mt-5 max-w-md text-sm leading-6 text-[#555B65]">
                            Building practical software, exploring AI and data,
                            and turning complex problems into simple solutions.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="group flex items-center gap-2 border border-[#30343B] bg-[#15181D] px-3.5 py-2.5 font-mono text-xs text-[#9297A1] transition-all duration-300 hover:-translate-y-1 hover:border-[#B96CFF] hover:text-[#B96CFF]"
                                >
                                    {social.icon}

                                    <span>{social.name}</span>

                                    <FiArrowUpRight
                                        size={13}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </a>
                            ))}

                            <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=hassanasif419@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Send email via Gmail web app"
                            className="group flex items-center gap-2 border border-[#30343B] bg-[#15181D] px-3.5 py-2.5 font-mono text-xs text-[#9297A1] transition-all duration-300 hover:-translate-y-1 hover:border-[#2BB6B6] hover:text-[#2BB6B6]"
                            >
                                <FiMail size={15} />

                                <span>Email</span>

                                <FiArrowUpRight
                                    size={13}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </div>


                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-6 bg-[#B96CFF]" />

                            <span className="font-mono text-[10px] tracking-widest text-[#B96CFF]">
                                NAVIGATION
                            </span>
                        </div>

                        <ul className="space-y-3">
                            {footerNav.map((item) => (
                                <li key={item.target}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            scrollToSection(item.target)
                                        }
                                        className="group flex cursor-pointer items-center gap-2 font-mono text-xs text-[#9297A1] transition-colors duration-300 hover:text-[#F5F5F5]"
                                    >
                                        <span className="h-px w-0 bg-[#B96CFF] transition-all duration-300 group-hover:w-4" />

                                        <span>{item.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-6 bg-[#2BB6B6]" />

                            <span className="font-mono text-[10px] tracking-widest text-[#2BB6B6]">
                                CONNECT
                            </span>
                        </div>

                        <p className="max-w-xs text-sm leading-6 text-[#9297A1]">
                            Have a project, opportunity, or idea worth
                            discussing?
                        </p>

                        <button
                            type="button"
                            onClick={() => scrollToSection("contact")}
                            className="group mt-5 inline-flex cursor-pointer items-center gap-2 border border-[#30343B] bg-[#15181D] px-4 py-3 font-mono text-xs text-[#F5F5F5] transition-all duration-300 hover:-translate-y-1 hover:border-[#B96CFF] hover:text-[#B96CFF]"
                        >
                            Get In Touch

                            <FiArrowUpRight
                                size={14}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </button>

                        <div className="mt-6 flex items-center gap-3">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2BB6B6] opacity-60" />

                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2BB6B6]" />
                            </span>

                            <span className="font-mono text-[9px] tracking-widest text-[#2BB6B6]">
                                OPEN TO OPPORTUNITIES
                            </span>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-5 border-t border-[#30343B] py-6 sm:flex-row sm:items-center sm:justify-between">

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                        <span className="font-mono text-[10px] text-[#555B65]">
                            © {currentYear} Muhammad Hassan
                        </span>

                        <span className="hidden h-1 w-1 rounded-full bg-[#30343B] sm:block" />

                        <span className="font-mono text-[10px] text-[#555B65]">
                            Built with React & Tailwind CSS
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="group flex w-fit cursor-pointer items-center gap-2 font-mono text-[10px] tracking-widest text-[#9297A1] transition-colors duration-300 hover:text-[#B96CFF]"
                    >
                        BACK TO TOP

                        <span className="flex h-7 w-7 items-center justify-center border border-[#30343B] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#B96CFF]">
                            <FiArrowUp
                                size={13}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                            />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;