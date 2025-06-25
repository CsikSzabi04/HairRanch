import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesPage from "./ServicesPage";

export default function Home() {
    const backgroundImages = [
        'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/61168545_848334278863655_7226516585597370368_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=YS-D7IceLIcQ7kNvwH8WRmY&_nc_oc=AdmK215SoxulP83rQ_peTTQmhGpKsuNPhRwmJyNhiYDKvwhwlRPKWlqgG39iB7G3yK4&_nc_zt=23&_nc_ht=scontent-prg1-1.xx&_nc_gid=wB3wksrr4OhcPMrIqMXJpw&oh=00_AfPlejuKhN73bMW_NiWnr-ZOoHa90Kx4we5JW42CM0D9SA&oe=6882930F',
        'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/484242950_979632764272025_8084441688912964990_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_V75gj7-zgYQ7kNvwHulHKP&_nc_oc=AdksxEv4BtQmGw0Peps_fs7Oj8iucAlQwXzneF6MEIjip3e0m953VpDsJTwm1wyx_M0&_nc_zt=23&_nc_ht=scontent-prg1-1.xx&_nc_gid=R6fiqCvQ0MDIMGEHjsrL9A&oh=00_AfOCt7uBvU7ZbxeknZ7G6S2LlkDGbD5Xxs87IFzmMSx7GA&oe=6860BD6B',
    ];

    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 60000); // 60 seconds

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    return (
        <div className="overflow-hidden font-['Rye']">
            {/* Hero Section */}
            <section
                className="h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-4 bg-blend-overlay bg-[#1e1a14]/70 transition-all duration-1000"
                style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
            >
                <div className="w-full max-w-2xl flex flex-col items-center space-y-10 text-center" >
                    <div style={{ backgroundImage: 'url("/asd.jpg")',  backgroundRepeat:"no-repeat", backgroundSize:"cover" }} className="w-[80%] p-6 rounded-xl bg-[#2a2118] border-4 border-[#c2a470] shadow-2xl ring-2 ring-[#796043] rotate-[-2deg]">
                        <h1 className="text-5xl md:text-7xl font-bold text-[#fef8ee] tracking-widest mb-3">
                            HAIR RANCH
                        </h1>
                        <div className="w-24 h-1 bg-[#c2a470] mx-auto mb-4" />
                        <h2 className="text-xl  md:text-2xl text-[#e6d3b3] italic tracking-widest">
                           <strong>"Ahol minden férfi és nő, legjobb stílusban távozik"</strong> 
                        </h2>
                        <Link
                            to="/szolgaltatasok"
                            className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors no-underline tracking-wide px-3 py-1"
                            style={{ textDecoration: "none", paddingRight: "10px" }}
                        >
                            SZOLGÁLTATÁSOK  ⬅ Katt
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
