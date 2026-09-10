
const Footer = () => {
  return (
        <footer
            className="w-full bg-[#06070B] border-t border-white/10 py-8 relative z-20"
        >
            <div
                className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6"
            >
                {/* Left: Status & Node Telemetry */}
                <div className="flex flex-wrap items-center gap-4">
                    <div
                        className="flex items-center gap-2 px-3 py-1 rounded bg-[#10121A] border border-white/5 font-label-mono-sm text-xs text-[#8B5CF6]"
                    >
                        <span
                            className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-ping"
                        ></span>
                        <span>STRAPI v5 LIVE • 12ms</span>
                    </div>
                    <span className="font-label-mono-sm text-xs text-outline">
                        UTC
                        <span className="text-white" id="utc-clock">14:28:02</span>
                        // NODE-SYD-01
                    </span>
                </div>
                {/* Center: Social Anchors */}
                <div
                    className="flex items-center gap-6 font-label-mono-sm text-xs uppercase text-white/70"
                >
                    <a
                        className="hover:text-[#FF5500] transition-colors"
                        href="https://github.com"
                        rel="noreferrer"
                        target="_blank"
                        >GITHUB</a>
                    <a
                        className="hover:text-[#FF5500] transition-colors"
                        href="https://x.com"
                        rel="noreferrer"
                        target="_blank"
                        >X / TWITTER</a>
                    <a
                        className="hover:text-[#FF5500] transition-colors"
                        href="https://read.cv"
                        rel="noreferrer"
                        target="_blank"
                        >READ.CV</a>
                    <a
                        className="hover:text-[#FF5500] transition-colors"
                        href="https://linkedin.com"
                        rel="noreferrer"
                        target="_blank"
                        >LINKEDIN</a>
                </div>
                {/* <!-- Right: Copyright --> */}
                <div
                    className="flex items-center gap-2 font-label-mono-sm text-xs text-outline"
                >
                    <span className="text-white/80">© 2025 KAIRO LABS</span>
                    <span>// ALL SYSTEMS OPERATIONAL</span>
                </div>
            </div>
        </footer>
  )
}

export default Footer
