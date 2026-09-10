import { useEffect, useState } from "react";

const PageSize = () => {
    // 1. تحديد ما إذا كانت الشاشة موبايل أم لا
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const HandleResize = () => {
            setIsMobile(window.innerWidth < 768); // 768px هو الموبايل والتابلت
        };

        HandleResize(); // تشغيل عند أول رندر
        window.addEventListener("resize", HandleResize);
        return () => window.removeEventListener("resize", HandleResize);
    }, []);

    return { isMobile };
};

export default PageSize;
