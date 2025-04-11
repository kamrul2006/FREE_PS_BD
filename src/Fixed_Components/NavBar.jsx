import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass =
    "hover:text-red-400 transition duration-200";

  return (
    <nav className="bg-black text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-xl font-bold tracking-wider text-red-500">
            Free Palestine - <span className="text-green-500">BD</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/support" className={navLinkClass}>Support</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/support" className={navLinkClass} onClick={() => setIsOpen(false)}>Support</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
