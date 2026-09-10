import { useEffect, useState } from "react";

export default function HandleResize() {
    // 1. تحديد ما إذا كانت الشاشة موبايل أم لا
    const [isMobile, setIsMobile] = useState(false);



    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // 768px هو الموبايل والتابلت
        };
        
        handleResize(); // تشغيل عند أول رندر
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { isMobile };
}