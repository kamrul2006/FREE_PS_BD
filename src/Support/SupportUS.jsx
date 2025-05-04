import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import {
    FaHeart,
    FaShareAlt,
    FaHandsHelping,
    FaTwitter,
    FaFacebook,
    FaInstagram
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SupportUs = () => {
    return (
        <div className="min-h-screen bg-[#0a0f1a] text-white font-sans px-4 pt-20 py-16 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-green-500 via-blue-500 to-purple-500 blur-3xl" />

            {/* Flag */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1024px-Flag_of_Palestine.svg.png"
                alt="Palestine Flag"
                className="w-36 md:w-44 lg:w-52 mb-6 z-10 drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
            />

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 z-10 text-green-400 tracking-widest drop-shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                🛡️ Support Palestine
            </h1>

            <p className="max-w-3xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed z-10">
                Unite with global voices for peace, justice, and dignity. Help amplify the call for freedom by spreading awareness, donating, and standing up against oppression.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 z-10">
                <a
                    href="https://donate.unrwa.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-black font-bold py-3 px-8 rounded-xl relative overflow-hidden hover:scale-105 transition transform duration-300 shadow-[0_0_20px_rgba(0,255,150,0.4)]"
                >
                    <FaHeart className="inline mr-2" /> Donate Now
                </a>

                <Link
                    to="/"
                    className="bg-[#121e2a] border border-green-500 text-green-400 py-3 px-6 rounded-xl hover:bg-green-500 hover:text-black transition duration-300 shadow-inner"
                >
                    <BiLeftArrow className="inline mr-2" /> Go Back To Home
                </Link>
            </div>

            {/* Glass Panel */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-4xl w-full shadow-xl z-10 space-y-10">
                {/* Help Options */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-green-300 mb-4">
                        💡 How You Can Help
                    </h2>
                    <ul className="space-y-3 text-base md:text-lg text-gray-300">
                        <li className="hover:text-green-400 transition">📢 Educate and inform others</li>
                        <li className="hover:text-green-400 transition">🚫 Boycott complicit corporations</li>
                        <li className="hover:text-green-400 transition">✍️ Sign petitions and lobby your leaders</li>
                        <li className="hover:text-green-400 transition">🛒 Support Palestinian brands</li>
                    </ul>
                </div>

                {/* Info Box */}
                <div className="border border-green-500/30 rounded-xl p-6 bg-gradient-to-br from-[#0d1724] to-[#0c1a2e] shadow-[0_0_15px_rgba(0,255,150,0.2)]">
                    <h3 className="text-xl font-semibold text-green-400 mb-2">🧠 Did You Know?</h3>
                    <p className="text-gray-300">
                        Over 2 million people live in Gaza under siege. Your voice and actions can pressure leaders, drive donations, and ignite global awareness.
                        We must act for peace, dignity, and a better tomorrow.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mt-6">
                    <a href="https://twitter.com" className="text-blue-400 hover:text-blue-500 transition text-2xl">
                        <FaTwitter />
                    </a>
                    <a href="https://facebook.com" className="text-blue-600 hover:text-blue-700 transition text-2xl">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" className="text-pink-500 hover:text-pink-600 transition text-2xl">
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-12 text-sm text-gray-500 italic z-10">
                🇧🇩 Built with love in Bangladesh — Digital voices united for 🇵🇸 Palestine.
            </footer>
        </div>
    );
};

export default SupportUs;
