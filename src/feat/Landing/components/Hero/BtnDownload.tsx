const DownloadCVButton = () => {
    return (
        <a
            // 💡 المسار المباشر للملف الموجود في مجلد public
            href="/Qais_Salha_FrontEnd_Developer_Cv.pdf"
            // 💡 الخاصية السحرية لتحميل الملف، والاسم الذي سيظهر للمستخدم عند التحميل
            download="Qais_Salha_FrontEnd_Developer_CV.pdf"
            // تنسيق زر احترافي متناسق مع هوية موقعك الداكنة والفسفورية
            className="px-7 py-4 rounded-full bg-[#181A24]/90 hover:bg-[#222533] text-white hover:text-[#8B5CF6] border border-white/10 hover:border-[#8B5CF6]/40 font-label-mono-lg text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300"
        >
            {/* أيقونة تحميل اختيارية من الـ SVG لجعل الزر أجمل */}

            <span className="flex ">
                Download CV{" "}
            <svg
                className="w-4 h-4 ml-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                xmlns="http://w3.org"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                ></path>
            </svg>

            </span>
        </a>
    );
};

export default DownloadCVButton;
