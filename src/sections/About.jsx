import React from "react";
import aboutData from "../data/aboutData.js";
import useScrollReveal from "../hooks/useScrollReveal.js";

function About() {
    const [sectionRef, isVisible] = useScrollReveal();

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative min-h-screen overflow-hidden bg-[#0D0F12] py-24 sm:py-28 lg:py-32"
        >
            <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full border border-[#B96CFF]/10 animate-[spin_25s_linear_infinite]" />
            <div className="pointer-events-none absolute -left-32 top-32 h-64 w-64 rounded-full border border-[#2BB6B6]/10 animate-[spin_18s_linear_infinite_reverse]" />
            <div className="pointer-events-none absolute left-10 top-1/3 h-2 w-2 rounded-full bg-[#B96CFF] shadow-[0_0_20px_#B96CFF] animate-pulse" />
            <div className="pointer-events-none absolute bottom-20 right-1/3 h-2 w-2 rounded-full bg-[#2BB6B6] shadow-[0_0_20px_#2BB6B6] animate-pulse" />
            <div className="pointer-events-none absolute right-16 top-32 h-1.5 w-1.5 rounded-full bg-[#B96CFF] shadow-[0_0_15px_#B96CFF] animate-pulse" />
            <div className="pointer-events-none absolute bottom-1/3 left-1/4 h-1.5 w-1.5 rounded-full bg-[#2BB6B6] shadow-[0_0_15px_#2BB6B6] animate-pulse" />
            <div className="pointer-events-none absolute right-10 top-24 hidden h-px w-32 bg-linear-to-r from-transparent via-[#30343B] to-transparent lg:block" />
            <div className="pointer-events-none absolute bottom-20 left-16 hidden h-32 w-px bg-linear-to-b from-transparent via-[#30343B] to-transparent lg:block" />

            <div className="pointer-events-none absolute right-20 top-1/3 hidden h-5 w-5 lg:block">
                <span className="absolute left-1/2 top-0 h-full w-px bg-[#B96CFF]/30" />
                <span className="absolute left-0 top-1/2 h-px w-full bg-[#B96CFF]/30" />
            </div>

            <div className="pointer-events-none absolute bottom-24 left-1/3 hidden h-4 w-4 lg:block">
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
                            {aboutData.eyebrow}
                        </span>
                    </div>

                    <h2 className="font-mono text-4xl font-semibold leading-tight tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
                        {aboutData.heading.firstLine}{" "}
                        <span className="text-[#B96CFF]">
                            {aboutData.heading.highlighted}
                        </span>{" "}
                        {aboutData.heading.lastLine}
                    </h2>

                    <div
                        className={`mt-6 h-px bg-[#30343B] transition-all duration-1000 delay-300 ${
                            isVisible ? "w-32" : "w-0"
                        }`}
                    />
                </div>

          
          

                <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

                    <div className="relative z-10">

                        <div className="space-y-5">
                            {aboutData.paragraphs.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className={`max-w-2xl text-base leading-7 text-[#9297A1] transition-all duration-1000 sm:text-lg sm:leading-8 ${
                                        isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-8 opacity-0"
                                    }`}
                                    style={{
                                        transitionDelay: `${400 + index * 150}ms`,
                                    }}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>


                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {aboutData.highlights.map((item, index) => (
                                <div
                                    key={item.number}
                                    className={`group relative overflow-hidden border border-[#30343B] bg-[#15181D]/50 p-5 transition-all duration-700 hover:-translate-y-2 hover:border-[#B96CFF]/50 hover:bg-[#15181D] ${
                                        isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-10 opacity-0"
                                    }`}
                                    style={{
                                        transitionDelay: `${850 + index * 150}ms`,
                                    }}
                                >
                                    <div className="absolute left-0 top-0 h-px w-0 bg-[#B96CFF] transition-all duration-500 group-hover:w-full" />

                                    <div className="absolute right-0 top-0 h-5 w-5 border-r border-t border-[#30343B] transition-colors duration-300 group-hover:border-[#B96CFF]/50" />

                                    <span className="font-mono text-xs text-[#B96CFF]">
                                        {item.number}
                                    </span>

                                    <h3 className="mt-3 font-mono text-sm font-semibold text-[#F5F5F5]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-xs leading-5 text-[#9297A1]">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 h-1 w-1 rounded-full bg-[#2BB6B6] transition-all duration-300 group-hover:w-8" />
                                </div>
                            ))}
                        </div>

                    </div>
                    

                    <div
                        className={`relative flex min-h-90 items-center justify-center transition-all duration-1000 sm:min-h-105 lg:min-h-125 ${
                            isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-16 opacity-0"
                        }`}
                        style={{
                            transitionDelay: "500ms",
                        }}
                    >

                        <div className="absolute h-64 w-64 rotate-12 border border-[#B96CFF]/20 animate-[spin_15s_linear_infinite] sm:h-80 sm:w-80 lg:h-95 lg:w-95" />
                        <div className="absolute h-56 w-56 -rotate-12 border border-dashed border-[#2BB6B6]/15 animate-[spin_20s_linear_infinite_reverse] sm:h-72 sm:w-72 lg:h-85 lg:w-85" />
                        <div className="absolute h-60 w-60 rounded-full border border-[#2BB6B6]/15 animate-pulse sm:h-72 sm:w-72 lg:h-85 lg:w-85" />
                        <div className="absolute left-10 top-10 h-2 w-2 rounded-full bg-[#B96CFF] shadow-[0_0_20px_#B96CFF] animate-pulse sm:left-14 sm:top-14" />
                        <div className="absolute bottom-10 right-10 h-2 w-2 rounded-full bg-[#2BB6B6] shadow-[0_0_20px_#2BB6B6] animate-pulse sm:bottom-14 sm:right-14" />
                        <span className="absolute left-0 top-4 h-5 w-5 border-l border-t border-[#B96CFF]/50" />
                        <span className="absolute bottom-4 right-0 h-5 w-5 border-b border-r border-[#2BB6B6]/50" />

                        <div className="group relative z-10 h-64 w-64 overflow-hidden border border-[#30343B] bg-[#15181D] shadow-[0_0_60px_rgba(185,108,255,0.08)] transition-all duration-500 hover:scale-[1.03] hover:border-[#B96CFF]/50 sm:h-80 sm:w-80 lg:h-95 lg:w-95">

                            <img
                                src={aboutData.image.src}
                                alt={aboutData.image.alt}
                                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                style={{
                                    imageRendering: "pixelated",
                                }}
                            />

                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0D0F12]/60 via-transparent to-transparent" />

                            <div
                                className="pointer-events-none absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(185,108,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(185,108,255,0.15) 1px, transparent 1px)",
                                    backgroundSize: "12px 12px",
                                }}
                            />

                            <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-[#B96CFF]/40 animate-[scan_4s_linear_infinite]" />

                        </div>

                        <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap border border-[#30343B] bg-[#15181D]/95 px-4 py-2 font-mono text-xs text-[#9297A1] backdrop-blur-md transition-all duration-300 hover:border-[#B96CFF]/50 hover:text-[#F5F5F5]">
                            {"<"} mathematics → code {"/>"}
                        </div>

                    </div>
                </div>



                <div
                    className={`mt-20 flex items-center gap-4 transition-all duration-1000 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                    style={{
                        transitionDelay: "1200ms",
                    }}
                >
                    <span className="font-mono text-[10px] text-[#9297A1]">
                        02
                    </span>

                    <div className="h-px flex-1 bg-[#30343B]" />

                    <span className="font-mono text-[10px] tracking-widest text-[#9297A1]">
                        LOGIC · CREATIVITY · CODE
                    </span>
                </div>
            </div>
        </section>
    );
}

export default About;