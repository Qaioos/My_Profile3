
const Expedition = () => {
  return (
            <section
                className="relative py-24 sm:py-32 bg-[#10121A] border-t border-white/10"
                id="journey"
            >
                <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-white/10"
                    >
                        <div>
                            <div
                                className="flex items-center gap-3 font-label-mono-sm text-xs mb-2"
                            >
                                <span className="text-[#FF5500] font-bold"
                                    >05 // EXPEDITION</span>
                                <span className="text-outline"
                                    >STRAPI_CAREER_MILESTONES</span>
                            </div>
                            <h2
                                className="font-display-hero text-4xl sm:text-5xl font-black uppercase text-white tracking-tight"
                            >
                                Chronology &amp; Leadership
                            </h2>
                        </div>
                        <span
                            className="font-label-mono-sm text-xs text-outline uppercase"
                            >[ SCROLL TELEMETRY ]</span>
                    </div>
                    {/* <!-- Timeline Track --> */}
                    <div
                        className="relative pl-6 sm:pl-10 border-l border-white/15 space-y-12"
                    >
                        {/* <!-- Node 1 --> */}
                        <div className="relative group">
                            <span
                                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#090A0F] border-2 border-[#FF5500] group-hover:scale-125 transition-transform"
                            ></span>
                            <div
                                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className="font-display-hero text-xl font-bold uppercase text-white group-hover:text-[#FF5500] transition-colors"
                                        >Principal Architecture Engineer</span>
                                    <span
                                        className="px-2 py-0.5 rounded bg-[#FF5500]/10 text-[#FF5500] font-label-mono-sm text-[10px] font-bold border border-[#FF5500]/30"
                                        >CURRENT</span>
                                </div>
                                <span
                                    className="font-label-mono-sm text-xs text-[#8B5CF6]"
                                    >2023 — PRESENT // TOKYO &amp; REMOTE</span>
                            </div>
                            <p
                                className="font-body-md text-sm text-[#9EA3B0] mt-2 max-w-3xl"
                            >
                                Leading headless architecture and creative GPU
                                pipelines for global clients. Pioneered the
                                Strapi v5 multi-tenant dynamic content
                                synchronization engine for high-frequency
                                interactive web installations.
                            </p>
                        </div>
                        {/* <!-- Node 2 --> */}
                        <div className="relative group">
                            <span
                                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#090A0F] border-2 border-[#8B5CF6] group-hover:scale-125 transition-transform"
                            ></span>
                            <div
                                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                            >
                                <div
                                    className="font-display-hero text-xl font-bold uppercase text-white group-hover:text-[#8B5CF6] transition-colors">
                                    Lead Creative Technologist
                                </div>
                                <span
                                    className="font-label-mono-sm text-xs text-outline"
                                    >2021 — 2023 // SAN FRANCISCO</span>
                            </div>
                            <p
                                className="font-body-md text-sm text-[#9EA3B0] mt-2 max-w-3xl"
                            >
                                Directed 3D graphics prototyping and Next.js
                                design systems for institutional fintech and
                                spatial hardware startups. Earned 8x Awwwards
                                Site of the Day and FWA recognitions.
                            </p>
                        </div>
                        {/* <!-- Node 3 --> */}
                        <div className="relative group">
                            <span
                                className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#090A0F] border-2 border-white/40 group-hover:scale-125 transition-transform"
                            ></span>
                            <div
                                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                            >
                                <div
                                    className="font-display-hero text-xl font-bold uppercase text-white group-hover:text-white/70 transition-colors">
                                    Senior Shader &amp; Full-Stack Specialist
                                </div>
                                <span
                                    className="font-label-mono-sm text-xs text-outline"
                                    >2018 — 2021 // BERLIN &amp; TOKYO</span>
                            </div>
                            <p
                                className="font-body-md text-sm text-[#9EA3B0] mt-2 max-w-3xl"
                            >
                                Constructed custom GLSL particle systems,
                                procedural terrain renderers, and headless API
                                orchestrations across Node.js microservices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Expedition
