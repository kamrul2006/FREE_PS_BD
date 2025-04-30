import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../Providers/AuthProvider";
import lg from "../assets/fav-icon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, UserSignOut } = useContext(AuthContext);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    `relative transition duration-200 font-medium px-3 py-1 ${isActive
      ? "text-red-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-green-500 after:rounded-full after:animate-pulse"
      : "hover:text-red-400"
    }`;

  return (
    <nav className="bg-black/50 backdrop-blur-lg text-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2 text-xl font-bold tracking-wide text-red-500">
            <img src={lg} alt="fps" className="w-10" />
            Free Palestine - <span className="text-green-500">BD</span>
          </div>

          {/* Desktop Menu - Centered Nav */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/support" className={navLinkClass}>Support</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <button
                  className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded-2xl text-white font-semibold shadow transition"
                  onClick={UserSignOut}
                >
                  Log Out
                </button>
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="w-11 h-11 rounded-full border-2 border-red-500 shadow-lg hover:scale-105 transition duration-300"
                />
              </>
            ) : (
              <NavLink
                to="/Login"
                className="bg-amber-400 hover:bg-amber-500 px-4 py-1 rounded-2xl text-black font-semibold transition"
              >
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 shadow-lg">
          <div className="px-4 pt-3 pb-5 flex flex-col space-y-3">
            <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>About</NavLink>
            <NavLink to="/support" className={navLinkClass} onClick={toggleMenu}>Support</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>Contact</NavLink>

            {user ? (
              <button
                className="bg-red-500 hover:bg-red-600 p-2 rounded-2xl text-white font-semibold"
                onClick={UserSignOut}
              >
                Log Out
              </button>
            ) : (
              <NavLink
                to="/Login"
                className="bg-amber-400 hover:bg-amber-500 p-2 rounded-2xl text-black font-semibold"
                onClick={toggleMenu}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
