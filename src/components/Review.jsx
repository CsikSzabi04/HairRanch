// frontend/ReviewPage.js
import React, { useState, useEffect } from "react";

const backgroundImages = [
    "https://scontent-prg1-1.xx.fbcdn.net/v/t1.6435-9/61168545_848334278863655_7226516585597370368_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=YS-D7IceLIcQ7kNvwH8WRmY&_nc_oc=AdmK215SoxulP83rQ_peTTQmhGpKsuNPhRwmJyNhiYDKvwhwlRPKWlqgG39iB7G3yK4&_nc_zt=23&_nc_ht=scontent-prg1-1.xx&_nc_gid=wB3wksrr4OhcPMrIqMXJpw&oh=00_AfPlejuKhN73bMW_NiWnr-ZOoHa90Kx4we5JW42CM0D9SA&oe=6882930F",
    "https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/484242950_979632764272025_8084441688912964990_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_V75gj7-zgYQ7kNvwHulHKP&_nc_oc=AdksxEv4BtQmGw0Peps_fs7Oj8iucAlQwXzneF6MEIjip3e0m953VpDsJTwm1wyx_M0&_nc_zt=23&_nc_ht=scontent-prg1-1.xx&_nc_gid=R6fiqCvQ0MDIMGEHjsrL9A&oh=00_AfOCt7uBvU7ZbxeknZ7G6S2LlkDGbD5Xxs87IFzmMSx7GA&oe=6860BD6B",
];

const westernEmojis = ["🤠", "🌵", "🔫", "🐎", "👢", "🪕", "🏜️", "💀", "💰", "🍺"];

