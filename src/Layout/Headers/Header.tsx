export const LOGO =
    "https://lh3.googleusercontent.com/aida/AEtjO1Ux4C5XSDNMUGBpw383QTezY0aWeodTQ69nHj1We0Yisszj_HskogOaEUs79fBy6yMJPAfLDAYv_LFirOYQ6Z51ZAUCQjtANDzBwQUflyE24hItsSO2TJ5QDZPZ6AR1GqxjW9FIY6Sd9cdBWduuxTc-lcnVgMw5C8tSytcbCYJYputd-9LyeYzJdAGDmABhXBXMA6J9OLef7tRN5T78CkTB4lopbVpAO_7ncU44yTNNqCUEHLTHKOH6QPU6";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import MobileMenu from "./MobileMenu";

const NAVS: string[] = ["manifesto", "projects", "radar", "journey", "contact"];

const Header = () => {
    const [isOpenArtical, setisOpenArtical] = useState<boolean>(false);

    return (
        <header className="relative max-w-[1440px] max-w-[90%] top-0 inset-x-0 z-400 backdrop-blur-xl bg-[#090A0F]/85 border-b border-white/10 shadow-2xl transition-all duration-300">
            <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
                {/* <!-- Brand & Identity --> */}
                <a className="flex items-center gap-3.5 group" href="#">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden p-0.5 bg-gradient-to-br from-[#FF5500] via-white/40 to-[#8B5CF6] group-hover:scale-105 transition-transform duration-300">
                        <img
                            alt="Kairo Architect Logo"
                            className="w-full h-full object-cover rounded-[6px] bg-[#090A0F]"
                            src={Logo}
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="font-display-hero text-lg font-bold tracking-tight uppercase text-white group-hover:text-[#FF5500] transition-colors">
                                Qais
                            </span>
                            <span className="font-label-mono-sm text-[10px] px-1.5 py-0.5 rounded bg-[#FF5500]/15 text-[#FF5500] border border-[#FF5500]/30 font-semibold tracking-widest">
                                ARCHITECT
                            </span>
                        </div>
                        <span className="font-label-mono-sm text-[10px] text-outline tracking-widest">
                            v.5.4 // COMPUTATIONAL LABS
                        </span>
                    </div>
                </a>
                {/* <!-- Strapi Live Status Badge --> */}
                <div className="hidden xl:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#10121A]/90 border border-white/10 shadow-inner">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5500] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5500]"></span>
                    </span>
                    <span className="font-label-mono-sm text-[11px] text-white/90 tracking-wide">
                        Qais Salha_
                        <span className="text-[#FF5500] font-semibold">
                            Software Engineer
                        </span>
                    </span>
                </div>
                {/* <!-- Navigation Links --> */}

                {NAVS.map((el, i) => {
                    return (
                        <nav
                            key={i}
                            className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#10121A]/70 border border-white/10 backdrop-blur-md"
                        >
                            <a
                                className="px-3.5 py-1.5 rounded-full font-label-mono-sm text-xs uppercase tracking-wider text-white/80 hover:text-[#FF5500] hover:bg-white/5 transition-all"
                                href={`#${el}`}
                            >
                                {el.toLocaleUpperCase()}
                            </a>
                        </nav>
                    );
                })}
                {/* <!-- Right Chrome / Action Controls --> */}
                <div className="flex items-center gap-3">
                    {/* <!-- Availability Pill --> */}
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] font-label-mono-sm text-[11px] tracking-wider font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5500] animate-pulse"></span>
                        <span>Available for Work</span>
                    </div>
                    {/* <!-- Audio Atmosphere Toggle --> */}

                    {/* <!-- Mobile Menu Trigger --> */}
                    <button
                        onClick={() => setisOpenArtical(!isOpenArtical)}
                        className="lg:hidden p-2 rounded-lg bg-[#FF5500] text-white font-bold text-xs font-label-mono-sm"
                    >
                        MENU
                    </button>

                </div>
            </div>
            
                <MobileMenu
                    navs={NAVS}
                    isOpen={isOpenArtical}
                    onClose={() => setisOpenArtical(false)}
                />
            
        </header>
    );
};

export default Header;
