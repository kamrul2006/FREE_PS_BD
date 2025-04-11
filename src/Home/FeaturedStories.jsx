import i from "../assets/FeatureImage/i.jpg"
import ii from "../assets/FeatureImage/ii.jpg"
import iii from "../assets/FeatureImage/iii.jpg"

export default function FeaturedStories() {
    const stories = [
        {
            id: 1,
            title: "The Silence of the World",
            excerpt: "A 9-year-old child in Gaza writes a poem as bombs fall outside her window. Her words became a symbol of strength and hope.",
            image: i,
        },
        {
            id: 2,
            title: "The Last Olive Tree",
            excerpt: "Generations grew under its shade until bulldozers came. A story of resistance, loss, and identity rooted in soil.",
            image: ii,
        },
        {
            id: 3,
            title: "Voices Through the Rubble",
            excerpt: "Volunteers across borders joined hands to amplify stories buried beneath destruction and dust.",
            image: iii,
        },
    ];

    return (
        <section className="bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
                        Featured Stories
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Real voices. True stories. Witness the unfiltered reality and human strength from the heart of Palestine.
                    </p>
                </div>

                {/* Stories Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <div key={story.id} className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-500/30 transition duration-300 group">
                            <div className="overflow-hidden">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    {story.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">{story.excerpt}</p>
                                <a
                                    href="/stories"
                                    className="text-red-500 font-medium hover:underline"
                                >
                                    Read Full Story →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
