import  { useState } from "react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

/*     const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic لتنفيذ الإرسال أو الربط مع Strapi v5 / API
        console.log("Sending data to your backend...", formData);
    }; */

    return (
        <section className="bg-[#0B0B0F] text-white py-20 px-6 font-sans relative overflow-hidden">
            {/* تأثيرات الإضاءة الخلفية المحيطية المماثلة لموقعك */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                {/* القسم الأيسر: نصوص التعريف والتوجه */}
                <div className="flex flex-col justify-center space-y-6">
                    <div className="flex items-center space-x-2 text-xs tracking-widest text-purple-400 uppercase font-mono">
                        <span className="inline-block w-2 h-2 bg-[#FF4500] animate-pulse"></span>
                        <span>GET IN TOUCH — CONNECTION & EXECUTION</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight font-mono">
                        LET’S BUILD SOMETHING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-purple-500">
                            RELIABLE & SCALABLE.
                        </span>
                    </h2>

                    <p className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base">
                        Whether you want to hire me for an upcoming project,
                        discuss an engineering role, or just ask about Next.js
                        15 architecture, my inbox is always open for ambitious
                        ideas.{" "}
                    </p>

                    <div className="pt-4 border-t border-gray-800 max-w-sm space-y-3 font-mono text-xs text-gray-400">
                        <div >
                            <span className="text-[#FF4500]">
                                // DIRECT_LINE:
                            </span>{" "}
                            qaissalha781@gmail.com
                        </div>
{/*                         <div>
                            <span className="text-purple-400">
                                // LOCATION:
                            </span>{" "}
                            Remote / Worldwide
                        </div> */}
                    </div>
                </div>

                {/* القسم الأيمن: نموذج الاتصال (The Form) المتناسق مع تصميم كروتك */}
                <div className="bg-[#121218] border border-gray-850 p-8 rounded-none relative shadow-2xl">
                    {/* زوايا ديكورية حادة مستوحاة من نمط الـ UI في صورتك */}
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#FF4500]" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500" />

                    <form  action="https://formsubmit.co/legend442005@gmail.com" method="POST" className="space-y-6">
                        <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                                Name <span className="text-[#FF4500]">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full bg-[#1A1A24] border border-gray-800 px-4 py-3 text-white rounded-none focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500]/50 transition-all font-sans text-sm"
                                placeholder="John Doe"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                                Email Address{" "}
                                <span className="text-[#FF4500]">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full bg-[#1A1A24] border border-gray-800 px-4 py-3 text-white rounded-none focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all font-sans text-sm"
                                placeholder="johndoe@example.com"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                                Message Description{" "}
                                <span className="text-[#FF4500]">*</span>
                            </label>
                            <textarea
                                required
                                rows={5}
                                className="w-full bg-[#1A1A24] border border-gray-800 px-4 py-3 text-white rounded-none focus:outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500]/50 transition-all font-sans text-sm resize-none"
                                placeholder="Briefly describe your project or opportunity..."
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        message: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#FF4500] to-[#E03E00] hover:from-[#FF571A] hover:to-[#FF4500] text-white font-mono uppercase text-xs tracking-widest font-bold py-4 px-6 transition-all duration-300 shadow-[0_4px_20px_rgba(255,69,0,0.15)] active:scale-[0.98]"
                        >
                            TRANSMIT_MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
