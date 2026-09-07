import { motion, AnimatePresence } from 'framer-motion';

// أضفنا isOpen و onClose للتحكم بفتح وإغلاق القائمة
interface MobileMenuProps {
    navs: string[];
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ navs, isOpen, onClose }: MobileMenuProps) => {
    return (
        // AnimatePresence ضرورية جداً لكي تعمل حركة الـ Exit عند إغلاق القائمة
        <AnimatePresence >
            {isOpen && (
                <motion.article 
                    // تأثيرات الحركة والانتقال
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 200 }}
                    exit={{ opacity: 1, y: -205 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    
                    className="fixed relative inset-0  md:hidden flex flex-col justify-center items-center px-6 backdrop-blur-lg"
                >
                    {/* خلفية مخفية لإغلاق القائمة عند الضغط خارج المربع */}
                    <div className="absolute inset-0 w-10000 h-10000" onClick={onClose} />

                    <nav className=" absolute z-10 flex flex-col items-center gap-4 p-5 w-full  rounded-2xl bg-[#10121A]/80 border border-white/10 shadow-2xl">
                        <p className="text-white/40 text-[10px] font-mono tracking-widest uppercase mb-2">Navigation</p>
                        
                        {navs.map((el, i) => {
                            return (
                                <a
                                    key={i}
                                    className=" text-center px-4 py-3 rounded-xl font-mono text-sm uppercase tracking-wider text-white/80 hover:text-[#E2FF00] hover:bg-white/5 transition-all border-b border-white/5 last:border-0"
                                    href={`#${el}`}
                                    onClick={onClose} // تغلق القائمة فوراً عند اختيار رابط
                                >
                                    {el.toUpperCase()}
                                </a>
                            );
                        })}
                    </nav>
                </motion.article>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