export default function ReviewPage() {
    const [currentBg, setCurrentBg] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [form, setForm] = useState({ name: "", email: "", review: "", stars: 5 });
    const backendURL = "https://hairranchbackenda.onrender.com"; // change if needed

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetch(`${backendURL}/reviews`)
            .then((res) => res.json())
            .then(setReviews)
            .catch(console.error);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.review || !form.stars) return;

        fetch(`${backendURL}/reviews`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to submit review");
                return res.json();
            })
            .then((newReview) => {
                setReviews([...reviews, newReview]);
                setForm({ name: "", email: "", review: "", stars: 5 });
            })
            .catch(console.error);
    };

    const handleDelete = (id) => {
        fetch(`${backendURL}/reviews`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Failed to delete review");
                setReviews(reviews.filter((r) => r.id !== id));
            })
            .catch(console.error);
    };

    const getRandomEmoji = () => {
        return westernEmojis[Math.floor(Math.random() * westernEmojis.length)];
    };

    return (
        <div className="overflow-hidden font-['Rye']">
            <section
                className="min-h-screen bg-cover bg-center bg-fixed bg-blend-overlay bg-[#1e1a14]/80 flex flex-col items-center justify-start px-4 py-12 text-white transition-all duration-1000"
                style={{ backgroundImage: `url(${backgroundImages[currentBg]})` }}
            >
                {/* Header */}
                <div className="w-[85%] max-w-6xl text-center mb-8" style={{ marginTop: "6%", marginBottom: "2%" }} >
                    <div className="bg-[#2a2118] border-4 border-[#c2a470] px-6 py-4 transform -rotate-1 shadow-xl" style={{ backgroundImage: 'url("/asd.jpg")', backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >
                        <h2 className="text-3xl md:text-5xl font-serif text-[#fef8ee] font-bold tracking-wider">
                            VÉLEMÉNYEK
                            <p className="text-[#e6d3b3] italic text-sm md:text-lg font-light">
                                „Láttad, tapasztaltad, átélted – most rajtad a sor, írd meg!”
                            </p>
                        </h2>
                    </div>
                </div>

                {/* Main Content - Two Columns */}
                <div className="w-[80%] max-w-6xl flex flex-col lg:flex-row gap-8" style={{ marginTop: "2%", marginBottom: "2%" }}>
                    {/* Left Column - Review Form */}
                    <div className="lg:w-1/2">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-[#1f1a17]/95 border-4 border-[#c2a470] rounded-xl p-6 shadow-2xl text-[#fef8ee] relative"
                        >
                            <div className="grid grid-cols-1 gap-4 sm:gap-6" style={{ marginRight: "2%" }}>
                                <div>
                                    <label style={{ marginTop: "1px", marginBottom: "1px", padding: "5px" }} className="block text-[#e6d3b3] mb-1">Név*</label>
                                    <input
                                        type="text"
                                        style={{ marginTop: "", marginBottom: "1%", padding: "10px 0px", paddingLeft: "5px", color: "white" }}
                                        placeholder="Neved"
                                        className="w-full bg-[#2a2118] border-2 border-[#c2a470] p-3 rounded-lg text-white focus:ring-2 focus:ring-[#c2a470] focus:border-transparent"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label style={{ marginBottom: "1px", padding: "5px" }} className="block text-[#e6d3b3] mb-1">Email*</label>
                                    <input
                                        type="email"
                                        style={{ marginTop: "", marginBottom: "2%", padding: "10px 0px", paddingLeft: "5px", color: "white" }}
                                        placeholder="Email címed"
                                        className="w-full bg-[#2a2118] border-2 border-[#c2a470] p-3 rounded-lg text-white focus:ring-2 focus:ring-[#c2a470] focus:border-transparent"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-[#e6d3b3] mb-1">Véleményed</label>
                                    <textarea
                                        placeholder="Írd meg, mit gondolsz..."
                                        style={{ color: "white", padding: "5px", fontSize: "15px" }}
                                        className="w-full bg-[#2a2118] border-2 border-[#c2a470] p-3 rounded-lg text-white focus:ring-2 focus:ring-[#c2a470] focus:border-transparent"
                                        rows={5}
                                        value={form.review}
                                        onChange={(e) => setForm({ ...form, review: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span style={{ paddingLeft: "10px", paddingBottom: "10px" }} className="text-[#e6d3b3] mr-2">Értékelés:</span>
                                        <select
                                            style={{ marginLeft: "10px", marginBottom: "10px" }}
                                            value={form.stars}
                                            onChange={(e) => setForm({ ...form, stars: parseInt(e.target.value) })}
                                            className="bg-[#2a2118] border-2 border-[#c2a470] text-white rounded-lg p-2 focus:ring-2 focus:ring-[#c2a470]"
                                        >
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <option key={s} value={s}>
                                                    {'⭐'.repeat(s)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        style={{ cursor: "pointer" }}
                                        className="bg-gradient-to-r from-[#c2a470] to-[#d6b981] hover:from-[#b99b60] hover:to-[#c2a470] text-[#2a2118] font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                    >
                                        Küldés
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right Column - Reviews */}
                    <div className="lg:w-1/2" style={{ marginTop: "2%" }}>
                        <div className="bg-[#1f1a17]/95 border-4 border-[#c2a470] rounded-xl p-6 shadow-2xl h-full">
                            <h3 className="text-2xl font-bold text-[#fef8ee] mb-6 text-center border-b border-[#c2a470] pb-2">
                                VÉLEMÉNYEK ({reviews.length})
                            </h3>

                            {reviews.length === 0 ? (
                                <div className="text-center py-10">
                                    <p className="text-[#fef8ee]/70 text-xl">Még nincsenek vélemények a városban, pardner!</p>
                                    <p className="text-[#c2a470] mt-2">Legyél te az első, aki véleményt ír!</p>
                                </div>
                            ) : (
                                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2"
                                    style={{
                                        scrollbarColor: "#8B4513 #2a2118",         // thumb and track colors
                                        scrollbarWidth: "thin",                    // thin scrollbar for Firefox
                                        overflowY: "scroll",                       // ensure scroll is active
                                    }}>
                                    {reviews.map((r) => (
                                        <div
                                            style={{ padding: "10px" }}
                                            key={r.id}
                                            className="bg-[#2a2118]/90 border-2 border-[#c2a470] p-5 rounded-xl shadow-lg relative"
                                        >
                                            <div
                                                className="flex justify-between items-center mb-3"
                                                style={{ marginTop: "1%" }}
                                            >
                                                {/* Left: Name + Date */}
                                                <div>
                                                    <h4 className="text-lg font-bold text-[#fef8ee]">{r.name}</h4>
                                                    <p className="text-sm text-[#c2a470]">{r.date}</p>
                                                </div>

                                                {/* Right: Emoji */}
                                                <div
                                                    className="text-6xl bg-[#1f1a17] border-2 border-[#c2a470] rounded-full w-[30px] h-[50%] flex items-center justify-center"
                                                    title="Hangulat"
                                                >
                                                    {getRandomEmoji()}
                                                </div>
                                            </div>

                                            {/* Review text */}
                                            <p className="text-[#f5e8d3] mt-2">{r.review}</p>

                                            {/* Stars + Delete */}
                                            <div className="flex justify-between items-center mt-4">
                                                <div className="text-[#c2a470]">{'⭐'.repeat(r.stars)}</div>
                                                <button
                                                    onClick={() => handleDelete(r.id)}
                                                    className="text-white text-xs px-3 py-1 rounded bg-red-600 hover:bg-red-500 transition"
                                                    title="Vélemény törlése"
                                                    style={{ margin: "5px", backgroundColor: "red", cursor: "pointer" }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}