import React, { useMemo, useState } from "react";
import { FiAward, FiExternalLink, FiSearch, FiX } from "react-icons/fi";

import achievementsData from "../data/achievementData.js";
import useScrollReveal from "../hooks/useScrollReveal.js";

function Achievements() {
    const [sectionRef, isVisible] = useScrollReveal();

    const [activeCategory, setActiveCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAchievements = useMemo(() => {
        return achievementsData.achievements.filter((achievement) => {
            const matchesCategory =
                activeCategory === "All" ||
                achievement.category === activeCategory;

            const searchText = searchTerm.toLowerCase();

            const matchesSearch =
                achievement.title.toLowerCase().includes(searchText) ||
                achievement.organization
                    .toLowerCase()
                    .includes(searchText) ||
                achievement.category
                    .toLowerCase()
                    .includes(searchText);

            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchTerm]);

    const clearSearch = () => {
        setSearchTerm("");
    };

    return (
        <section
            ref={sectionRef}
            id="achievements"
            className="relative min-h-screen overflow-hidden bg-[#0D0F12] py-24 sm:py-28 lg:py-32"
        >

            <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full border border-[#B96CFF]/10 animate-[spin_28s_linear_infinite]" />
            <div className="pointer-events-none absolute -right-28 top-32 h-64 w-64 rounded-full border border-dashed border-[#2BB6B6]/10 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="pointer-events-none absolute left-10 top-1/4 h-2 w-2 rounded-full bg-[#B96CFF] shadow-[0_0_20px_#B96CFF] animate-pulse" />
            <div className="pointer-events-none absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-[#2BB6B6] shadow-[0_0_20px_#2BB6B6] animate-pulse" />
            <div className="pointer-events-none absolute bottom-24 left-1/3 h-1.5 w-1.5 rounded-full bg-[#B96CFF] shadow-[0_0_15px_#B96CFF] animate-pulse" />
            <div className="pointer-events-none absolute bottom-1/3 right-10 h-1.5 w-1.5 rounded-full bg-[#2BB6B6] shadow-[0_0_15px_#2BB6B6] animate-pulse" />


            <div className="pointer-events-none absolute left-16 top-40 hidden h-7 w-7 rotate-12 lg:block">
                <span className="absolute left-1/2 top-0 h-full w-px bg-[#B96CFF]/30" />
                <span className="absolute left-0 top-1/2 h-px w-full bg-[#B96CFF]/30" />
            </div>


            <div className="pointer-events-none absolute bottom-40 right-20 hidden h-8 w-8 rotate-45 border border-[#2BB6B6]/20 lg:block" />
            <div className="pointer-events-none absolute left-0 top-1/2 hidden w-32 border-t border-dashed border-[#30343B] lg:block" />
            <div className="pointer-events-none absolute right-0 top-1/3 hidden w-32 border-t border-dashed border-[#30343B] lg:block" />



            <div className="relative mx-auto flex w-full max-w-7xl min-h-[calc(100vh-5rem)] flex-col justify-center px-5 sm:px-6 lg:px-8">


                <div
                    className={`mb-12 max-w-3xl transition-all duration-1000 sm:mb-14 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                    }`}
                >
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#B96CFF]" />

                        <span className="font-mono text-xs tracking-widest text-[#B96CFF] sm:text-sm">
                            {achievementsData.eyebrow}
                        </span>
                    </div>

                    <h2 className="font-mono text-4xl font-semibold leading-tight tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
                        {achievementsData.heading.firstLine}{" "}
                        <span className="text-[#B96CFF]">
                            {achievementsData.heading.highlighted}
                        </span>{" "}
                        {achievementsData.heading.lastLine}
                    </h2>

                    <p
                        className={`mt-6 max-w-2xl text-base leading-7 text-[#9297A1] transition-all duration-1000 delay-300 sm:text-lg sm:leading-8 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        }`}
                    >
                        {achievementsData.description}
                    </p>

                    <div
                        className={`mt-6 h-px bg-[#30343B] transition-all duration-1000 delay-500 ${
                            isVisible ? "w-32" : "w-0"
                        }`}
                    />
                </div>
                

                <div
                    className={`mb-10 flex flex-col gap-5 transition-all duration-1000 sm:mb-12 lg:flex-row lg:items-center lg:justify-between ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                    style={{
                        transitionDelay: "500ms",
                    }}
                >

                    <div className="flex flex-wrap gap-2">
                        {achievementsData.categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`cursor-pointer border px-4 py-2 font-mono text-xs transition-all duration-300 ${
                                    activeCategory === category
                                        ? "border-[#B96CFF] bg-[#B96CFF] text-[#0D0F12]"
                                        : "border-[#30343B] bg-[#15181D] text-[#9297A1] hover:border-[#B96CFF]/60 hover:text-[#F5F5F5]"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>


                    <div className="relative w-full lg:w-72">
                        <FiSearch
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9297A1]"
                        />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                            placeholder="Search achievements..."
                            className="w-full border border-[#30343B] bg-[#15181D] py-2.5 pl-9 pr-10 font-mono text-xs text-[#F5F5F5] outline-none transition-all duration-300 placeholder:text-[#555B65] focus:border-[#B96CFF]"
                        />

                        {searchTerm && (
                            <button
                                type="button"
                                onClick={clearSearch}
                                aria-label="Clear search"
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-[#9297A1] transition-colors hover:text-[#B96CFF]"
                            >
                                <FiX size={15} />
                            </button>
                        )}
                    </div>
                </div>


                <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest text-[#9297A1]">
                        {filteredAchievements.length}{" "}
                        {filteredAchievements.length === 1
                            ? "ITEM"
                            : "ITEMS"}
                    </span>

                    <span className="font-mono text-[10px] tracking-widest text-[#30343B]">
                        {activeCategory.toUpperCase()}
                    </span>
                </div>


                {filteredAchievements.length > 0 ? (
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {filteredAchievements.map(
                            (achievement, index) => (
                                <article
                                    key={achievement.id}
                                    className={`group relative overflow-hidden border border-[#30343B] bg-[#15181D]/60 transition-all duration-700 hover:-translate-y-2 hover:border-[#B96CFF]/50 hover:bg-[#15181D] ${
                                        isVisible
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-12 opacity-0"
                                    }`}
                                >

                                    <div className="absolute left-0 top-0 z-20 h-px w-0 bg-[#B96CFF] transition-all duration-700 group-hover:w-full" />
                                    <div className="absolute right-0 top-0 z-20 h-7 w-7 border-r border-t border-[#30343B] transition-colors duration-300 group-hover:border-[#B96CFF]/50" />


                                    <div className="relative h-48 overflow-hidden border-b border-[#30343B]">

                                        {achievement.image ? (
                                            <img
                                                src={achievement.image}
                                                alt={`${achievement.title} certificate or award`}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="relative flex h-full items-center justify-center overflow-hidden bg-[#15181D]">


                                                <div
                                                    className="absolute inset-0 opacity-25"
                                                    style={{
                                                        backgroundImage:
                                                            "linear-gradient(#30343B 1px, transparent 1px), linear-gradient(90deg, #30343B 1px, transparent 1px)",
                                                        backgroundSize:
                                                            "28px 28px",
                                                    }}
                                                />

                                                <div className="absolute h-32 w-32 rounded-full border border-[#B96CFF]/15 animate-[spin_15s_linear_infinite]" />
                                                <div className="absolute h-20 w-20 rotate-45 border border-[#2BB6B6]/15 animate-[spin_20s_linear_infinite_reverse]" />
                                                <div className="absolute left-6 top-6 h-1.5 w-1.5 rounded-full bg-[#B96CFF] shadow-[0_0_15px_#B96CFF] animate-pulse" />
                                                <div className="absolute bottom-6 right-6 h-1.5 w-1.5 rounded-full bg-[#2BB6B6] shadow-[0_0_15px_#2BB6B6] animate-pulse" />

                                                <div className="relative z-10 text-center">
                                                    <FiAward
                                                        size={34}
                                                        className="mx-auto text-[#B96CFF]/60"
                                                    />

                                                    <span className="mt-3 block font-mono text-[10px] tracking-[0.25em] text-[#9297A1]">
                                                        {achievement.type}
                                                    </span>
                                                </div>
                                            </div>
                                        )}


                                        <div className="absolute inset-0 bg-linear-to-t from-[#0D0F12] via-transparent to-transparent opacity-70" />


                                        <div className="absolute bottom-3 left-4 border border-[#30343B] bg-[#0D0F12]/80 px-2.5 py-1 font-mono text-[9px] tracking-widest text-[#B96CFF] backdrop-blur-md">
                                            {achievement.category.toUpperCase()}
                                        </div>


                                        <div className="absolute right-4 top-3 font-mono text-[10px] text-[#F5F5F5]">
                                            {achievement.year}
                                        </div>
                                    </div>


                                    <div className="p-5">

                                        <h3 className="font-mono text-lg font-semibold text-[#F5F5F5] transition-colors duration-300 group-hover:text-[#B96CFF]">
                                            {achievement.title}
                                        </h3>

                                        <p className="mt-2 font-mono text-xs text-[#2BB6B6]">
                                            {achievement.organization}
                                        </p>

                                        <p className="mt-4 text-sm leading-6 text-[#9297A1]">
                                            {achievement.description}
                                        </p>


                                        <div className="mt-5 flex items-center justify-between border-t border-[#30343B] pt-4">

                                            <div className="flex items-center gap-2">
                                                <span className="h-1 w-1 rounded-full bg-[#2BB6B6] transition-all duration-300 group-hover:w-6" />

                                                <span className="font-mono text-[9px] tracking-widest text-[#555B65]">
                                                    {achievement.type}
                                                </span>
                                            </div>

                                            {achievement.credential && (
                                                <a
                                                    href={
                                                        achievement.credential
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#9297A1] transition-colors hover:text-[#B96CFF]"
                                                >
                                                    Verify
                                                    <FiExternalLink
                                                        size={12}
                                                    />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            )
                        )}
                    </div>
                ) : (
                    
                    <div className="border border-dashed border-[#30343B] bg-[#15181D]/40 px-6 py-16 text-center">
                        <FiSearch
                            size={28}
                            className="mx-auto text-[#30343B]"
                        />

                        <h3 className="mt-4 font-mono text-sm text-[#F5F5F5]">
                            No achievements found
                        </h3>

                        <p className="mt-2 text-sm text-[#9297A1]">
                            Try another category or search term.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setActiveCategory("All");
                                setSearchTerm("");
                            }}
                            className="mt-5 cursor-pointer font-mono text-xs text-[#B96CFF] transition-colors hover:text-[#2BB6B6]"
                        >
                            Reset filters
                        </button>
                    </div>
                )}

                {/* Bottom Indicator */}

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
                        05
                    </span>

                    <div className="h-px flex-1 bg-[#30343B]" />

                    <span className="font-mono text-[10px] tracking-widest text-[#9297A1]">
                        GROW · LEARN · CONTRIBUTE
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Achievements;