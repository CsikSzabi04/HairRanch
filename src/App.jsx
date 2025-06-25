// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ServicesPage from "./components/ServicesPage";
import BookingPage from "./components/BookingPage";
import ContactPage from "./components/ContactPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#fef8ee] text-[#3b2f23] font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/szolgaltatasok" element={<ServicesPage />} />
            <Route path="/idopontfoglalas" element={<BookingPage />} />
            <Route path="/elerhetoseg" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}