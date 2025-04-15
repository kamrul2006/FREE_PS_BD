import CountUp from 'react-countup';
import { FaPeopleCarry, FaDonate, FaHandHoldingHeart } from 'react-icons/fa';

export default function AnimatedStats() {
    const stats = [
        {
            icon: <FaPeopleCarry className="text-4xl text-red-500" />,
            title: "People Supported",
            count: 12000,
            suffix: "+",
        },
        {
            icon: <FaDonate className="text-4xl text-green-500" />,
            title: "Funds Raised",
            count: 500,
            suffix: "K+",
        },
        {
            icon: <FaHandHoldingHeart className="text-4xl text-yellow-400" />,
            title: "Volunteers",
            count: 300,
            suffix: "+",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-black via-zinc-800 to-black text-white border-y-4 border-amber-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10">
                    Our <span className="text-green-500">Impact</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300"
                        >
                            <div className="mb-4 flex justify-center">{stat.icon}</div>
                            <h3 className="text-3xl font-bold text-green-400">
                                <CountUp end={stat.count} duration={2.5} suffix={stat.suffix} />
                            </h3>
                            <p className="mt-2 text-sm text-gray-300">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
