import { Link } from "react-router-dom";
import bg from "../assets/bnbg.png"
export default function Banner() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage:
                        `url(${'https://png.pngtree.com/thumb_back/fh260/background/20240717/pngtree-palestine-s-dream-4k-pc-background-image_16016746.jpg'})`, // Replace with your preferred image
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl text-center px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Stand with{" "}
                    <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                        Palestine
                    </span>
                    , Voice of{" "}
                    <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                        Bangladesh
                    </span>
                </h1>

                <p className="text-lg text-gray-300 mb-8">
                    Join us in supporting justice, peace, and human rights. Your voice matters. Together, we can make a difference.
                </p>

                <Link
                    to="/support"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-2xl transition-transform transform hover:scale-105 shadow-lg"
                >
                    Support Now
                </Link>
            </div>
        </section>
    );
}
