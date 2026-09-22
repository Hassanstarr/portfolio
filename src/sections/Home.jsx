import React from "react";
import homeData from "../data/homeData.js";

function Home() {
    const scrollToSection = (target) => {
        const section = document.getElementById(target);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="home" className="relative min-h-screen overflow-hidden bg-[#0D0F12] pt-20">
            
            <div className="pointer-events-none absolute -right-40 top-20 h-76 w-80 rounded-full border border-[#B96CFF]/20 animate-[spin_25s_linear_infinite]" />
            <div className="pointer-events-none absolute -right-28 top-30 h-60 w-64 rounded-full border border-[#2BB6B6]/20 animate-[spin_18s_linear_infinite_reverse]" />
            <div className="absolute left-10 top-1/3 h-2 w-2 rounded-full bg-[#B96CFF] shadow-[0_0_20px_#B96CFF] animate-pulse" />
            <div className="absolute bottom-20 right-1/3 h-2 w-2 rounded-full bg-[#2BB6B6] shadow-[0_0_20px_#2BB6B6] animate-pulse" />

            <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center px-5 py-16 sm:px-6 lg:px-8">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-8">

                    <div className="relative z-10">

                        <div className="mb-5 flex items-center gap-3 animate-[fadeInUp_0.8s_ease-out_both]">
                            <span className="h-px w-8 bg-[#B96CFF]" />
                            <span className="font-mono text-xs tracking-widest text-[#B96CFF] sm:text-sm">
                                {homeData.eyebrow}
                            </span>
                        </div>

                        <h1 className="max-w-3xl font-mono text-5xl font-semibold leading-tight tracking-tight text-[#F5F5F5] animate-[fadeInUp_0.8s_ease-out_0.15s_both] sm:text-6xl lg:text-7xl xl:text-8xl">
                            {homeData.heading.firstLine}{" "}
                            <span className="text-[#B96CFF]">
                                {homeData.heading.highlighted}
                            </span>
                            <br />
                            {homeData.heading.lastLine}
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-7 text-[#9297A1] animate-[fadeInUp_0.8s_ease-out_0.3s_both] sm:text-lg sm:leading-8">
                            {homeData.description}
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4 animate-[fadeInUp_0.8s_ease-out_0.45s_both]">
                            {homeData.buttons.map((button) => (
                                <button
                                    key={button.label}
                                    type="button"
                                    onClick={() => scrollToSection(button.target)}
                                    className={
                                        button.label === "View My Work"
                                            ? "cursor-pointer bg-[#B96CFF] px-6 py-3 font-mono text-sm text-[#0D0F12] transition hover:-translate-y-1 hover:bg-[#c783ff]"
                                            : "cursor-pointer border border-[#30343B] px-6 py-3 font-mono text-sm text-[#F5F5F5] transition hover:-translate-y-1 hover:border-[#2BB6B6] hover:text-[#2BB6B6]"
                                    }
                                >
                                    {button.label}
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 flex items-center gap-2 font-mono text-xs text-[#9297A1] animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
                            <span className="h-2 w-2 rounded-full bg-[#2BB6B6] shadow-[0_0_10px_#2BB6B6] animate-pulse" />
                            {homeData.status}
                        </div>

                    </div>
                    <div className="relative flex min-h-100 items-center justify-center lg:min-h-137.5">

                        <div className="absolute h-64 w-64 rotate-12 border border-[#B96CFF]/20 animate-[spin_12s_linear_infinite] sm:h-80 sm:w-80 lg:h-105 lg:w-105" />
                        <div className="absolute h-64 w-64 -rotate-6 rounded-full border border-[#2BB6B6]/ sm:h-80 sm:w-80 lg:h-100 lg:w-100" />

                        <div className="relative z-10 h-72 w-72 overflow-hidden rounded-full border border-[#30343B] bg-[#15181D] shadow-[0_0_60px_rgba(185,108,255,0.08)] transition hover:scale-105 sm:h-80 sm:w-80 lg:h-100 lg:w-100">
                            <img
                                src={homeData.image.src}
                                alt={homeData.image.alt}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap border border-[#30343B] bg-[#15181D]/90 px-4 py-2 font-mono text-xs text-[#9297A1] backdrop-blur-md sm:bottom-8">
                            {"<"} build • learn • create {"/>"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#9297A1] md:flex animate-[bounce_6s_ease-in-out_infinite]">
                <span className="font-mono text-[10px] tracking-widest">
                    SCROLL
                </span>

                <span className="h-8 w-px bg-linear-to-b from-[#B96CFF] to-transparent animate-pulse" />
            </div>
        </section>
    );
}

export default Home;

