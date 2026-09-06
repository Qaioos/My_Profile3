import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
 

const TelemetryCard = () => {
    // استخدام قيم Motion لتتبع الإحداثيات
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // إضافة زنبرك ناعم (Spring) لجعل الحركة انسيابية جداً وبدون أي تقطيع
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    // تحويل حركات الماوس إلى زوايا دوران حقيقية 3D (دوران محور X و Y)
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);

    // دالة حساب مكان الماوس عند التحريك أو الضغط لإعطاء التأثير الفوري
    const handleMouseAction = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        
        // حساب النسبة المئوية لمكان الماوس من -0.5 إلى 0.5
        const mouseX = (e.clientX - rect.left) / width - 0.5;
        const mouseY = (e.clientY - rect.top) / height - 0.5;
        
        x.set(mouseX);
        y.set(mouseY);
    };

    // إعادة الكارت إلى وضعه الطبيعي عند خروج الماوس
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        // الكلاس perspective-1000 ضروري في Tailwind لإعطاء بعد عمق ثلاثي الأبعاد حقيقي
        <div className="lg:col-span-4 relative [perspective:1000px]">
            <motion.div
                onMouseMove={handleMouseAction}
                onMouseDown={handleMouseAction} // تحديث فوري للزاوية مطرح ما تضغط
                onMouseLeave={handleMouseLeave}
                style={{ 
                    rotateX, 
                    rotateY, 
                    transformStyle: "preserve-3d" 
                }}
                // 💡 المفاتيح السحرية المدمجة للتكبير والغطس عند الضغط:
                whileHover={{ 
                    scale: 1.04,
                    translateX: 6,
                    originX: 0 // التكبير يمتد جهة اليمين بثبات الطرف الأيسر
                }}
                whileTap={{ 
                    scale: 0.97, // يغطس الكارت بالكامل للداخل عند الضغط ليعطي عمقاً فيزيائياً
                    z: -10 
                }} 
                className="tilt-card rounded-2xl bg-[#10121A]/90 border border-white/10 p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-[#FF5500]/40 transition-colors cursor-pointer select-none"
            >
                {/* للتأكد من أن العناصر الداخلية تطفو بشكل ثلاثي الأبعاد عند تدوير الكارت */}
                <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
                    
                    {/* Window Bar */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                            <span className="font-mono text-[11px] text-white/50 ml-2">strapi_client.gql</span>
                        </div>
                        <span className="font-mono text-[11px] text-[#FF5500] font-semibold">200 OK • 12ms</span>
                    </div>

                    {/* Code Snippet */}
                    <div className="font-mono text-xs leading-relaxed text-white/80 space-y-1">
                        <div><span className="text-[#8B5CF6]">query</span> <span className="text-[#FF5500]">FetchFlagshipExperience</span> {'{'}</div>
                        <div className="pl-4 text-white/50"># Realtime edge graph</div>
                        <div className="pl-4"><span className="text-purple-400">portfolioAuthor</span>(id: <span className="text-orange-400">"892"</span>) {'{'}</div>
                        <div className="pl-8 text-white"><span className="text-blue-400">architect</span>: <span className="text-emerald-300">"Qais Salha"</span></div>
                        <div className="pl-8 text-white"><span className="text-blue-400">stack</span>: [<span className="text-emerald-300">"WebGL"</span>, <span className="text-emerald-300">"Strapi-v5"</span>]</div>
                        <div className="pl-8 text-white"><span className="text-blue-400">latencyScore</span>: <span className="text-orange-400">0.999</span></div>
                        <div className="pl-4">{'}'}</div>
                        <div>{'}'}</div>
                    </div>

                    {/* Live Telemetry Card Footer */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                        <div className="flex items-center gap-1.5 text-white/70">
                            <span className="material-symbols-outlined text-[14px] text-[#8B5CF6]">sync</span>
                            <span>EDGE CACHE: HIT</span>
                        </div>
                        <div className="text-[#FF5500] font-bold">99.8% EFFICIENCY</div>
                    </div>
                </div>

                {/* إضاءة خلفية تتبع حركة الماوس وتتوهج عند التحويم */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF5500]/10 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-150"></div>
            </motion.div>
        </div>
    );
};

export default TelemetryCard;
