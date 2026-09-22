import React from "react";
import skillsData from "../data/skillData.js";
import useScrollReveal from "../hooks/useScrollReveal.js";

function Skills() {
    const [sectionRef, isVisible] = useScrollReveal();

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative overflow-hidden min-h-screen bg-[#0D0F12] py-24 sm:py-28 lg:py-32"
        >

            <div className="pointer-events-none absolute -right-40 top-20 h-76 w-80 rounded-full border border-[#B96CFF]/20 animate-[spin_25s_linear_infinite]" />
            <div className="pointer-events-none absolute -right-28 top-30 h-60 w-64 rounded-full border border-[#2BB6B6]/20 animate-[spin_18s_linear_infinite_reverse]" />
            <div className="pointer-events-none absolute left-10 top-1/4 h-2 w-2 rounded-full bg-[#B96CFF] shadow-[0_0_20px_#B96CFF] animate-pulse" />
            <div className="pointer-events-none absolute bottom-24 right-1/3 h-2 w-2 rounded-full bg-[#2BB6B6] shadow-[0_0_20px_#2BB6B6] animate-pulse" />
            <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-1.5 w-1.5 rounded-full bg-[#B96CFF] shadow-[0_0_15px_#B96CFF] animate-pulse" />

            <div className="pointer-events-none absolute right-16 top-1/3 hidden h-5 w-5 lg:block">
                <span className="absolute left-1/2 top-0 h-full w-px bg-[#B96CFF]/30" />
                <span className="absolute left-0 top-1/2 h-px w-full bg-[#B96CFF]/30" />
            </div>

            <div className="pointer-events-none absolute bottom-20 left-16 hidden h-4 w-4 lg:block">
                <span className="absolute left-1/2 top-0 h-full w-px bg-[#2BB6B6]/30" />
                <span className="absolute left-0 top-1/2 h-px w-full bg-[#2BB6B6]/30" />
            </div>


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
                            {skillsData.eyebrow}
                        </span>
                    </div>

                    <h2 className="font-mono text-4xl font-semibold leading-tight tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
                        {skillsData.heading.firstLine}{" "}
                        <span className="text-[#B96CFF]">
                            {skillsData.heading.highlighted}
                        </span>{" "}
                        {skillsData.heading.lastLine}
                    </h2>

                    <p
                        className={`mt-6 max-w-2xl text-base leading-7 text-[#9297A1] transition-all duration-1000 delay-300 sm:text-lg sm:leading-8 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        }`}
                    >
                        {skillsData.description}
                    </p>

                    <div
                        className={`mt-6 h-px bg-[#30343B] transition-all duration-1000 delay-500 ${
                            isVisible ? "w-32" : "w-0"
                        }`}
                    />
                </div>




                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {skillsData.categories.map((category, index) => (
                        <div
                            key={category.id}
                            className={`
                                group relative overflow-hidden border border-[#30343B] bg-[#15181D]/50 p-6 transition-all duration-700 hover:-translate-y-2 hover:border-[#B96CFF]/50 hover:bg-[#15181D]
                                ${
                                    isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                }
                            `}     
                        >
                            <div className="absolute left-0 top-0 h-px w-0 bg-[#B96CFF] transition-all duration-500 group-hover:w-full" />

                            <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-[#30343B] transition-colors duration-300 group-hover:border-[#B96CFF]/50" />

                            <div className="flex items-center justify-between">
                                <span className="font-mono text-xs text-[#B96CFF]">
                                    {category.number}
                                </span>

                                <span className="font-mono text-xs text-[#30343B] transition-colors duration-300 group-hover:text-[#2BB6B6]">
                                    {"{ }"}
                                </span>
                            </div>

                            <h3 className="mt-5 font-mono text-xl font-semibold text-[#F5F5F5]">
                                {category.title}
                            </h3>

                            <p className="mt-2 min-h-10 text-sm leading-5 text-[#9297A1]">
                                {category.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skill}
                                        className="border border-[#30343B] bg-[#0D0F12] px-3 py-1.5 font-mono text-xs text-[#9297A1] transition-all duration-300 hover:border-[#2BB6B6]/60 hover:text-[#2BB6B6]"
                                        style={{
                                            transitionDelay: `${skillIndex * 30}ms`,
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-7 flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-[#2BB6B6] transition-all duration-300 group-hover:w-8" />

                                <span className="font-mono text-[10px] tracking-widest text-[#30343B] transition-colors duration-300 group-hover:text-[#9297A1]">
                                    {category.skills.length} SKILLS
                                </span>
                            </div>
                        </div>
                    ))}
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
                        03
                    </span>

                    <div className="h-px flex-1 bg-[#30343B]" />

                    <span className="font-mono text-[10px] tracking-widest text-[#9297A1]">
                        LEARN · BUILD · IMPROVE
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Skills;