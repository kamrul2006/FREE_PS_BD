import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../Providers/AuthProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, UserSignOut } = useContext(AuthContext);
  // console.log(user)

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = "hover:text-red-400 transition duration-200";

  return (
    <nav className="bg-black text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 text-xl font-bold tracking-wider text-red-500">
            Free Palestine - <span className="text-green-500">BD</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center space-x-6">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/support" className={navLinkClass}>Support</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

            {user ? (
              <div className="flex items-center justify-center gap-3">
                <button
                  className="bg-red-400 text-center hover:bg-amber-600 px-4 py-1 rounded-2xl text-black"
                  onClick={UserSignOut}
                >
                  Log Out
                </button>

                <img src={user.photoURL} className="w-12  border-2 border-red-500 b rounded-full" alt="hdf" />
              </div>
            ) : (
              <NavLink
                to="/Login"
                className="bg-amber-400 text-center hover:bg-amber-600 px-4 py-1 rounded-2xl text-black"
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
        <div className="md:hidden bg-black border-t border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col-reverse">
            <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>About</NavLink>
            <NavLink to="/support" className={navLinkClass} onClick={toggleMenu}>Support</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>Contact</NavLink>

            {user && (
              <button
                className="bg-red-400 text-center hover:bg-amber-600 p-2 rounded-2xl text-black"
                onClick={UserSignOut}
              >
                Log Out
              </button>
            )}

            {!user && (
              <NavLink
                to="/Login"
                className="bg-amber-400 text-center hover:bg-amber-600 p-2 rounded-2xl text-black"
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
