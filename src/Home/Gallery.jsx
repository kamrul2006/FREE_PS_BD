import { useEffect } from "react";

export default function Gallery() {

    useEffect(() => {
        // Optional: track when Gallery loads
    }, []);

    const images = [
        "https://www.thenation.com/wp-content/uploads/2022/12/palestine-flag-world-cup-apjpg.jpg",
        "https://www.thenation.com/wp-content/uploads/2022/12/palestine-flag-world-cup-apjpg.jpg",
        "https://www.thenation.com/wp-content/uploads/2022/12/palestine-flag-world-cup-apjpg.jpg",
        "https://www.thenation.com/wp-content/uploads/2022/12/palestine-flag-world-cup-apjpg.jpg",
        "https://www.thenation.com/wp-content/uploads/2022/12/palestine-flag-world-cup-apjpg.jpg",
        "https://www.thenation.com/wp-content/uploads/2022/12/palestine-flag-world-cup-apjpg.jpg",
    ];

    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-10">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-red-500 mb-3">Our Gallery</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Glimpses of resistance, hope, and solidarity for a free Palestine.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {images.map((src, idx) => (
                    <div key={idx} className="overflow-hidden rounded-xl shadow-lg group">
                        <img
                            src={src}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
