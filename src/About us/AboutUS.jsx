import React, { useEffect } from "react";

export default function AboutUs() {
    useEffect(() => {
        document.title = "FreePalestine-BD | About Us";
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 pt-20 pb-10">
            {/* Hero Section */}
            <section className="text-center px-4 py-16 bg-gradient-to-r from-green-500 via-black to-red-500 text-white shadow-xl">
                <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-white to-red-400">
                    About FreePalestine-BD
                </h1>
                <p className="text-lg max-w-3xl mx-auto text-gray-300">
                    United in solidarity, FreePalestine-BD is a grassroots initiative from Bangladesh, standing with Palestine through awareness, advocacy, and action.
                </p>
            </section>

            {/* Mission | Vision | Purpose */}
            <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Our Mission",
                        color: "green",
                        text: "To amplify the voice of the oppressed, support humanitarian efforts, and educate our communities about the truth of the Palestinian struggle.",
                    },
                    {
                        title: "Our Vision",
                        color: "red",
                        text: "A world where Palestine is free — politically, culturally, and spiritually — and global citizens stand united against injustice.",
                    },
                    {
                        title: "Our Work",
                        color: "yellow",
                        text: "We organize awareness campaigns, community drives, peaceful protests, educational sessions, and digital activism from Bangladesh to the world.",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`bg-gray-900 bg-opacity-60 backdrop-blur-lg border-l-4 border-${item.color}-500 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300`}
                    >
                        <h2 className={`text-2xl font-bold text-${item.color}-400 mb-3`}>
                            {item.title}
                        </h2>
                        <p className="text-gray-300">{item.text}</p>
                    </div>
                ))}
            </section>

            {/* Who We Are */}
            <section className="max-w-5xl mx-auto mt-16 px-6">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Who We Are
                </h2>
                <p className="text-center text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    FreePalestine-BD is a collective of activists, students, professionals, and humanitarians who believe in justice, freedom, and dignity for all. From raising funds to spreading awareness, we remain committed to standing with the people of Palestine — in voice, in heart, and in action.
                </p>
            </section>

            {/* Image & Commitment */}
            <section className="max-w-6xl mx-auto px-6 mt-20 grid md:grid-cols-2 gap-10 items-center">
                <img
                    src="https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D307235115W6502H10000/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/free-palestine-sticker.jpg"
                    alt="Free Palestine"
                    className="rounded-2xl shadow-2xl w-full h-auto border-2 border-gray-700"
                />
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">Our Commitment</h3>
                    <p className="text-gray-400 mb-4">
                        We stand with the people of Palestine — not just in times of crisis, but always. We commit to spreading truthful narratives, combating misinformation, and creating platforms where the voices of Palestine are heard.
                    </p>
                    <p className="text-gray-400">
                        Our journey is not political — it is human. And together, we believe that awareness leads to change, and solidarity leads to liberation.
                    </p>
                </div>
            </section>
        </div>
    );
}
