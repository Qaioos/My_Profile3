import DownloadCVButton from "./BtnDownload";
import TelemetryCard from "./Card";

const Hero = () => {
    return (
        <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 pb-16">
            {/* <!-- Top Hero Telemetry Status Tags --> */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181A24]/90 border border-white/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#FF5500] shadow-[0_0_8px_#FF5500]"></span>
                    <span className="font-label-mono-sm text-xs text-white uppercase tracking-wider">
                        STRAPI v5.4 KERNEL // SYNCED
                    </span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181A24]/90 border border-[#8B5CF6]/30 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]"></span>
                    <span className="font-label-mono-sm text-xs text-[#A855F7] uppercase tracking-wider">
                        WEBGL SHADER PIPELINE: ONLINE
                    </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181A24]/90 border border-white/10 text-outline backdrop-blur-md font-label-mono-sm text-xs">
                    <span className="material-symbols-outlined text-[14px] text-[#FF5500]">
                        terminal
                    </span>
                    <span>COMPUTE_SHADERS: ENABLED (WGSL / GLSL)</span>
                </div>
            </div>
            {/* <!-- Center Hero Grid: Giant Typography & Floating Code/Telemetry HUD --> */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto">
                {/*  <!-- Left: Monumental Typography & Vision --> */}
                <div className="lg:col-span-8 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-label-mono-sm text-xs tracking-[0.25em] text-[#FF5500] uppercase font-semibold">
                            [ ARCHITECTURAL MANIFESTO 01 ]
                        </span>
                        <span className="h-[1px] w-12 bg-white/20"></span>
                        <span className="font-label-mono-sm text-xs tracking-widest text-[#8B5CF6] uppercase">
                            SYSTEMS &amp; SPATIAL ART
                        </span>
                    </div>
                    <h1 className="font-display-hero text-5xl sm:text-7xl lg:text-[96px] font-black uppercase tracking-tight leading-[0.92] select-none text-white">
                        CREATIVE
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5500] via-[#FF6B1A] to-[#8B5CF6] drop-shadow-[0_0_35px_rgba(255,85,0,0.35)]">
                            DEVELOPER
                        </span>
                        <br />
                        <span className="text-white/95">
                            &amp; COMPUTATIONAL
                        </span>
                        <br />
                        <span className="text-white/40 hover:text-white transition-colors duration-500">
                            ARCHITECT.
                        </span>
                    </h1>
                    <p className="font-body-lg text-lg sm:text-xl text-[#9EA3B0] max-w-2xl mt-8 leading-relaxed">
                        Engineering ultra-high-frequency digital experiences,
                        real-time procedural simulations, and headless
                        micro-architectures via Strapi v5, Next.js 15, and WebGL
                        compute for forward-thinking institutions.
                    </p>
                    {/*  <!-- Magnetic Action Buttons --> */}
                    <div className="flex flex-wrap items-center gap-4 mt-10">
                        <a
                            className="group relative px-8 py-4 rounded-full bg-[#FF5500] text-white font-label-mono-lg font-bold text-sm tracking-wider uppercase flex items-center gap-3 shadow-[0_0_30px_rgba(255,85,0,0.4)] hover:shadow-[0_0_50px_rgba(255,85,0,0.7)] hover:bg-[#FF6B1A] hover:scale-105 active:scale-95 transition-all duration-300"
                            href="#projects"
                        >
                            <span>EXPLORE SELECTED WORKS</span>
                            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform duration-300">
                                arrow_forward
                            </span>
                        </a>
                        <DownloadCVButton />
                    </div>
                </div>

                {/* <!-- Right: Floating Telemetry & Interactive Strapi GraphQL Query HUD --> */}
                <TelemetryCard />
            </div>
            {/* <!-- Quick Metrics Ribbon --> */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 border-t border-white/10 mt-12">
                <div className="p-5 rounded-xl bg-[#10121A]/70 border border-white/5 backdrop-blur-md flex flex-col gap-1">
                    <div className="flex items-center justify-between text-outline font-label-mono-sm text-xs uppercase">
                        <span>EXP // TRACK RECORD</span>
                        <span className="material-symbols-outlined text-[#FF5500] text-[18px]">
                            terminal
                        </span>
                    </div>
                    <div className="font-display-hero text-4xl font-extrabold text-white">
                        8+
                        <span className="text-sm font-label-mono-sm font-normal text-outline">
                            YEARS
                        </span>
                    </div>
                    <div className="text-xs text-[#9EA3B0] font-body-sm">
                        Sculpting bespoke WebGL shaders, Next.js kernels, and
                        generative interactions.
                    </div>
                </div>
                <div className="p-5 rounded-xl bg-[#10121A]/70 border border-white/5 backdrop-blur-md flex flex-col gap-1">
                    <div className="flex items-center justify-between text-outline font-label-mono-sm text-xs uppercase">
                        <span>HONORS // ACCREDITATIONS</span>
                        <span className="material-symbols-outlined text-[#8B5CF6] text-[18px]">
                            workspace_premium
                        </span>
                    </div>
                    <div className="font-display-hero text-4xl font-extrabold text-[#8B5CF6]">
                        14x
                        <span className="text-sm font-label-mono-sm font-normal text-outline">
                            AWARDS
                        </span>
                    </div>
                    <div className="text-xs text-[#9EA3B0] font-body-sm">
                        Awwwards SOTD, FWA of the Month, and CSSDA Special Kudos
                        honors.
                    </div>
                </div>
                <div className="p-5 rounded-xl bg-[#10121A]/70 border border-white/5 backdrop-blur-md flex flex-col gap-1">
                    <div className="flex items-center justify-between text-outline font-label-mono-sm text-xs uppercase">
                        <span>METRICS // LIGHTHOUSE AUDIT</span>
                        <span className="material-symbols-outlined text-[#FF5500] text-[18px]">
                            speed
                        </span>
                    </div>
                    <div className="font-display-hero text-4xl font-extrabold text-[#FF5500]">
                        100%
                        <span className="text-sm font-label-mono-sm font-normal text-outline">
                            INDEX
                        </span>
                    </div>
                    <div className="text-xs text-[#9EA3B0] font-body-sm">
                        Sub-50ms TTFB globally cached via Cloudflare and Strapi
                        ISR Webhooks.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
