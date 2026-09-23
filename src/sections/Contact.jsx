import React, { useState } from "react";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

import contactData from "../data/contactData.js";
import useScrollReveal from "../hooks/useScrollReveal.js";

function Contact() {
    const [sectionRef, isVisible] = useScrollReveal();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrorMessage("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSending(true);
        setIsSent(false);
        setErrorMessage("");

        const portfolioUrl = window.location.href;

        const submissionData = {
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,

            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `New Portfolio Message from ${formData.name}`,
            portfolio_url: portfolioUrl,
            botcheck: "",

        };

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(submissionData),
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                setIsSent(true);

                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });

                setTimeout(() => {
                    setIsSent(false);
                }, 5000);
            } else {
                console.error("Web3Forms error:", result);

                setErrorMessage(
                    result.message ||
                        "Unable to send your message. Please try again."
                );
            }
        } catch (error) {
            console.error("Contact form error:", error);

            setErrorMessage(
                "Something went wrong. Please check your connection and try again."
            );
        } finally {
            setIsSending(false);
        }
    };

    const getSocialIcon = (name) => {
        if (name === "GitHub") {
            return <FiGithub size={18} />;
        }

        if (name === "LinkedIn") {
            return <FiLinkedin size={18} />;
        }

        return <FiArrowUpRight size={18} />;
    };

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="relative min-h-screen overflow-hidden bg-[#0D0F12] py-24 sm:py-28 lg:py-32"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(#B96CFF 1px, transparent 1px), linear-gradient(90deg, #B96CFF 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full border border-[#B96CFF]/10 animate-[spin_30s_linear_infinite]" />
            <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full border border-dashed border-[#2BB6B6]/10 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full border border-[#2BB6B6]/10 animate-[spin_25s_linear_infinite]" />
            <div className="pointer-events-none absolute left-[7%] top-1/4 h-2 w-2 rounded-full bg-[#B96CFF] shadow-[0_0_20px_#B96CFF] animate-pulse" />
            <div className="pointer-events-none absolute right-[12%] top-1/3 h-2 w-2 rounded-full bg-[#2BB6B6] shadow-[0_0_20px_#2BB6B6] animate-pulse" />
            <div className="pointer-events-none absolute bottom-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-[#B96CFF] shadow-[0_0_15px_#B96CFF] animate-pulse" />
            <div className="pointer-events-none absolute bottom-20 right-1/3 h-1.5 w-1.5 rounded-full bg-[#2BB6B6] shadow-[0_0_15px_#2BB6B6] animate-pulse" />

            <div className="pointer-events-none absolute left-12 top-32 hidden h-7 w-7 rotate-12 lg:block">
                <span className="absolute left-1/2 top-0 h-full w-px bg-[#B96CFF]/30" />
                <span className="absolute left-0 top-1/2 h-px w-full bg-[#B96CFF]/30" />
            </div>

            <div className="pointer-events-none absolute bottom-32 right-20 hidden h-8 w-8 rotate-45 border border-[#2BB6B6]/20 lg:block" />
            
            
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
                            {contactData.eyebrow}
                        </span>
                    </div>

                    <h2 className="font-mono text-4xl font-semibold leading-tight tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
                        {contactData.heading.firstLine}{" "}
                        <span className="text-[#B96CFF]">
                            {contactData.heading.highlighted}
                        </span>{" "}
                        {contactData.heading.lastLine}
                    </h2>

                    <p
                        className={`mt-6 max-w-2xl text-base leading-7 text-[#9297A1] transition-all duration-1000 delay-300 sm:text-lg sm:leading-8 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                        }`}
                    >
                        {contactData.description}
                    </p>

                    <div
                        className={`mt-6 h-px bg-[#30343B] transition-all duration-1000 delay-500 ${
                            isVisible ? "w-32" : "w-0"
                        }`}
                    />
                </div>



                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">


                    <div
                        className={`relative transition-all duration-1000 ${
                            isVisible
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-12 opacity-0"
                        }`}
                        style={{ transitionDelay: "500ms" }}
                    >
                        <div className="relative overflow-hidden border border-[#30343B] bg-[#15181D]/60 p-6 sm:p-8">

                            <div className="flex items-center justify-between border-b border-[#30343B] pb-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-[#B96CFF]" />
                                    <span className="h-2 w-2 rounded-full bg-[#2BB6B6]" />
                                    <span className="h-2 w-2 rounded-full bg-[#30343B]" />
                                </div>

                                <span className="font-mono text-[9px] tracking-widest text-[#555B65]">
                                    CONTACT.EXE
                                </span>
                            </div>

                            <div className="mt-7">
                                <p className="font-mono text-xs text-[#2BB6B6]">
                                    $ ./connect
                                </p>

                                <h3 className="mt-5 font-mono text-2xl font-semibold leading-tight text-[#F5F5F5] sm:text-3xl">
                                    Have an idea?
                                    <br />
                                    <span className="text-[#B96CFF]">
                                        Let's talk.
                                    </span>
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#9297A1]">
                                    Whether you're looking for a developer, have an interesting project, or simply want to discuss technology, feel free to reach out.
                                </p>
                            </div>

                            <div className="mt-8 border border-[#30343B] bg-[#0D0F12] p-4">
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2BB6B6] opacity-60" />

                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2BB6B6]" />
                                    </span>

                                    <span className="font-mono text-[10px] tracking-widest text-[#2BB6B6]">
                                        {contactData.availability.status}
                                    </span>
                                </div>

                                <p className="mt-3 text-xs leading-5 text-[#9297A1]">
                                    {contactData.availability.description}
                                </p>
                            </div>

                            <div className="mt-7 flex items-center gap-2 font-mono text-xs text-[#9297A1]">
                                <span className="text-[#B96CFF]">
                                    {">"}
                                </span>

                                <span>waiting_for_message</span>

                                <span className="h-4 w-1.5 bg-[#B96CFF] animate-pulse" />
                            </div>
                        </div>


                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                            {contactData.socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between border border-[#30343B] bg-[#15181D]/40 px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B96CFF]/50 hover:bg-[#15181D]"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-[#9297A1] transition-colors duration-300 group-hover:text-[#B96CFF]">
                                            {getSocialIcon(social.name)}
                                        </span>

                                        <div>
                                            <p className="font-mono text-xs text-[#F5F5F5]">
                                                {social.name}
                                            </p>

                                            <p className="mt-0.5 font-mono text-[9px] text-[#555B65]">
                                                {social.handle}
                                            </p>
                                        </div>
                                    </div>

                                    <FiArrowUpRight
                                        size={15}
                                        className="text-[#555B65] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#B96CFF]"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>



                    <div
                        className={`relative transition-all duration-1000 ${
                            isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-12 opacity-0"
                        }`}
                        style={{ transitionDelay: "650ms" }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="relative overflow-hidden border border-[#30343B] bg-[#15181D]/60 p-6 sm:p-8 lg:p-10"
                        >

                            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full border border-[#B96CFF]/10" />
                            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full border border-[#2BB6B6]/10" />

                            <div className="relative">

                                <div className="flex items-center gap-2">
                                    <FiMail
                                        size={17}
                                        className="text-[#B96CFF]"
                                    />

                                    <span className="font-mono text-xs tracking-widest text-[#9297A1]">
                                        SEND A MESSAGE
                                    </span>
                                </div>

                                <h3 className="mt-3 font-mono text-2xl font-semibold text-[#F5F5F5]">
                                    Start a conversation.
                                </h3>
                            </div>

                            <div className="relative mt-8">
                                <label
                                    htmlFor="contact-name"
                                    className="mb-2 block font-mono text-xs text-[#9297A1]"
                                >
                                    {contactData.form.nameLabel}
                                </label>

                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={contactData.form.namePlaceholder}
                                    required
                                    className="w-full border border-[#30343B] bg-[#0D0F12] px-4 py-3 font-mono text-sm text-[#F5F5F5] outline-none transition-all duration-300 placeholder:text-[#555B65] focus:border-[#B96CFF] focus:shadow-[0_0_20px_rgba(185,108,255,0.06)]"
                                />

                                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#B96CFF] transition-all duration-500 focus-within:w-full" />
                            </div>

                            <div className="relative mt-5">
                                <label
                                    htmlFor="contact-email"
                                    className="mb-2 block font-mono text-xs text-[#9297A1]"
                                >
                                    {contactData.form.emailLabel}
                                </label>

                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={contactData.form.emailPlaceholder}
                                    required
                                    className="w-full border border-[#30343B] bg-[#0D0F12] px-4 py-3 font-mono text-sm text-[#F5F5F5] outline-none transition-all duration-300 placeholder:text-[#555B65] focus:border-[#B96CFF] focus:shadow-[0_0_20px_rgba(185,108,255,0.06)]"
                                />

                                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#B96CFF] transition-all duration-500 focus-within:w-full" />
                            </div>

                            <div className="relative mt-5">
                                <label
                                    htmlFor="contact-message"
                                    className="mb-2 block font-mono text-xs text-[#9297A1]"
                                >
                                    {contactData.form.messageLabel}
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder={contactData.form.messagePlaceholder}
                                    required
                                    rows={7}
                                    className="w-full resize-none border border-[#30343B] bg-[#0D0F12] px-4 py-3 font-mono text-sm text-[#F5F5F5] outline-none transition-all duration-300 placeholder:text-[#555B65] focus:border-[#B96CFF] focus:shadow-[0_0_20px_rgba(185,108,255,0.06)]"
                                />

                                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#B96CFF] transition-all duration-500 focus-within:w-full" />
                            </div>

                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                tabIndex="-1"
                                autoComplete="off"
                            />

                            {errorMessage && (
                                <div className="mt-4 border border-red-500/30 bg-red-500/5 px-4 py-3 font-mono text-xs leading-5 text-red-400">
                                    {errorMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSending}
                                className="group mt-6 flex w-full cursor-pointer items-center justify-center gap-3 bg-[#B96CFF] px-6 py-3.5 font-mono text-sm font-medium text-[#0D0F12] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c783ff] hover:shadow-[0_10px_30px_rgba(185,108,255,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSending ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0D0F12]/30 border-t-[#0D0F12]" />

                                        Sending...
                                    </>
                                ) : isSent ? (
                                    <>
                                        Message Sent

                                        <span>✓</span>
                                    </>
                                ) : (
                                    <>
                                        <FiSend
                                            size={15}
                                            className="transition-transform duration-300 group-hover:translate-x-1"
                                        />

                                        {contactData.form.buttonText}
                                    </>
                                )}
                            </button>

                            <div className="mt-4 flex items-center justify-between">
                                <span className="font-mono text-[9px] text-[#555B65]">
                                    RESPONSE_TIME ≈ 24H to weeks
                                </span>

                                <span className="font-mono text-[9px] text-[#30343B]">
                                    SECURE_CONNECTION
                                </span>
                            </div>
                        </form>
                    </div>
                </div>

                <div
                    className={`mt-16 flex items-center gap-4 transition-all duration-1000 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: "1200ms" }}
                >
                    <span className="font-mono text-[10px] text-[#9297A1]">
                        06
                    </span>

                    <div className="h-px flex-1 bg-[#30343B]" />

                    <span className="font-mono text-[10px] tracking-widest text-[#9297A1]">
                        CONNECT · COLLABORATE · CREATE
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Contact;