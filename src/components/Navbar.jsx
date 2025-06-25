import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#2a2118] backdrop-blur-md text-[#f0d8b8] border-b-4 border-[#a67c52]" style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url('https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/FREE_CONTENT66dehxycKqgS4Mhiabti/PREVIEW_SCREENSHOT7_166081.jpg')`, }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/hairranch.png"
              alt="Hair Ranch Logo"
              className="h-[50%] w-[65%] rounded-full border-2 border-[#a67c52]"
            />
          </Link>

          {/* Desktop Navigation - ALWAYS visible above 900px */}
          <div className="hidden min-[900px]:flex space-x-6 gap-5">
            <Link
              to="/"
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors no-underline tracking-wide px-3 py-1"
              style={{ textDecoration: "none", paddingRight: "10px" }}
            >
              FŐOLDAL
            </Link>

            <Link
              to="/galery"
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors no-underline tracking-wide px-3 py-1"
              style={{ textDecoration: "none", paddingRight: "10px" }}
            >
              GALÉRIA
            </Link>
            <Link
              to="/review"
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors no-underline tracking-wide px-3 py-1"
              style={{ textDecoration: "none", paddingRight: "10px" }}

            >
              VÉLEMÉNYEK
            </Link>
            <Link
              to="/elerhetoseg"
              className="text-[#c2a470] uppercase font-semibold text-sm hover:text-[#fef8ee] transition-colors no-underline tracking-wide px-3 py-1"
              style={{ textDecoration: "none", paddingRight: "10px" }}
            >
              ELÉRHETŐSÉG
            </Link>
          </div>

          {/* Mobile Hamburger - ONLY visible below 900px */}
          <button
            className="min-[900px]:hidden text-3xl px-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü megnyitása"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu - appears when hamburger is clicked (below 900px) */}
        {mobileMenuOpen && (
          <div className="min-[900px]:hidden bg-[#2a2118] border-t border-[#a67c52] rounded-b-md shadow-md">
            <div className="flex flex-col py-2">
              <Link
                to="/"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                FŐOLDAL
              </Link>
              <Link
                to="/szolgaltatasok"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                SZOLGÁLTATÁSOK
              </Link>
              <Link
                to="/idopontfoglalas"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                IDŐPONTFOGLALÁS
              </Link>
              <Link
                to="/review"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                VÉLEMÉNYEK
              </Link>
              <Link
                to="/elerhetoseg"
                className="px-6 py-3 text-[#c2a470] hover:bg-[#a67c52] hover:text-white transition-colors uppercase tracking-wide font-semibold"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                ELÉRHETŐSÉG
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
