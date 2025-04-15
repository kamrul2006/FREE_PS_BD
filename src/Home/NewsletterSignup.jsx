import { useState } from "react";

export default function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            setMessage("Please enter a valid email address.");
            return;
        }
        setMessage("Thank you for subscribing!");
        setEmail("");
    };

    return (
        <section className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 text-white py-16 px-6 border-b-4 border-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Stay Connected with <span className="text-green-500">Hope</span>
                </h2>
                <p className="text-gray-400 mb-8">
                    Subscribe to our newsletter to receive updates about our latest support missions, donation drives, and inspiring stories from Palestine.
                </p>

                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setMessage("");
                        }}
                        placeholder="Enter your email"
                        className="w-full sm:w-2/3 px-5 py-3 rounded-lg bg-white text-black focus:outline-none shadow-md"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg font-semibold shadow-md"
                    >
                        Subscribe
                    </button>
                </form>

                {message && (
                    <p className={`mt-4 text-sm font-medium ${message.includes("Thank") ? "text-green-400" : "text-red-400"}`}>
                        {message}
                    </p>
                )}
            </div>
        </section>
    );
}
