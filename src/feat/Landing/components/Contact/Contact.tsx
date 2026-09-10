
const Contact = () => {
  return (
            <section
                    className="relative py-24 sm:py-32 max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8"
                id="contact"
            >
                <div
                    className="relative rounded-3xl bg-[#10121A] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden"
                >
                    {/* <!-- Glowing Orbs in Background -- */}
                    <div
                        className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF5500]/15 rounded-full blur-3xl pointer-events-none"
                    ></div>
                    <div
                        className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none"
                    ></div>
                    <div
                        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
                    >
                       {/*  <!-- Left: Big Prompt --> */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <div
                                className="flex items-center gap-3 font-label-mono-sm text-xs"
                            >
                                <span className="text-[#FF5500] font-bold"
                                    >06 // ENGAGEMENT PORTAL</span>
                                <span className="text-outline"
                                    >AVAILABILITY: OPEN FOR SELECTIVE Q3
                                    CONTRACTS</span>
                            </div>
                            <h2
                                className="font-display-hero text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white leading-[0.95] tracking-tight"
                            >
                                INITIATE<br />
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-white to-[#8B5CF6]"
                                    >COLLABORATION</span>
                            </h2>
                            <p
                                className="font-body-lg text-base sm:text-lg text-[#9EA3B0] max-w-xl leading-relaxed"
                            >
                                Accepting select advisory roles, technical
                                creative direction, and high-performance
                                WebGL/Strapi architecture contracts. Let’s
                                construct something extraordinary.
                            </p>
                            <div
                                className="flex flex-wrap items-center gap-4 text-xs font-label-mono-sm text-white/70 pt-2"
                            >
                                <div
                                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#181A24] border border-white/10"
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full bg-[#FF5500]"
                                    ></span>
                                    <span>TOKYO: 01:28 JST</span>
                                </div>
                                <div
                                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#181A24] border border-white/10"
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"
                                    ></span>
                                    <span>SAN FRANCISCO: 09:28 PST</span>
                                </div>
                            </div>
                        </div>
                        {/* Right: Interactive Command HUD & Direct Action */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            {/* Email Copy Box */}
                            <div
                                className="p-6 rounded-2xl bg-[#090A0F]/90 border border-white/10 backdrop-blur-xl flex flex-col gap-4 shadow-xl"
                            >
                                <div className="flex items-center justify-between">
                                    <span
                                        className="font-label-mono-sm text-xs text-outline uppercase tracking-wider"
                                        >DIRECT COMMUNICATION</span>
                                    <span
                                        className="font-label-mono-sm text-[10px] text-[#8B5CF6] uppercase"
                                        >PGP: 0x9B41...E82A</span>
                                </div>
                                <div
                                    className="flex items-center justify-between gap-4 bg-[#181A24] p-3 rounded-xl border border-white/5"
                                >
                                    <span
                                        className="font-label-mono-sm text-sm sm:text-base font-bold text-white tracking-wide select-all"
                                        id="target-email"
                                    >
                                        kairo@vance-labs.dev
                                    </span>
                                    <button
                                        className="px-3.5 py-1.5 rounded-lg bg-[#2E3244] hover:bg-[#FF5500] hover:text-white text-white font-label-mono-sm text-xs uppercase font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                                        id="copy-email-btn"
                                        type="button"
                                    >
                                        <span
                                            className="material-symbols-outlined text-[15px]"
                                            >content_copy</span>
                                        <span id="copy-text">COPY</span>
                                    </button>
                                </div>
                                <span
                                    className="font-label-mono-sm text-[11px] text-[#FF5500] h-4"
                                    id="copy-alert"
                                ></span>
                            </div>
                            {/* CTA Buttons */}
                            <div
                                className="flex flex-col sm:flex-row items-center gap-4"
                            >
                                <a
                                    className="w-full sm:w-auto flex-1 px-8 py-4 rounded-xl bg-[#FF5500] hover:bg-[#FF6B1A] text-white font-label-mono-sm font-bold text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,85,0,0.35)] transition-all"
                                    href="mailto:kairo@vance-labs.dev"
                                >
                                    <span>SEND PROJECT INQUIRY</span>
                                    <span
                                        className="material-symbols-outlined text-[16px]"
                                        >send</span>
                                </a>
                                <a
                                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#181A24] hover:bg-[#222533] text-white hover:text-[#8B5CF6] border border-white/10 hover:border-[#8B5CF6]/40 font-label-mono-sm text-xs font-semibold uppercase text-center flex items-center justify-center gap-2 transition-all"
                                    href="#"
                                >
                                    <span>BOOK 20M CAL</span>
                                    <span
                                        className="material-symbols-outlined text-[16px]"
                                        >calendar_today</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Telemetry Bottom Bar inside Card */}
                    <div
                        className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-label-mono-sm text-xs text-outline"
                    >
                        <div className="flex items-center gap-4">
                            <span
                                >PUBLIC PGP FINGERPRINT // 8F49 32B1 89EA
                                7120</span>
                            <span>ENCRYPTED CHANNELS READY</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#FF5500]">
                            <span
                                className="w-2 h-2 rounded-full bg-[#FF5500]"
                            ></span>
                            <span>STRAPI HEADLESS ENGINE v5.4 ACTIVATED</span>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Contact
