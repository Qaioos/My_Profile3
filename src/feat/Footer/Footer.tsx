
const Footer = () => {
    const getDate = new Date().getFullYear()
  return (
        <footer
            className="w-full bg-[#06070B] border-t border-white/10 py-8 relative z-20"
        >
            <div
                className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6"
            >
                {/* Left: Status & Node Telemetry */}
                <div className="flex flex-wrap items-center gap-4">
                    
                </div>
                {/* Center: Social Anchors */}
                <div
                    className="flex items-center gap-6 font-label-mono-sm text-xs uppercase text-white/70"
                >
                    <a
                        className="hover:text-[#FF5500] transition-colors"
                        href="https://github.com/Qaioos"
                        rel="noreferrer"
                        target="_blank"
                        >GITHUB</a>
                    <a
                        className="hover:text-[#FF5500] transition-colors"
                        href="https://www.facebook.com/share/1DF9sMpsAt/"
                        rel="noreferrer"
                        target="_blank"
                        >Facebook</a>
                    <a
                        className="hover:text-[#FF5500] transition-colors"
                        href="/Qais_Salha_FrontEnd_Developer_Cv.pdf"
                        rel="noreferrer"
                        target="_blank"
                        >READ.CV</a>
                    <a
                        className="hover:text-[#FF5500] transition-colors"
                        href="https://www.linkedin.com/in/qais-salha-000052360"
                        rel="noreferrer"
                        target="_blank"
                        >LINKEDIN</a>
                </div>
                {/* <!-- Right: Copyright --> */}
                <div
                    className="flex items-center gap-2 font-label-mono-sm text-xs text-outline"
                >
                    <span className="text-white/80">© {getDate} Developed with❤️by Me</span>
                    
                </div>
            </div>
        </footer>
  )
}

export default Footer
