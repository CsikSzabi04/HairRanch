import React, { useEffect, useState } from "react";
import "../App.css"

const services = [
    {
        name: "Hello, szeretnék egy kicsit ",
        namess: "bemutatkozni :)",
        price: "Nevem: Kecskés Bertold",
        image: "Berti3.jpg",
    },

    {
        name: "",
        price: "",
        image: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/493571836_2430668880630179_122634646463612576_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=2qL5N2_CoIUQ7kNvwF8pmmw&_nc_oc=AdkgPh21xCm9K-Y2trFS-EMpN8S-R4e99dmrZAuab0jBj0diCweKLi9ShNk0lzX0i98&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=ULfPOgalM0HwB6MrHOp_YA&oh=00_AfOFJCUdyBLJ7H6e3SmG5GiNkC_2r5Ftx1bQka3CLJljaA&oe=6864D9FD",
    },
];

export default function ServicesPage() {
    const backgroundImages = [
        'https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/61168545_848334278863655_7226516585597370368_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=YS-D7IceLIcQ7kNvwH8WRmY&_nc_oc=AdmK215SoxulP83rQ_peTTQmhGpKsuNPhRwmJyNhiYDKvwhwlRPKWlqgG39iB7G3yK4&_nc_zt=23&_nc_ht=scontent-prg1-1.xx&_nc_gid=wB3wksrr4OhcPMrIqMXJpw&oh=00_AfPlejuKhN73bMW_NiWnr-ZOoHa90Kx4we5JW42CM0D9SA&oe=6882930F',
        'https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/484242950_979632764272025_8084441688912964990_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_V75gj7-zgYQ7kNvwHulHKP&_nc_oc=AdksxEv4BtQmGw0Peps_fs7Oj8iucAlQwXzneF6MEIjip3e0m953VpDsJTwm1wyx_M0&_nc_zt=23&_nc_ht=scontent-prg1-1.xx&_nc_gid=R6fiqCvQ0MDIMGEHjsrL9A&oh=00_AfOCt7uBvU7ZbxeknZ7G6S2LlkDGbD5Xxs87IFzmMSx7GA&oe=6860BD6B',
    ];

    const [currentBg, setCurrentBg] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 60000);
        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    const backgroundImages3 = [
        'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/476612407_1153734243427047_3404212600574938368_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=nceEb2rXCvIQ7kNvwHNE7PG&_nc_oc=Adk9lbGTXaynzjQxw6oOWmMSnNkjbOGN3NpW5yCKR5uCp4hzK8KIhwDFa0ym3PX7lXk&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=7wFqkvj9l4NWbi_EC2oBNQ&oh=00_AfPnru3XIYF5aMuEdD7m_-gzY7CrLT1jTVFNhsZDDWxSqw&oe=6864BF63',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/78063864_984761525220929_1588908634165739520_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yvh9HJ0SJyIQ7kNvwGUbG0e&_nc_oc=Adlpzj9pXYEfw1qF8KtQR7DhVnQVX3z5o9aZTFT6pEDB2yAOHHRDfkPgEYpH0Xw1RI8&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=gFveLDBP9jEByTx2UtWWBg&oh=00_AfN4CxzBnzSMP7Ha2SVyMzdScvT7QqV7KXychX-9Jm_k-g&oe=68864FDA',
        'https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/76720741_980286782335070_467473088129269760_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4pONEpGeCKcQ7kNvwHTMwtJ&_nc_oc=Admq1GpCxb5bhcHBqpBx9kVfC-wj2-GY9KsBtEkQeNdr8M0hDeuYzvl8bUwbnkKj__Y&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=gbjYEW6xiXrA4ApsV1hAEg&oh=00_AfP1Ir4zEaak9e7EfKv3XA0estgVfm_AvWRQUgeEIAzB0w&oe=68867264',
    ]

    return (
        <div className="overflow-hidden font-['Rye']">
            <section
                className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-10 space-y-10 text-white transition-all duration-1000"
                style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
            >
                {/* Banner */}
                <div className="w-[90%] flex justify-center">
                    <div style={{ backgroundImage: 'url("/asd.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover", marginTop: "6%" }} id="custom-responsive" className="bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform -rotate-2 w-full sm:w-4/5 md:w-3/5 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif">
                            Egy kicsit Magamról
                        </h2>
                        <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light" style={{ fontStyle: "italic" }}>
                            "Mert minden egyes hajvágásnak lelke van, nálunk ez életre kel." - Kecskés Bertold
                        </p>
                    </div>
                </div>

                {/* Services Carousel */}
                <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-full" style={{ marginTop: "3%" }}>
                    <div className="flex gap-6 justify-center w-max mx-auto px-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="min-w-[240px] max-w-[300px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                            >
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-52 object-cover"
                                />
                                <div className="p-4 text-center" style={{ width: "300px" }}>
                                    <h3 className="text-lg md:text-xl text-[#d6b981] text-white font-serif mb-1 tracking-wide">
                                        {service.name} <br />
                                        {service.namess}
                                    </h3>
                                    <p className="text-[#d6b981] font-medium">{service.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-[40%]" style={{ marginTop: "1%", marginBottom: "3%" }}>
                    <div >
                        <div className="flex gap-6 justify-center w-max mx-auto px-2  ">
                            {backgroundImages3.map((img, index) => (
                                <div
                                    key={index}
                                    className="w-[240px] max-w-[300px] max-h-[220px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                                    style={{ marginLeft: "1%" }}
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery2 ${index + 1}`}
                                        className="w-[100%] h-[100%] object-cover pointer-events-none"

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
