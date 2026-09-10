import myPhoto from "../../../../assets/Myphoto.jpg";
const AboutIdentity = () => {
    return (
        <section
            className="relative py-24 sm:py-32 max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8"
            id="manifesto"
        >
            <div className="flex items-center justify-between pb-8 mb-12 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <span className="font-label-mono-sm text-xs font-bold text-[#FF5500]">
                        02 // PROFILE &amp; METHODOLOGY
                    </span>
                    <span className="font-label-mono-sm text-xs text-outline">
                        STRAPI_AUTHOR_ENTRY_ID #892
                    </span>
                </div>
                <span className="font-label-mono-sm text-xs text-outline uppercase hidden sm:block">
                    [ ARCHITECTURAL MANIFESTO ]
                </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left: Futuristic Editorial Portrait with High-tech Brackets */}
                <div className="lg:col-span-5 relative">
                    <div className="relative w-full aspect-square max-w-[480px] mx-auto rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#10121A] group">
                        {/* <!-- Corner Crosshairs --> */}
                        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#8B5CF6] z-20"></div>
                        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#8B5CF6] z-20"></div>
                        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#FF5500] z-20"></div>
                        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#FF5500] z-20"></div>
                        <img
                            alt="Kairo Vance Portrait"
                            className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            src={myPhoto}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                        {/* <!-- Top HUD Tag --> */}
                        <div className="absolute top-5 inset-x-5 flex items-center justify-between z-10 pointer-events-none">
{/*                             <div className="px-2.5 py-1 rounded bg-[#090A0F]/80 border border-white/10 backdrop-blur-md font-label-mono-sm text-[10px] text-[#FF5500] font-bold">
                                NODE: KAIRO-01 // IDENTITY: VERIFIED
                            </div> */}
                            <div className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-ping"></div>
                        </div>
                        {/* <!-- Bottom Floating Profile Card --> */}
                        <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#10121A]/90 border border-white/15 backdrop-blur-xl flex items-center justify-between z-10">
                            <div>
                                <div className="font-display-hero text-lg font-bold text-white ">
                                    Qais Salha
                                </div>
                                <div className="font-label-mono-sm text-xs text-[#8B5CF6]">
                                    Designer Principal Systems 
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-[#FF5500] text-white flex items-center justify-center font-bold">
                                <span className="material-symbols-outlined text-[22px]">
                                    fingerprint
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Bottom Audio Reactor Tag --> */}
                    <div className="mt-4 flex items-center justify-between px-4 py-2 rounded-lg bg-[#10121A] border border-white/10 font-label-mono-sm text-xs text-outline max-w-[480px] mx-auto">
{/*                         <span className="flex items-center gap-2 text-white">
                            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
                            <span>AUDIO REACTOR: ENGAGED</span>
                        </span>
                        <span className="text-[#8B5CF6]">
                            48.0 kHz // 24-bit PCM
                        </span> */}
                    </div>
                </div>
                {/* <!-- Right: Narrative & Live Strapi Telemetry Matrix --> */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-[#8B5CF6] font-label-mono-sm text-xs uppercase tracking-widest">
                        <span>Philosophy &amp; Execution</span>
                        <span>—</span>
                        <span>Strapi Core v5</span>
                    </div>
                    <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-white leading-tight">
                        Integrating real-time computing pipelines with
                        mission-critical systems.
                    </h2>
                    <p className="font-body-lg text-base sm:text-lg text-[#9EA3B0] leading-relaxed">
                        It leverages Internet architecture and data structures
                        to support complex systems and software, ensuring full
                        compatibility with critical operational processes and
                        meeting essential functional requirements. By building
                        advanced software architectures based on Next.js 15 and
                        Strapi v5—and employing high-performance computing via
                        central and spatial processing engines—it delivers
                        flexible, low-latency, and infinitely scalable digital
                        systems, all while adhering to constraints regarding
                        limited resources.
                    </p>
                    {/* Spectral Telemetry Visualizer Card */}
                    <div className="p-6 rounded-2xl bg-[#10121A]/90 border border-white/10 backdrop-blur-md flex flex-col gap-4">
                        <div className="flex items-center justify-between font-label-mono-sm text-xs">
                            <div className="flex items-center gap-2 text-[#FF5500]">
                                <span className="material-symbols-outlined text-[16px]">
                                    graphic_eq
                                </span>
                             
                            </div>
                            <span className="text-outline">
                                AUDIO-SYNTH: ACTIVE
                            </span>
                        </div>
                        {/*  <!-- Simulated live animated bars in Orange and Violet --> */}
                        <div className="h-16 w-full flex items-end justify-between gap-1.5 px-1 py-1 bg-[#090A0F]/60 rounded-lg border border-white/5">
                            <div className="w-full bg-[#FF5500] rounded-t h-[40%] transition-all duration-300"></div>
                            <div className="w-full bg-[#FF5500] rounded-t h-[75%] transition-all duration-300"></div>
                            <div className="w-full bg-[#8B5CF6] rounded-t h-[55%] transition-all duration-300"></div>
                            <div className="w-full bg-[#8B5CF6] rounded-t h-[90%] transition-all duration-300"></div>
                            <div className="w-full bg-white rounded-t h-[65%] transition-all duration-300"></div>
                            <div className="w-full bg-[#FF5500] rounded-t h-[80%] transition-all duration-300"></div>
                            <div className="w-full bg-[#8B5CF6] rounded-t h-[45%] transition-all duration-300"></div>
                            <div className="w-full bg-[#FF5500] rounded-t h-[95%] transition-all duration-300"></div>
                            <div className="w-full bg-white rounded-t h-[60%] transition-all duration-300"></div>
                            <div className="w-full bg-[#8B5CF6] rounded-t h-[85%] transition-all duration-300"></div>
                            <div className="w-full bg-[#FF5500] rounded-t h-[35%] transition-all duration-300"></div>
                            <div className="w-full bg-[#8B5CF6] rounded-t h-[50%] transition-all duration-300"></div>
                        </div>
                        <blockquote className="font-label-mono-sm text-xs text-white/90 italic pl-3 border-l-2 border-[#FF5500]">
                            "True digital modernism isn't merely stripped down;
                            it is mathematically refined, hyper-reactive, and
                            emotionally resonant."
                        </blockquote>
                    </div>
                    {/*  <!-- Stack Snapshot Matrix --> */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                        <div className="p-3 rounded-lg bg-[#181A24] border border-white/5 flex flex-col">
                            <span className="font-label-mono-sm text-[10px] text-outline uppercase">
                                PRIMARY ENGINE
                            </span>
                            <span className="font-label-mono-sm text-xs font-bold text-white">
                                Three.js / WebGL
                            </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#181A24] border border-white/5 flex flex-col">
                            <span className="font-label-mono-sm text-[10px] text-outline uppercase">
                                HEADLESS CMS
                            </span>
                            <span className="font-label-mono-sm text-xs font-bold text-[#FF5500]">
                                Strapi v5 Core
                            </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#181A24] border border-white/5 flex flex-col">
                            <span className="font-label-mono-sm text-[10px] text-outline uppercase">
                                REACT RUNTIME
                            </span>
                            <span className="font-label-mono-sm text-xs font-bold text-white">
                                Next.js 15 App
                            </span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#181A24] border border-white/5 flex flex-col">
                            <span className="font-label-mono-sm text-[10px] text-outline uppercase">
                                HARDWARE ACCEL
                            </span>
                            <span className="font-label-mono-sm text-xs font-bold text-[#8B5CF6]">
                                WebGPU / WGSL
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIdentity;
