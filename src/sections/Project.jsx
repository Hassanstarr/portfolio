import React from "react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import projectsData from "../data/projectData.js";
import useScrollReveal from "../hooks/useScrollReveal.js";

function Projects() {
    const [sectionRef, isVisible] = useScrollReveal();

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative min-h-screen overflow-hidden bg-[#0D0F12] py-24 sm:py-28 lg:py-32"
        >

            <div className="pointer-events-none absolute -left-40 top-20 h-75 w-80 rounded-full border border-[#B96CFF]/20 animate-[spin_25s_linear_infinite]" />
            <div className="pointer-events-none absolute -left-32 top-30 h-60 w-65 rounded-full border border-[#2BB6B6]/20 animate-[spin_18s_linear_infinite_reverse]" />
            <div className="pointer-events-none absolute right-10 top-1/4 h-2 w-2 rounded-full bg-[#B96CFF] shadow-[0_0_20px_#B96CFF] animate-pulse" />
            <div className="pointer-events-none absolute left-1/4 bottom-24 h-2 w-2 rounded-full bg-[#2BB6B6] shadow-[0_0_20px_#2BB6B6] animate-pulse" />
            <div className="pointer-events-none absolute right-1/3 bottom-1/3 h-1.5 w-1.5 rounded-full bg-[#B96CFF] shadow-[0_0_15px_#B96CFF] animate-pulse" />

            <div className="pointer-events-none absolute right-16 top-32 hidden h-6 w-6 lg:block">
                <span className="absolute left-1/2 top-0 h-full w-px bg-[#B96CFF]/30" />
                <span className="absolute left-0 top-1/2 h-px w-full bg-[#B96CFF]/30" />
            </div>

            <div className="pointer-events-none absolute bottom-32 left-10 hidden h-32 w-px bg-linear-to-b from-transparent via-[#30343B] to-transparent lg:block" />


            <div className="relative mx-auto flex w-full max-w-7xl min-h-[calc(100vh-5rem)] flex-col justify-center px-5 sm:px-6 lg:px-8">


                <div
                    className={`mb-14 max-w-3xl transition-all duration-1000 sm:mb-16 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                >
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#B96CFF]" />

                        <span className="font-mono text-xs tracking-widest text-[#B96CFF] sm:text-sm">
                            {projectsData.eyebrow}
                        </span>
                    </div>

                    <h2 className="font-mono text-4xl font-semibold leading-tight tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
                        {projectsData.heading.firstLine}{" "}
                        <span className="text-[#B96CFF]">
                            {projectsData.heading.highlighted}
                        </span>{" "}
                        {projectsData.heading.lastLine}
                    </h2>

                    <p
                        className={`mt-6 max-w-2xl text-base leading-7 text-[#9297A1] transition-all duration-1000 delay-300 sm:text-lg sm:leading-8 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        }`}
                    >
                        {projectsData.description}
                    </p>

                    <div
                        className={`mt-6 h-px bg-[#30343B] transition-all duration-1000 delay-500 ${
                            isVisible ? "w-32" : "w-0"
                        }`}
                    />
                </div>



                <div className="space-y-8">
                    {projectsData.projects.slice(0, 4).map((project, index) => (
                        <article
                            key={project.id}
                            className={`group relative overflow-hidden border border-[#30343B] bg-[#15181D]/60 transition-all duration-1000 hover:-translate-y-1 hover:border-[#B96CFF]/50 hover:bg-[#15181D] ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-16 opacity-0"
                            }`}
                        >
              
                            <div className="absolute left-0 top-0 z-20 h-px w-0 bg-[#B96CFF] transition-all duration-700 group-hover:w-full" />
                            <div className="absolute right-0 top-0 z-20 h-10 w-10 border-r border-t border-[#30343B] transition-colors duration-500 group-hover:border-[#B96CFF]/50" />

                            <div className="grid lg:grid-cols-2">


                                <div className="relative min-h-72 overflow-hidden lg:min-h-80">

                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={`${project.title} project screenshot`}
                                            className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="relative flex h-full min-h-72 items-center justify-center overflow-hidden bg-[#15181D]">


                                            <div
                                                className="absolute inset-0 opacity-30"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(#30343B 1px, transparent 1px), linear-gradient(90deg, #30343B 1px, transparent 1px)",
                                                    backgroundSize: "35px 35px",
                                                }}
                                            />


                                            <div className="absolute h-52 w-52 rounded-full border border-[#B96CFF]/15 animate-[spin_15s_linear_infinite]" />
                                            <div className="absolute h-36 w-36 rotate-45 border border-[#2BB6B6]/15 animate-[spin_20s_linear_infinite_reverse]" />
                                            <div className="absolute left-10 top-20 h-2 w-2 rounded-full bg-[#B96CFF] shadow-[0_0_20px_#B96CFF] animate-pulse" />
                                            <div className="absolute bottom-20 right-10 h-2 w-2 rounded-full bg-[#2BB6B6] shadow-[0_0_20px_#2BB6B6] animate-pulse" />

                                            <div className="relative z-10 text-center">

                                                <div className="font-mono text-5xl font-semibold text-[#B96CFF]/80">
                                                    {"{ }"}
                                                </div>

                                                <p className="mt-4 font-mono text-xs tracking-[0.3em] text-[#9297A1]">
                                                    PROJECT
                                                </p>

                                                <p className="mt-2 font-mono text-[10px] text-[#30343B]">
                                                    API · DATABASE · SERVER
                                                </p>

                                            </div>
                                        </div>
                                    )}


                                    <div className="absolute inset-0 bg-linear-to-t from-[#0D0F12] via-[#0D0F12]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
                                    <div className="absolute inset-0 bg-[#B96CFF]/0 transition-colors duration-500 group-hover:bg-[#B96CFF]/5" />

                                    <div className="absolute left-5 top-5 border border-[#30343B] bg-[#0D0F12]/80 px-3 py-1.5 font-mono text-xs text-[#B96CFF] backdrop-blur-md">
                                        {project.number}
                                    </div>

                                    <div className="absolute bottom-5 left-5 font-mono text-[10px] tracking-widest text-[#F5F5F5]">
                                        {project.category}
                                    </div>

                                </div>


                                <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">

                                    <div>

                                        <span className="font-mono text-[10px] tracking-widest text-[#9297A1]">
                                            PROJECT {project.number}
                                        </span>

                                        <h3 className="mt-2 font-mono text-2xl font-semibold text-[#F5F5F5] transition-colors duration-300 group-hover:text-[#B96CFF] sm:text-3xl">
                                            {project.title}
                                        </h3>

                                        <p className="mt-5 max-w-xl text-sm leading-7 text-[#9297A1] sm:text-base">
                                            {project.description}
                                        </p>

                                        <div className="mt-6 grid gap-2 sm:grid-cols-2">
                                            {project.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-start gap-2 text-xs leading-5 text-[#9297A1]"
                                                >
                                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#2BB6B6] shadow-[0_0_8px_#2BB6B6]" />

                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8">


                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="border border-[#30343B] bg-[#0D0F12] px-2.5 py-1.5 font-mono text-[10px] text-[#9297A1] transition-all duration-300 hover:border-[#2BB6B6]/60 hover:text-[#2BB6B6]"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>


                                        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#30343B] pt-5">

                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 border border-[#30343B] px-4 py-2.5 font-mono text-xs text-[#F5F5F5] transition-all duration-300 hover:-translate-y-1 hover:border-[#B96CFF] hover:text-[#B96CFF]"
                                                >
                                                    <FiGithub size={15} />
                                                    GitHub
                                                </a>
                                            )}

                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 bg-[#B96CFF] px-4 py-2.5 font-mono text-xs text-[#0D0F12] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c783ff]"
                                                >
                                                    Live Demo
                                                    <FiArrowUpRight size={15} />
                                                </a>
                                            )}

                                            {!project.github && !project.live && (
                                                <span className="font-mono text-[10px] tracking-widest text-[#30343B]">
                                                    LINKS COMING SOON
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>



                <div
                    className={`mt-12 flex justify-center transition-all duration-1000 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                    style={{
                        transitionDelay: "1100ms",
                    }}
                >
                    <a
                        href="https://github.com/Hassanstarr?tab=repositories"
                        target="_blank"
                        className="group inline-flex items-center gap-3 border border-[#30343B] bg-[#15181D] px-6 py-3 font-mono text-sm text-[#F5F5F5] transition-all duration-300 hover:-translate-y-1 hover:border-[#B96CFF] hover:text-[#B96CFF]"
                    >
                        <span>Go to GitHub Repositories</span>

                        <FiArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </a>
                </div>


                <div
                    className={`mt-16 flex items-center gap-4 transition-all duration-1000 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                    style={{
                        transitionDelay: "1200ms",
                    }}
                >
                    <span className="font-mono text-[10px] text-[#9297A1]">
                        04
                    </span>

                    <div className="h-px flex-1 bg-[#30343B]" />

                    <span className="font-mono text-[10px] tracking-widest text-[#9297A1]">
                        IDEAS · CODE · RESULTS
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Projects;