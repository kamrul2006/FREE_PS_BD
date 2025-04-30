import {
  Facebook,
  Twitter,
  Instagram,
  Mail
} from "lucide-react";
import lg from "../assets/fav-icon.png";


export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 border-t border-gray-800 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <img src={lg} alt="fps" className="w-10 shadow " />

          <h2 className="text-2xl font-extrabold text-red-500 mb-3 flex items-center">
            Free Palestine - <span className="text-green-500 ml-1">BD</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Standing with humanity, justice, and peace. United voices from Bangladesh to Palestine.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-red-400 transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-400 transition">About</a>
            </li>
            <li>
              <a href="/support" className="hover:text-red-400 transition">Support</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-1">
            Connect
          </h3>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <Mail size={16} /> contact@palestinebd.org
          </p>
          <div className="flex items-center gap-5 mt-4">
            <a href="#" className="hover:text-blue-500 transition" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-sky-400 transition" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-800 pt-5">
        © {new Date().getFullYear()} <span className="text-white font-medium">Free Palestine - BD</span>. All rights reserved.
      </div>
    </footer>
  );
}
