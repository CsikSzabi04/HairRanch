import React, { useEffect, useState } from "react";
import "../App.css"

const services = [
  {
    name: "Férfi hajvágás (rövid)",
    price: "4.500 Ft-tól",
    image: "ferfi3.jpg",
  },
  {
    name: "Férfi hajvágás (medium & long)",
    price: "7.500 Ft-tól",
    image: "ferfi2.png",
  },
  {
    name: "Női hajvágás",
    price: "8.000 Ft-tól",
    image: "noi2.jpg",
  },
];


const services2 = [
  {
    name: "Női hajvágás (rövid)",
    price: "5.000 Ft-tól",
    image: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/477230735_2360262461004155_8325254489929382247_n.jpg?stp=c448.0.1152.1152a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=8JicMu10t2gQ7kNvwF77tv4&_nc_oc=Adlg9LMgnIggouim8b3HuLpoy6X2c2_IO1eTQiQUKr4G27z6Ed3M0M84DKgI4xMgDaw&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=uBwjSlK9p6TtwMNv-NC_2A&oh=00_AfNCkNViRUdT7sdyNQqSByKTw2JSn0xFKddkvPVU6kW2VQ&oe=6864B8D2",
  },
  {
    name: "Női hajvágás (long)",
    price: "10.000 Ft-tól",
    image: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/481028885_2367045640325837_615872305798432831_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_ohc=4Q91bXMkoCAQ7kNvwFPtBzu&_nc_oc=AdnIICfQLA7O8y3KfkscpdQWt2Yyt8jUfITl7-eEeO7LSbDnZAaDBZAP7tP6uKrTfqc&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=ttvO-vN8U2UxSM0SwUCvxQ&oh=00_AfOhoClJhtG1coYe3akRR3drJ8cfCqGxVTmKqhfAzzTaKw&oe=6864BA09",
  },
  {
    name: "Női hajfestés",
    price: "8.000 Ft-tól",
    image: "https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/480321193_2363125980717803_2864059631123242665_n.jpg?stp=c341.0.1366.1366a_dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_ohc=vhHqEoWtF30Q7kNvwGF7lc7&_nc_oc=AdkBU36MMt2DBlZka9P2T1jB701rlUv9ji_tbopgo49QmqIvvDvVI5eeuqOMm9kAuRY&_nc_zt=23&_nc_ht=scontent-vie1-1.xx&_nc_gid=uBwjSlK9p6TtwMNv-NC_2A&oh=00_AfNISCNYdh4SjLt8-weY2_q8PI8wjXRQaHsaPRR8vaRvvg&oe=6864BB1E",
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

  return (
    <div className="overflow-hidden font-['Rye']">
      <section
        className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pt-10 space-y-10 text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      >
        {/* Banner */}
        <div className="w-[90%] flex justify-center">
          <div style={{ backgroundImage: 'url("/asd.jpg")',  backgroundRepeat:"no-repeat", backgroundSize:"cover",marginTop:"6%" }} id="custom-responsive"  className="bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform -rotate-2 w-full sm:w-4/5 md:w-3/5 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif">
              SZOLGÁLTATÁSAIM
            </h2>
            <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light">
              Mert minden egyes hajvágásnak lelke van, nálunk ez életre kel.
            </p>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-full" style={{marginTop:"3%"}}>
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
                <div className="p-4 text-center">
                  <h3 className="text-lg md:text-xl text-white font-serif mb-1 tracking-wide">
                    {service.name}
                  </h3>
                  <p className="text-[#d6b981] font-medium">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Carousel */}
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hide w-full" style={{marginTop:"3%", marginBottom:"3%"}}>
          <div className="flex gap-6 justify-center w-max mx-auto px-2">
            {services2.map((service, index) => (
              <div
                key={index}
                className="min-w-[240px] max-w-[320px] bg-[#1f1a17] border border-[#c2a470] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-60 object-cover"
                  style={{marginLeft:"0px", backgroundColor:"white", border:"5px solid white",borderRight:"5px solid white"}}
                />
                <div className="p-4 text-center">
                  <h3 style={{marginLeft:"5%", marginRight:"5%"}} className="text-lg md:text-xl text-white font-serif mb-1 tracking-wide">
                    {service.name}
                  </h3>
                  <p className="text-[#d6b981] font-medium">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
