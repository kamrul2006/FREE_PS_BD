import { Heart, Megaphone, Globe } from "lucide-react";

export default function OurMission() {
  return (
    <section className="border-y-4 bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            At <span className="text-green-500 font-semibold">Free Palestine - BD</span>, we strive to educate, advocate, and empower —
            standing in unwavering solidarity with the people of Palestine from the heart of Bangladesh.
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Awareness */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition">
            <div className="flex items-center justify-center mb-4 text-red-500">
              <Megaphone size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white text-center">Raise Awareness</h3>
            <p className="text-gray-400 text-sm text-center">
              We share real stories and truths to educate the public and break the silence about the Palestinian struggle.
            </p>
          </div>

          {/* Solidarity */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition">
            <div className="flex items-center justify-center mb-4 text-green-500">
              <Heart size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white text-center">Stand in Solidarity</h3>
            <p className="text-gray-400 text-sm text-center">
              We unite voices across Bangladesh and the globe to show that we stand for justice, peace, and freedom for all.
            </p>
          </div>

          {/* Global Impact */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition">
            <div className="flex items-center justify-center mb-4 text-red-500">
              <Globe size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white text-center">Empower Change</h3>
            <p className="text-gray-400 text-sm text-center">
              Through campaigns, collaboration, and compassion — we push for lasting change on a global scale.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="/about"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-2xl transition"
          >
            Learn More About Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
