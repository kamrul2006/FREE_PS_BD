import React, { useEffect } from "react";

export default function AboutUs() {
    useEffect(() => {
        document.title = "FreePalestine-BD | About Us";
    }, []);

    return (
        <div className="min-h-screen bg-white text-gray-800 pt-20 pb-10">
            {/* Hero Section */}
            <section className="text-center px-4 py-12 bg-gradient-to-r from-green-600 to-red-600 text-white">
                <h1 className="text-4xl font-bold mb-3">About Free Palestine-BD</h1>
                <p className="text-lg max-w-3xl mx-auto">
                    United in solidarity, FreePalestine-BD is a grassroots initiative from Bangladesh, standing with Palestine through awareness, advocacy, and action.
                </p>
            </section>

            {/* Mission | Vision | Purpose */}
            <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg border-l-4 border-green-500 rounded-lg p-6 text-center hover:shadow-md transition">
                    <h2 className="text-xl font-semibold text-green-700 mb-2">Our Mission</h2>
                    <p>
                        To amplify the voice of the oppressed, support humanitarian efforts, and educate our communities about the truth of the Palestinian struggle.
                    </p>
                </div>
                <div className="bg-white shadow-lg border-l-4 border-red-500 rounded-lg p-6 text-center hover:shadow-md transition">
                    <h2 className="text-xl font-semibold text-red-700 mb-2">Our Vision</h2>
                    <p>
                        A world where Palestine is free — politically, culturally, and spiritually — and global citizens stand united against injustice.
                    </p>
                </div>
                <div className="bg-white shadow-lg border-l-4 border-yellow-500 rounded-lg p-6 text-center hover:shadow-md transition">
                    <h2 className="text-xl font-semibold text-yellow-600 mb-2">Our Work</h2>
                    <p>
                        We organize awareness campaigns, community drives, peaceful protests, educational sessions, and digital activism from Bangladesh to the world.
                    </p>
                </div>
            </section>

            {/* Who We Are */}
            <section className="max-w-5xl mx-auto mt-12 px-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Who We Are</h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto">
                    FreePalestine-BD is a collective of activists, students, professionals, and humanitarians who believe in justice, freedom, and dignity for all. From raising funds to spreading awareness, we remain committed to standing with the people of Palestine — in voice, in heart, and in action.
                </p>
            </section>

            {/* Image & Commitment */}
            <section className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D307235115W6502H10000/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/free-palestine-sticker.jpg"
                    alt="Free Palestine"
                    className="rounded-2xl shadow-md w-full h-auto"
                />
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Our Commitment</h3>
                    <p className="text-gray-600 mb-3">
                        We stand with the people of Palestine — not just in times of crisis, but always. We commit to spreading truthful narratives, combating misinformation, and creating platforms where the voices of Palestine are heard.
                    </p>
                    <p className="text-gray-600">
                        Our journey is not political — it is human. And together, we believe that awareness leads to change, and solidarity leads to liberation.
                    </p>
                </div>
            </section>
        </div>
    );
}
