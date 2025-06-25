import React, { useEffect, useState } from "react";

export default function BookingPage() {
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
        className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-start px-4 sm:px-6 md:px-10 pt-10 pb-20 text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
      >
        {/* Header Banner */}
        <div className="w-[90%] flex justify-center mb-10"  style={{ marginTop: "3%", marginLeft:"0%" }}>
          <div className="bg-[#2a2118] border-4 border-[#c2a470] shadow-xl px-6 py-4 transform -rotate-2 w-[90%] sm:w-4/5 md:w-3/5 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#fef8ee] font-bold tracking-wider mb-2 font-serif">
              IDŐPONTFOGLALÁS
            </h2>
            <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light">
              Foglalj időpontot stílusos környezetben, profik keze alatt.
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div  style={{ marginTop: "3%", marginLeft:"0%" }} className="w-[90%] max-w-4xl bg-[#1f1a17]/90 border-2 border-[#c2a470] rounded-2xl p-8 md:p-10 shadow-2xl space-y-6">
          <form className="space-y-8 p-10">
            {/* Name & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Név</label>
                <input
                  type="text"
                  className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white placeholder-[#d6b981] focus:outline-none focus:ring-2 focus:ring-[#d6b981]"
                  placeholder="Teljes neved"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Telefonszám</label>
                <input
                  type="tel"
                  className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white placeholder-[#d6b981] focus:outline-none focus:ring-2 focus:ring-[#d6b981]"
                  placeholder="+36 20 123 4567"
                  required
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Szolgáltatás</label>
              <select className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#d6b981]">
                <option>Klasszikus Nyírás</option>
                <option>Szakáll Formázás</option>
                <option>Borotválás</option>
                <option>Gyermek Nyírás</option>
                <option>Prémium Csomag</option>
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Dátum</label>
                <input
                  type="date"
                  className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#d6b981]"
                  required
                />
              </div>
              <div>
                <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Időpont</label>
                <select className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#d6b981]">
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                  <option>13:00</option>
                  <option>14:00</option>
                  <option>15:00</option>
                  <option>16:00</option>
                  <option>17:00</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg mb-2 font-semibold text-[#e6d3b3]">Üzenet (opcionális)</label>
              <textarea
                rows="4"
                className="w-[90%] px-4 py-2 rounded border border-[#c2a470] bg-transparent text-white placeholder-[#d6b981] focus:outline-none focus:ring-2 focus:ring-[#d6b981]"
                placeholder="Speciális kérések..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-[90%] bg-[#c2a470] hover:bg-[#a88d65] text-[#1f1a17] font-bold py-3 px-4 rounded text-lg transition duration-300"
            >
              FOGLALÁS MEGERŐSÍTÉSE
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
