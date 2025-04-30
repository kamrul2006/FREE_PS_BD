import { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
    useEffect(() => {
        document.title = "FreePalestine-BD | Contact Us";
    }, []);

    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-gray-200 pt-24 pb-16 px-4 md:px-12">
            {/* Header */}
            <div className="text-center mb-14">
                <h1 className="text-5xl font-extrabold text-red-500 mb-3 tracking-widest">Contact Us</h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Let’s build together. Whether it's a question, suggestion, or support—we’re listening.
                </p>
            </div>

            {/* Form + Contact Info */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
                {/* Contact Form */}
                <form className="bg-gray-900 rounded-3xl shadow-2xl p-10 space-y-6 border border-gray-700">
                    <div>
                        <label className="block mb-2 text-sm font-semibold">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-semibold">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-semibold">Message</label>
                        <textarea
                            rows="6"
                            placeholder="Type your message here..."
                            className="w-full px-5 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-xl font-bold tracking-wide text-white transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Info Section */}
                <div className="bg-gray-900 rounded-3xl border border-gray-700 shadow-xl p-10 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-green-400 mb-4">Contact Details</h2>

                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-red-400 text-xl" />
                            <p className="text-gray-300">support@freepalestinebd.org</p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaPhoneAlt className="text-red-400 text-xl" />
                            <p className="text-gray-300">+880 1234-567890</p>
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-red-400 text-xl" />
                            <p className="text-gray-300">Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h3 className="text-xl font-semibold text-green-400 mb-3">Follow Us</h3>
                        <div className="flex space-x-5 text-xl">
                            <a href="#" className="hover:text-red-400 transition-all"><FaFacebookF /></a>
                            <a href="#" className="hover:text-red-400 transition-all"><FaTwitter /></a>
                            <a href="#" className="hover:text-red-400 transition-all"><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
