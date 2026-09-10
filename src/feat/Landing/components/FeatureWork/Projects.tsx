export const img =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBCGWR4YLYGQa-s5cI_uSRKzADQVi3sEbPsuHasHqO4hChj03Y0G48XCNYo6QP1dRzIZayHlf-uAgXeHWNTe8tsCkZp2MFakbJ-V3M-kwQTAaPlmmJkJvU-V4HB1ljCdjpwjeNwkPAICUDiBg8EXy3vK2-MQDdIiXinOuKSh57ya60667wVCIQhCkJ0-dZUcZfFDwNPNyimRQDDzCbCqG-Ds2l3J5822Iy-d9TAqmWpdZRDGhI7DxVO2g";
const Projects = () => {
    return (
        <section
            className="relative py-24 sm:py-32 bg-[#10121A] border-y border-white/10"
            id="projects"
        >
            <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
                {/*   <!-- Header & Category Filters --> */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
                    <div>
                        <div className="flex items-center gap-3 mb-2 font-label-mono-sm text-xs">
                            <span className="text-[#FF5500] font-bold">
                                03 // SELECTED WORKS
                            </span>
                            <span className="text-outline">
                                DYNAMIC STRAPI REVALIDATION
                            </span>
                        </div>
                        <h2 className="font-display-hero text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
                            Flagship Artifacts
                        </h2>
                    </div>
                    {/*  <!-- Filter Pills --> */}
                    <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#181A24] border border-white/10">
                        <button className="px-4 py-2 rounded-lg bg-[#FF5500] text-white font-label-mono-sm text-xs font-bold uppercase transition-all">
                            ALL (06)
                        </button>
                        <button className="px-4 py-2 rounded-lg text-white/70 hover:text-white font-label-mono-sm text-xs uppercase transition-colors">
                            WEBGL &amp; 3D (03)
                        </button>
                        <button className="px-4 py-2 rounded-lg text-white/70 hover:text-white font-label-mono-sm text-xs uppercase transition-colors">
                            FINTECH &amp; SAAS (02)
                        </button>
                        <button className="px-4 py-2 rounded-lg text-white/70 hover:text-white font-label-mono-sm text-xs uppercase transition-colors">
                            SYSTEM LABS (01)
                        </button>
                    </div>
                </div>
                {/*  <!-- Asymmetrical Project Showcase Cards --> */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* <!-- PROJECT 01: Flagship Featured (Large Spanning 7 Cols) --> */}
                    <div className="lg:col-span-6 flex flex-col gap-8">
                        {/* <!-- Project 02: Chrono Protocol --> */}
                        <article className="rounded-2xl bg-[#10121A] border border-white/10 hover:border-[#8B5CF6]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] group flex-1">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between text-outline font-label-mono-sm text-xs">
                                    <span>INDEX: 02 // 03</span>
                                    <span className="px-2 py-0.5 rounded bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/30 font-semibold">
                                        YEAR: 2024
                                    </span>
                                </div>
                                <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-[#090A0F] border border-white/10">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
                                        style={{
                                            backgroundImage: `url(${img})`,
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent"></div>
                                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#090A0F]/80 border border-[#8B5CF6]/30 font-label-mono-sm text-[10px] text-[#8B5CF6]">
                                        Rust Engine • WebSockets
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-display-hero text-xl font-bold uppercase text-white group-hover:text-[#8B5CF6] transition-colors">
                                        Chrono Protocol — Institutional
                                        Liquidity
                                    </h3>
                                    <p className="font-body-sm text-xs text-[#9EA3B0] leading-relaxed">
                                        DeFi liquidity visualization platform
                                        orchestrating real-time cryptographic
                                        order book streams with sub-millisecond
                                        graph renderers.
                                    </p>
                                </div>
                                  <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-white/70">
                                        Next.js 15
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-white/70">
                                        Three.js
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-[#FF5500]">
                                        Strapi v5 Live Preview
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-[#8B5CF6]">
                                        GLSL Shaders
                                    </span>
                                </div>
                                <h3 className="font-display-hero text-2xl sm:text-3xl font-bold uppercase text-white group-hover:text-[#FF5500] transition-colors">
                                    Aether OS — Spatial Desktop &amp; Compute
                                    Canvas
                                </h3>
                                <p className="font-body-md text-sm sm:text-base text-[#9EA3B0] leading-relaxed">
                                    Next-generation spatial operating canvas
                                    featuring real-time WebGL compute particles,
                                    zero-latency Strapi live preview pipelines,
                                    and custom physics simulation engines for
                                    collaborative 3D studios.
                                </p>
                            </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-xs font-label-mono-sm">
                                <a
                                    className="text-[#8B5CF6] hover:underline uppercase flex items-center gap-1 font-semibold"
                                    href="#contact"
                                >
                                    <span>LIVE REEL</span>
                                    <span className="material-symbols-outlined text-[14px]">
                                        arrow_outward
                                    </span>
                                </a>
                                <span className="text-outline uppercase">
                                    [ SPEC #741 ]
                                </span>
                            </div>
                        </article>
                        {/* <!-- Project 03: Solaris Multi-Agent Labs --> */}
                        <article className="rounded-2xl bg-[#10121A] border border-white/10 hover:border-[#FF5500]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,85,0,0.15)] group flex-1">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between text-outline font-label-mono-sm text-xs">
                                    <span>INDEX: 03 // 03</span>
                                    <span className="px-2 py-0.5 rounded bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/30 font-semibold">
                                        YEAR: 2025
                                    </span>
                                </div>
                                <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-[#090A0F] border border-white/10">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
                                        style={{
                                            backgroundImage: `url(${img})`,
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent"></div>
                                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#090A0F]/80 border border-[#FF5500]/30 font-label-mono-sm text-[10px] text-[#FF5500]">
                                        Canvas ISR • Strapi GraphQL
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-display-hero text-xl font-bold uppercase text-white group-hover:text-[#FF5500] transition-colors">
                                        Solaris Labs — Autonomous Neural Canvas
                                    </h3>
                                    <p className="font-body-sm text-xs text-[#9EA3B0] leading-relaxed">
                                        AI agent design system workstation with
                                        procedural multi-modal interaction
                                        models and Strapi dynamic schema sync.
                                    </p>
                                </div>
                                  <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-white/70">
                                        Next.js 15
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-white/70">
                                        Three.js
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-[#FF5500]">
                                        Strapi v5 Live Preview
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-[#8B5CF6]">
                                        GLSL Shaders
                                    </span>
                                </div>
                                <h3 className="font-display-hero text-2xl sm:text-3xl font-bold uppercase text-white group-hover:text-[#FF5500] transition-colors">
                                    Aether OS — Spatial Desktop &amp; Compute
                                    Canvas
                                </h3>
                                <p className="font-body-md text-sm sm:text-base text-[#9EA3B0] leading-relaxed">
                                    Next-generation spatial operating canvas
                                    featuring real-time WebGL compute particles,
                                    zero-latency Strapi live preview pipelines,
                                    and custom physics simulation engines for
                                    collaborative 3D studios.
                                </p>
                            </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-xs font-label-mono-sm">
                                <a
                                    className="text-[#FF5500] hover:underline uppercase flex items-center gap-1 font-semibold"
                                    href="#contact"
                                >
                                    <span>LIVE REEL</span>
                                    <span className="material-symbols-outlined text-[14px]">
                                        arrow_outward
                                    </span>
                                </a>
                                <span className="text-outline uppercase">
                                    [ SPEC #992 ]
                                </span>
                            </div>
                        </article>
                    </div>
                    {/*  <!-- PROJECT 02 & 03: Stacked 5 Cols Column --> */}
                    <div className="lg:col-span-6 flex flex-col gap-8">
                        {/* <!-- Project 02: Chrono Protocol --> */}
                        <article className="rounded-2xl bg-[#10121A] border border-white/10 hover:border-[#8B5CF6]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] group flex-1">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between text-outline font-label-mono-sm text-xs">
                                    <span>INDEX: 02 // 03</span>
                                    <span className="px-2 py-0.5 rounded bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/30 font-semibold">
                                        YEAR: 2024
                                    </span>
                                </div>
                                <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-[#090A0F] border border-white/10">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
                                        style={{
                                            backgroundImage: `url(${img})`,
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent"></div>
                                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#090A0F]/80 border border-[#8B5CF6]/30 font-label-mono-sm text-[10px] text-[#8B5CF6]">
                                        Rust Engine • WebSockets
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-display-hero text-xl font-bold uppercase text-white group-hover:text-[#8B5CF6] transition-colors">
                                        Chrono Protocol — Institutional
                                        Liquidity
                                    </h3>
                                    <p className="font-body-sm text-xs text-[#9EA3B0] leading-relaxed">
                                        DeFi liquidity visualization platform
                                        orchestrating real-time cryptographic
                                        order book streams with sub-millisecond
                                        graph renderers.
                                    </p>
                                </div>
                                  <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-white/70">
                                        Next.js 15
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-white/70">
                                        Three.js
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-[#FF5500]">
                                        Strapi v5 Live Preview
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-[#8B5CF6]">
                                        GLSL Shaders
                                    </span>
                                </div>
                                <h3 className="font-display-hero text-2xl sm:text-3xl font-bold uppercase text-white group-hover:text-[#FF5500] transition-colors">
                                    Aether OS — Spatial Desktop &amp; Compute
                                    Canvas
                                </h3>
                                <p className="font-body-md text-sm sm:text-base text-[#9EA3B0] leading-relaxed">
                                    Next-generation spatial operating canvas
                                    featuring real-time WebGL compute particles,
                                    zero-latency Strapi live preview pipelines,
                                    and custom physics simulation engines for
                                    collaborative 3D studios.
                                </p>
                            </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-xs font-label-mono-sm">
                                <a
                                    className="text-[#8B5CF6] hover:underline uppercase flex items-center gap-1 font-semibold"
                                    href="#contact"
                                >
                                    <span>LIVE REEL</span>
                                    <span className="material-symbols-outlined text-[14px]">
                                        arrow_outward
                                    </span>
                                </a>
                                <span className="text-outline uppercase">
                                    [ SPEC #741 ]
                                </span>
                            </div>
                        </article>
                        {/* <!-- Project 03: Solaris Multi-Agent Labs --> */}
                        <article className="rounded-2xl bg-[#10121A] border border-white/10 hover:border-[#FF5500]/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,85,0,0.15)] group flex-1">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between text-outline font-label-mono-sm text-xs">
                                    <span>INDEX: 03 // 03</span>
                                    <span className="px-2 py-0.5 rounded bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/30 font-semibold">
                                        YEAR: 2025
                                    </span>
                                </div>
                                <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-[#090A0F] border border-white/10">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
                                        style={{
                                            backgroundImage: `url(${img})`,
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent"></div>
                                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#090A0F]/80 border border-[#FF5500]/30 font-label-mono-sm text-[10px] text-[#FF5500]">
                                        Canvas ISR • Strapi GraphQL
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-display-hero text-xl font-bold uppercase text-white group-hover:text-[#FF5500] transition-colors">
                                        Solaris Labs — Autonomous Neural Canvas
                                    </h3>
                                    <p className="font-body-sm text-xs text-[#9EA3B0] leading-relaxed">
                                        AI agent design system workstation with
                                        procedural multi-modal interaction
                                        models and Strapi dynamic schema sync.
                                    </p>
                                </div>
                                  <div className="flex flex-col gap-3">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-white/70">
                                        Next.js 15
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-white/70">
                                        Three.js
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-[#FF5500]">
                                        Strapi v5 Live Preview
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-[#181A24] border border-white/5 font-label-mono-sm text-xs text-[#8B5CF6]">
                                        GLSL Shaders
                                    </span>
                                </div>
                                <h3 className="font-display-hero text-2xl sm:text-3xl font-bold uppercase text-white group-hover:text-[#FF5500] transition-colors">
                                    Aether OS — Spatial Desktop &amp; Compute
                                    Canvas
                                </h3>
                                <p className="font-body-md text-sm sm:text-base text-[#9EA3B0] leading-relaxed">
                                    Next-generation spatial operating canvas
                                    featuring real-time WebGL compute particles,
                                    zero-latency Strapi live preview pipelines,
                                    and custom physics simulation engines for
                                    collaborative 3D studios.
                                </p>
                            </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 mt-4 border-t border-white/10 text-xs font-label-mono-sm">
                                <a
                                    className="text-[#FF5500] hover:underline uppercase flex items-center gap-1 font-semibold"
                                    href="#contact"
                                >
                                    <span>LIVE REEL</span>
                                    <span className="material-symbols-outlined text-[14px]">
                                        arrow_outward
                                    </span>
                                </a>
                                <span className="text-outline uppercase">
                                    [ SPEC #992 ]
                                </span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
