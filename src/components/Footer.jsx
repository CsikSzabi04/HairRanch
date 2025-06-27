import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a120b] text-[#f5ebe0] border-t-4 border-[#d4a373]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          {/* Brand Column */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold font-['Rye'] mb-3 text-[#d4a373]">
              HAIR RANCH
            </h3>
            <p className="text-[#e6c9a8] italic mb-4">
              "A HairRanch nem csak egy szalon, ez egy életérzés, ahol minden vágás egy új történet kezdete."
            </p>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-left" style={{ marginBottom: "1%" }}>
            <h3 className="text-xl font-bold font-['Rye'] mb-4 text-[#d4a373]">
              KAPCSOLAT
            </h3>
            <li className="space-y-2 text-[#e6c9a8] list-none">Március 15. utca 11 HairRanch, Kecskemét, Hungary</li>
            <li className="space-y-2 text-[#e6c9a8] list-none"><a style={{ textDecoration: "none", color: "#d4a373" }} href="https://www.facebook.com/bartalbertold">Ide kattintva: HairRanch - Facebook</a></li>
            <li className="space-y-2 text-[#e6c9a8] list-none"><a style={{ textDecoration: "none", color: "#d4a373" }} href="https://www.instagram.com/bartalbertold_hairranch/">Ide kattintva: HairRanch - Instagram</a></li>
            <li className="space-y-2 text-[#e6c9a8] list-none">Nyitvatartás: <br />K-P: 9:00 - 19:00 <br />Sz: 8:00-12:00</li>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold font-['Rye'] mb-3 text-[#d4a373]">
            Olvass véleményeket  ➨
            <Link
              to="/review"
              className="text-[#c2a470] font-semibold text-sm hover:text-[#fef8ee] transition-colors no-underline tracking-wide px-3 py-1"
              style={{ textDecoration: "none", paddingRight: "10px", marginLeft: "5px" }}

            >
              Vélemények
            </Link>
          </h3>

        </div>
        {/* Copyright Section */}
        <div className="pt-6 border-t border-[#3b2f23] text-center text-sm text-[#a67c52]">
          <p>
            &copy; {new Date().getFullYear()} Hair Ranch |
            Készítette: <a href="https://csszabj.netlify.app/" className="text-[#d4a373]">Csík Szabolcs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}