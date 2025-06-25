import React, { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Add this

export default function Gallery() {
   const backgroundImages = [
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/476642181_958238803078088_6569819926274068318_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ESQPViOXsygQ7kNvwHgJSPF&_nc_oc=AdmFRtk6sWoTgbyyolngnuKjPqJ3ZwODjb_jLZQO271zgj_gS7PC2TDs2WjyvffC0ZU&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=vP3ukRNKg_R17sldnhy0RA&oh=00_AfM_t5UDkTDpEUHLhVbtYFnzdnzyzvvaFmeVvn4rUXK_cw&oe=68619E1D',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/478550878_958205083081460_8112387189180257591_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kUwdnw_ZFHAQ7kNvwEMa7YZ&_nc_oc=Adlovk9_n-BlzADzPCpLPBWWz-RxWtfj4crUHlrXiEvjOY3GSWqEvg5yRoizToSqxsc&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=6DLu8JG2aST2FqVYnl5Qzg&oh=00_AfNselMFxM5ksh_vYcHF8W8W-N5S2ebNGPU7I_oLUM-laA&oe=6861B5D5',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/480321193_2363125980717803_2864059631123242665_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0xcwp32VipMQ7kNvwFNPHl8&_nc_oc=AdkB9PMM3AAlhKXDPa7zc4CqetVFEawOkKiRl13uH9mVZ6ePrizYSnJEARRQi7WH7N4&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=iWpl5MdJRWKyzmbDmdVRNw&oh=00_AfMDWBMF7UjZbd1CS8W0T-6GUNkh7-YPdyLEQ9wBtqXD4g&oe=6861A79E',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/477395311_2360248127672255_3509067091662637486_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gzAdg6R724MQ7kNvwHFnTnU&_nc_oc=Adnq_W8C_E4LpIyJHwFk26RLl-1pVxw_0i_-UpFry4Gmm3vby8nLvH5c5bmoUPJpMH8&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=iWpl5MdJRWKyzmbDmdVRNw&oh=00_AfP1XMAGntbn0g5vVysno77d6BVUlt-PSHd8adsW2V83XQ&oe=6861C60D',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/475767775_2350735575290177_6061738883889821402_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UqKRuk-8I-UQ7kNvwH9kqMJ&_nc_oc=Adk2BMjH8pkvgtkBDf_e7muiCDlxUokFE_6U3MpL8uCTBqRVkeXsYsAvNDK2ZOEzm7E&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=NDrQttm4PvDoCT1WfCdgcA&oh=00_AfP-10MzoF1ZkbhhcQBwitp-VcSfx1P0LqaAd8d1PfXO_A&oe=6861BB74',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/100904476_1135584990138581_1461073863222755328_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1bB41HPx658Q7kNvwHmIawv&_nc_oc=AdmiZ013ATJ7_a5FIhoTYrcM1NCLB-n9a8B2t9E6fdi0PCLr5-uGZBwxGOmRfHk6lbU&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=ryU91CqwTuPq0Y9ufYW-Ng&oh=00_AfO10sTEyYy3ZznmHWaHY5IjQtbePoS5oWom6p9oSnyD8A&oe=68835B1E',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/120756420_1238474816516264_8235871733155360716_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=O4ASvX_mFlsQ7kNvwH61X-N&_nc_oc=AdmblX8H0Mugbk5ulXMVXGCqwZGK1VyXzSnPIIGSeieXQvNpw112rLL0AnuY5bNq48E&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=SHXCJzgsJv2a0cURuHCGvA&oh=00_AfOmZf_gq0tKbXmdD6RlvkYCW0HQFUv6L2fTEc2SunDPhA&oe=6883682F',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/476642181_958238803078088_6569819926274068318_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ESQPViOXsygQ7kNvwHgJSPF&_nc_oc=AdmFRtk6sWoTgbyyolngnuKjPqJ3ZwODjb_jLZQO271zgj_gS7PC2TDs2WjyvffC0ZU&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=vP3ukRNKg_R17sldnhy0RA&oh=00_AfM_t5UDkTDpEUHLhVbtYFnzdnzyzvvaFmeVvn4rUXK_cw&oe=68619E1D',
    ];

    const backgroundImages2 = [
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/477451073_957516319817003_3201065443375624444_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ovtD4-jQmPkQ7kNvwHT3nz6&_nc_oc=Adk-4cNMM8oTSO70V9_yHq8XfTwh-G5Y5pWN8ruUx-dhYMA3cyMDXNJQ88dgu8XSKNA&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=4lTVO9UgJ6SZlCm7k6pbGg&oh=00_AfOTKzmVV50UQlCJvSeMT4YPFwhcnFmSNFkmuhqrodaE5A&oe=6861A55F',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/493571836_2430668880630179_122634646463612576_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=g7ze7jg93I4Q7kNvwF7CtJG&_nc_oc=Adl3kCkbdUUGV4w_iECaDuK0c0OAnNBkcIPtbXy0QZlgNzOyyecWWvyY-9h4uD_XVa4&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=Mq4QMOICF58YWxNB0BGiqw&oh=00_AfNqBZifDhIqkxkEpENvNwJSn7ceizCT9PKySQrXWNkYxg&oe=6861C67D',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/484242950_979632764272025_8084441688912964990_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_V75gj7-zgYQ7kNvwHulHKP&_nc_oc=AdksxEv4BtQmGw0Peps_fs7Oj8iucAlQwXzneF6MEIjip3e0m953VpDsJTwm1wyx_M0&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=bdZnn0oHFaNIYYm2fv-WMA&oh=00_AfOgLn3G3lCv3xi_ckCyFM1pNmvIBhVWn0l_oG6HdOCSDA&oe=6861D6AB',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/481028885_2367045640325837_615872305798432831_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Zfwwh5wEWb8Q7kNvwH-QFsV&_nc_oc=AdlRhZtukYe6mztfM-1ciuz9tXqyRXdMXFQ4bbeVlrYfrW-RwjEzjlAJn8aHPgsPLGA&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=GrAqa2v-CQJsUEgfVGwzZQ&oh=00_AfOR9mKdO9u5VQfLP7ZpHjPPEs5ayxqr4QN4cxDWrQdnVQ&oe=6861A689',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/61122217_850862341944182_5128798105180831744_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KAK0LGPKkrwQ7kNvwG7N36s&_nc_oc=AdmkOIjN8kOD7Ejehv64iADviB2lxnfnghUrJDypUfwWZyR-zazfYH9Yie99Df4o_kM&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=bunyFUqBwkJICVBi05QduA&oh=00_AfPKMtQBeKO4izFQrjanDVO1R0x3yhJSE_EkGMrzu54IUQ&oe=68836781',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/494194964_2431933623837038_9083499561617621604_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=BpZsuCrh-G8Q7kNvwG8sLDl&_nc_oc=AdkukzYxv7f0XfreMvq-epaFlrgsh5O5VuWdun4uQkojTOmapjQ05ZGEcs11ejw7ACU&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=mpYluOHWszrCYN_fbd6fiw&oh=00_AfOcN_PXHY_-7qqLyGcq3o2dl8vfv8PnkdokAPKIIY4flw&oe=6861CA50',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/75418942_973008169729598_6639313484431491072_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_ty6u2y7fQwQ7kNvwHLhoEC&_nc_oc=Admh1F7cRMnlRUIBiJIsgLIX7d88yXgsxPj-6z2VBqF5Q5kPBEMkdTz5seSiAxnJbes&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=k0SDhxzT3hEoWtvK2BDM4w&oh=00_AfNVy9_2gATPHedohjfrkoaoyB7_Yi-xjg5VzSZj0UZegA&oe=68834A07',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/480394172_2363926800637721_2061905936273122524_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=laaLxFpGJR0Q7kNvwHqTMV4&_nc_oc=AdnyPsfgPGiurV0NIdSquUm4nNkUdOdPnkjNEef1x-picv7rQLS1bmyxhwxOKH8zq0I&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=zToh06KA7W9FvMiMQlNK4w&oh=00_AfOzIirtvj5Yr7Mvd2Mc11jcriwxMgCKgfnPP2n_PDuZOw&oe=6861D0E7',
    ];

    const [currentBg, setCurrentBg] = useState(0);
    const scrollContainerRef = useRef(null);
    const scrollContainerRef2 = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [isDragging2, setIsDragging2] = useState(false);
    const [startX2, setStartX2] = useState(0);
    const [scrollLeft2, setScrollLeft2] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    // Drag handlers...
    const handleMouseDown = (e, refSetter) => {
        refSetter(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        scrollContainerRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        scrollContainerRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
    };

    // Second group handlers...
    const handleMouseDown2 = (e) => {
        setIsDragging2(true);
        setStartX2(e.pageX - scrollContainerRef2.current.offsetLeft);
        setScrollLeft2(scrollContainerRef2.current.scrollLeft);
    };

    const handleMouseUp2 = () => setIsDragging2(false);
    const handleMouseLeave2 = () => setIsDragging2(false);
    const handleMouseMove2 = (e) => {
        if (!isDragging2) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef2.current.offsetLeft;
        scrollContainerRef2.current.scrollLeft = scrollLeft2 - (x - startX2) * 2;
    };

    const handleTouchStart2 = (e) => {
        setIsDragging2(true);
        setStartX2(e.touches[0].pageX - scrollContainerRef2.current.offsetLeft);
        setScrollLeft2(scrollContainerRef2.current.scrollLeft);
    };

    const handleTouchMove2 = (e) => {
        if (!isDragging2) return;
        const x = e.touches[0].pageX - scrollContainerRef2.current.offsetLeft;
        scrollContainerRef2.current.scrollLeft = scrollLeft2 - (x - startX2) * 2;
    };

    // Arrow click handlers
    const scrollGallery = (ref, direction) => {
        if (ref.current) {
            ref.current.scrollBy({
                left: direction * 680, // 2 * 340px
                behavior: "smooth",
            });
        }
    };

    const ArrowButtons = ({ onLeftClick, onRightClick }) => (
        <div className="flex gap-2 z-10">
            <button
                onClick={onLeftClick}
                style={{padding:"15px",  marginLeft:"10px", marginRight:"1%", color:"white", opacity:"0.8"}}
                className="bg-[#2a2118] hover:bg-[#3b2f22] border border-[#c2a470] text-white p-5 rounded-full shadow"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={onRightClick}
                 style={{padding:"15px", color:"white", opacity:"0.8"}}
                className="bg-[#2a2118] hover:bg-[#3b2f22] border border-[#c2a470] text-white p-5 rounded-full shadow"
            >
                <FaChevronRight />
            </button>
        </div>
    );

    return (
        <div className="overflow-hidden font-['Rye']">
            <section
                className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-10 space-y-10 text-white transition-all duration-1000"
                style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
            >
                <div className="w-[80%] flex justify-center mt-[4%]">
                    <div  className="bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform rotate-2 w-full sm:w-4/5 md:w-3/5 text-center" style={{ backgroundImage: 'url("/asd.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover",marginTop:"2%", marginBottom:"2%" }} >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif">
                            Galéria
                        </h2>
                        <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light">
                            Nem mindig a harsány a feltűnő. <br />
                            A legnagyobb változás néha csendben történik, csak hagyni kell, hogy a fény elvégezze a dolgát.
                        </p>
                    </div>
                </div>

                {/* First Gallery */}
                <div className="relative w-[90%]" style={{ marginBottom: "10px", marginTop: "1%" }}>
                    <ArrowButtons
                        onLeftClick={() => scrollGallery(scrollContainerRef, -1)}
                        onRightClick={() => scrollGallery(scrollContainerRef, 1)}
                    />
                    <div
                        ref={scrollContainerRef}
                         style={{ marginBottom: "10px", marginTop: "2%" }}
                        className="overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleMouseUp}
                    >
                        <div className="flex gap-6 justify-center w-max mx-auto px-2">
                            {backgroundImages.map((img, index) => (
                                <div
                                    key={index}
                                     style={{ marginBottom: "10px", marginLeft: "1%" }}
                                    className="w-[340px] max-w-[400px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex-shrink-0"
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second Gallery */}
                <div className="relative w-[90%] mb-10" style={{ marginBottom: "10px", marginTop: "1%" }}>
                    <ArrowButtons
                        onLeftClick={() => scrollGallery(scrollContainerRef2, -1)}
                        onRightClick={() => scrollGallery(scrollContainerRef2, 1)}
                    />
                    <div
                        ref={scrollContainerRef2}
                          style={{ marginBottom: "10px", marginTop: "2%" }}
                        className="overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing"
                        onMouseDown={handleMouseDown2}
                        onMouseLeave={handleMouseLeave2}
                        onMouseUp={handleMouseUp2}
                        onMouseMove={handleMouseMove2}
                        onTouchStart={handleTouchStart2}
                        onTouchMove={handleTouchMove2}
                        onTouchEnd={handleMouseUp2}
                    >
                        <div className="flex gap-6 justify-center w-max mx-auto px-2">
                            {backgroundImages2.map((img, index) => (
                                <div
                                    key={index}
                                    style={{ marginBottom: "10px", marginLeft: "1%" }}
                                    className="w-[340px] max-w-[400px] max-h-[370px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex-shrink-0"
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery2 ${index + 1}`}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
