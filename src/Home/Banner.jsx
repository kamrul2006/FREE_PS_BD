import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section className="bg-gradient-to-br min-h-screen from-black via-gray-900 to-black text-white py-20 px-6 flex items-center justify-center">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Stand with <span className="text-red-500">Palestine</span>, Voice of <span className="text-green-500">Bangladesh</span>
                </h1>

                
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    Join us in supporting justice, peace, and human rights. Your voice matters. Together, we can make a difference.
                </p>
                

                <Link
                    to="/support"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-2xl transition"
                >
                    Support Now
                </Link>
            </div>
        </section>
    );
}
