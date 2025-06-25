import React, { useEffect, useState } from "react";

const backgroundImages = [
    "https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/61168545_848334278863655_7226516585597370368_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=YS-D7IceLIcQ7kNvwH8WRmY&_nc_oc=AdmK215SoxulP83rQ_peTTQmhGpKsuNPhRwmJyNhiYDKvwhwlRPKWlqgG39iB7G3yK4&_nc_zt=23&_nc_ht=scontent-prg1-1.xx&_nc_gid=wB3wksrr4OhcPMrIqMXJpw&oh=00_AfPlejuKhN73bMW_NiWnr-ZOoHa90Kx4we5JW42CM0D9SA&oe=6882930F",
    "https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/484242950_979632764272025_8084441688912964990_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_V75gj7-zgYQ7kNvwHulHKP&_nc_oc=AdksxEv4BtQmGw0Peps_fs7Oj8iucAlQwXzneF6MEIjip3e0m953VpDsJTwm1wyx_M0&_nc_zt=23&_nc_ht=scontent-prg1-1.xx&_nc_gid=R6fiqCvQ0MDIMGEHjsrL9A&oh=00_AfOCt7uBvU7ZbxeknZ7G6S2LlkDGbD5Xxs87IFzmMSx7GA&oe=6860BD6B",
];

export default function ContactPage() {
    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden font-['Rye']">
            <section
                className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-center px-4 py-20 text-white transition-all duration-1000"
                style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
            >
                {/* Header */}
                <div className="w-[85%] max-w-4xl text-center mb-10" style={{ marginTop: "3%" }}>
                    <div className="bg-[#2a2118] border-4 border-[#c2a470] px-6 py-4 transform -rotate-1 shadow-xl">
                        <h2 className="text-3xl md:text-5xl font-serif text-[#fef8ee] font-bold tracking-wider">
                            ELÉRHETŐSÉG
                        </h2>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid md:grid-cols-2  gap-8 w-[85%] max-w-6xl px-4" style={{ marginTop: "3%", marginLeft:"0%" }}>
                    {/* Contact Info */}
                    <div className="bg-[#1f1a17]/90 border-2 border-[#c2a470] rounded-2xl p-8 md:p-10 shadow-2xl text-[#fef8ee] space-y-8">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-center border-b border-[#c2a470]/50 pb-4">
                            Hair Ranch – Barber
                        </h3>

                        <div className="space-y-6 divide-y divide-[#c2a470]/30">
                            {/* Address */}
                            <div className="flex items-start gap-4 pt-2">
                                <div className="text-2xl bg-[#c2a470]/20 text-[#d6b981] p-2 rounded-full">📍</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Cím</h4>
                                    <p className="text-[#f5e8d3]">Március 15. utca 11, HairRanch, Kecskemét, Hungary</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 pt-4">
                                <div className="text-2xl bg-[#c2a470]/20 text-[#d6b981] p-2 rounded-full">📞</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Telefon</h4>
                                    <p className="text-[#f5e8d3]">+36 70 242 1586</p>
                                </div>
                            </div>

                            {/* Facebook */}
                            <div className="flex items-start gap-4 pt-4">
                                <div className="text-2xl bg-[#c2a470]/20 text-[#d6b981] p-2 rounded-full">✉️</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Facebook | Messenger</h4>
                                    <p className="text-[#f5e8d3]">
                                        HairRanch |{" "}
                                        <a
                                            href="https://www.facebook.com/bartalbertold"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-[#d6b981] hover:text-white transition"
                                        >
                                            Ide kattintva elérhető vagyok
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start gap-4 pt-4">
                                <div className="text-2xl bg-[#c2a470]/20 text-[#d6b981] p-2 rounded-full">⏰</div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Nyitvatartás</h4>
                                    <p>Hétfő – Péntek: 9:00 – 18:00</p>
                                    <p>Szombat: 9:00 – 14:00</p>
                                    <p>Vasárnap: Zárva</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div className="rounded-xl overflow-hidden shadow-lg border border-[#c2a470]" style={{ marginTop: "3%" }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2725.228373364381!2d19.670309076894156!3d46.91789183528123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743d0a90ce1fe83%3A0xd4a167efd22c2c9e!2sKecskem%C3%A9t%2C%20M%C3%A1rcius%2015.%20u.%2011%2C%206000!5e0!3m2!1shu!2shu!4v1750810422454!5m2!1shu!2shu"
                            width="100%"
                            height="100%"
                            className="w-full min-h-[400px] border-none rounded-xl"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </div>
            </section>
        </div>
    );
}
