
const InterActivTech = () => {
  return (
            <section
                className="relative py-24 sm:py-32 max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8"
                id="radar"
            >
                <div
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-12 border-b border-white/10"
                >
                    <div>
                        <div
                            className="flex items-center gap-3 font-label-mono-sm text-xs mb-2"
                        >
                            <span className="text-[#8B5CF6] font-bold"
                                >04 // TECH RADAR</span>
                            <span className="text-outline"
                                >COLLECTION: STRAPI_SKILLS_MATRIX</span>
                        </div>
                        <h2
                            className="font-display-hero text-4xl sm:text-5xl font-black uppercase text-white tracking-tight"
                        >
                            Telemetry &amp; Capabilities
                        </h2>
                    </div>
                    <div
                        className="font-label-mono-sm text-xs text-[#FF5500] font-semibold tracking-wider"
                    >
                        SYS_AUDIT: PASS 100% // PRODUCTION VERIFIED
                    </div>
                </div>
                {/* <!-- 4-Column High-Tech Grid with animated progress bars --> */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {/* <!-- Pillar 01: Creative & 3D --> */}
                    <div
                        className="p-6 rounded-2xl bg-[#10121A]/80 border border-white/10 hover:border-[#FF5500]/40 transition-all backdrop-blur-md flex flex-col gap-6 group"
                    >
                        <div className="flex items-center justify-between">
                            <span
                                className="font-label-mono-lg text-sm font-bold text-white uppercase tracking-wider"
                                >01 // CREATIVE &amp; 3D</span>
                            
                            <span
                                className="material-symbols-outlined text-[#FF5500] text-[20px]"
                                >view_in_ar</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >Three.js / WebGL</span>
                                    <span className="text-[#FF5500] font-bold"
                                        >98%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#FF5500] rounded-full shadow-[0_0_8px_#FF5500]"
                                        style={{ width: '98%' }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >Custom GLSL Shaders</span>
                                    <span className="text-[#FF5500] font-bold"
                                        >95%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#FF5500] rounded-full shadow-[0_0_8px_#FF5500]"
                                        style={{ width: '95%' }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >WebGPU &amp; WGSL</span>
                                    <span className="text-[#FF5500] font-bold"
                                        >88%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#FF5500] rounded-full shadow-[0_0_8px_#FF5500]"
                                        style={{ width: '88%' }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <span
                            className="font-label-mono-sm text-[11px] text-outline pt-2 border-t border-white/5"
                            >KERNEL: SHADER_COMPUTE_V2</span>
                    </div>
                   {/*  <!-- Pillar 02: Frontend Core --> */}
                    <div
                        className="p-6 rounded-2xl bg-[#10121A]/80 border border-white/10 hover:border-[#8B5CF6]/40 transition-all backdrop-blur-md flex flex-col gap-6 group"
                    >
                        <div className="flex items-center justify-between">
                            <span
                                className="font-label-mono-lg text-sm font-bold text-white uppercase tracking-wider"
                                >02 // FRONTEND CORE</span>
                            <span
                                className="material-symbols-outlined text-[#8B5CF6] text-[20px]"
                                >code</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >Next.js App Router</span>
                                    <span className="text-[#8B5CF6] font-bold"
                                        >99%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#8B5CF6] rounded-full shadow-[0_0_8px_#8B5CF6]"
                                        style={{ width: "99%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >TypeScript 5.x Strict</span>
                                    <span className="text-[#8B5CF6] font-bold"
                                        >98%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#8B5CF6] rounded-full shadow-[0_0_8px_#8B5CF6]"
                                        style={{ width: "98%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >Tailwind CSS &amp; Tokens</span>
                                    <span className="text-[#8B5CF6] font-bold"
                                        >96%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#8B5CF6] rounded-full shadow-[0_0_8px_#8B5CF6]"
                                        style={{ width: "96%" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <span
                            className="font-label-mono-sm text-[11px] text-outline pt-2 border-t border-white/5"
                            >REACT_COMPILER: PASS</span>
                    </div>
                   {/*  <!-- Pillar 03: CMS & Backend --> */}
                    <div
                        className="p-6 rounded-2xl bg-[#10121A]/80 border border-white/10 hover:border-[#FF5500]/40 transition-all backdrop-blur-md flex flex-col gap-6 group"
                    >
                        <div className="flex items-center justify-between">
                            <span
                                className="font-label-mono-lg text-sm font-bold text-white uppercase tracking-wider"
                                >03 // CMS &amp; SYSTEMS</span>
                            <span
                                className="material-symbols-outlined text-[#FF5500] text-[20px]"
                                >hub</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >Strapi v5 Plugins</span>
                                    <span className="text-[#FF5500] font-bold"
                                        >97%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#FF5500] rounded-full shadow-[0_0_8px_#FF5500]"
                                        style={{ width: "97%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >GraphQL &amp; REST Engine</span>
                                    <span className="text-[#FF5500] font-bold"
                                        >94%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#FF5500] rounded-full shadow-[0_0_8px_#FF5500]"
                                        style={{ width: "94%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >Node / Bun Microservices</span>
                                    <span className="text-[#FF5500] font-bold"
                                        >92%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#FF5500] rounded-full shadow-[0_0_8px_#FF5500]"
                                        style={{ width: "92%" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <span
                            className="font-label-mono-sm text-[11px] text-outline pt-2 border-t border-white/5"
                            >STRAPI_API: HEADLESS_REACTIVE</span>
                    </div>
                   {/*  <!-- Pillar 04: DevOps & Performance --> */}
                    <div
                        className="p-6 rounded-2xl bg-[#10121A]/80 border border-white/10 hover:border-[#8B5CF6]/40 transition-all backdrop-blur-md flex flex-col gap-6 group"
                    >
                        <div className="flex items-center justify-between">
                            <span
                                className="font-label-mono-lg text-sm font-bold text-white uppercase tracking-wider"
                                >04 // DEVOPS &amp; PERF</span>
                            <span
                                className="material-symbols-outlined text-[#8B5CF6] text-[20px]"
                                >tune</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >Cloudflare Edge Workers</span>
                                    <span className="text-[#8B5CF6] font-bold"
                                        >95%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#8B5CF6] rounded-full shadow-[0_0_8px_#8B5CF6]"
                                        style={{ width: "95%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >Docker &amp; CI/CD</span>
                                    <span className="text-[#8B5CF6] font-bold"
                                        >92%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#8B5CF6] rounded-full shadow-[0_0_8px_#8B5CF6]"
                                        style={{ width: "92%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <div
                                    className="flex justify-between font-label-mono-sm text-xs"
                                >
                                    <span className="text-white/80"
                                        >Web Audio API</span>
                                    <span className="text-[#8B5CF6] font-bold"
                                        >90%</span>
                                </div>
                                <div
                                    className="h-1.5 w-full bg-[#181A24] rounded-full overflow-hidden border border-white/5"
                                >
                                    <div
                                        className="h-full bg-[#8B5CF6] rounded-full shadow-[0_0_8px_#8B5CF6]"
                                        style={{ width: "90%" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <span
                            className="font-label-mono-sm text-[11px] text-outline pt-2 border-t border-white/5"
                            >SUB_50MS_TTFB_CONFIRMED</span>
                    </div>
                </div>
            </section>
  )
}

export default InterActivTech
