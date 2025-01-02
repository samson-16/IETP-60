import{ useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#318078] text-white sticky top-0 z-50shadow-md py-4 ">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <img src={logo} alt="MFC Logo" className="w-10 h-10 rounded-full" /> */}
          <h1 className="text-2xl font-bold">MFC Solutions</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8">
          <NavLink
            to="/"
            className="hover:underline"
            activeClassName="font-semibold underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="hover:underline"
            activeClassName="font-semibold underline"
          >
            About
          </NavLink>
          <NavLink
            to="/technology"
            className="hover:underline"
            activeClassName="font-semibold underline"
          >
            Technology
          </NavLink>
          <NavLink
            to="/order"
            className="hover:underline"
            activeClassName="font-semibold underline"
          >
            Order
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:underline"
            activeClassName="font-semibold underline"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={handleToggle} className="text-white">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-green-500 text-center">
          <ul className="space-y-4 py-4">
            <li>
              <NavLink
                to="/"
                onClick={handleToggle}
                className="block hover:underline"
                activeClassName="font-semibold underline"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleToggle}
                className="block hover:underline"
                activeClassName="font-semibold underline"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                onClick={handleToggle}
                className="block hover:underline"
                activeClassName="font-semibold underline"
              >
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                onClick={handleToggle}
                className="block hover:underline"
                activeClassName="font-semibold underline"
              >
                Order
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={handleToggle}
                className="block hover:underline"
                activeClassName="font-semibold underline"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
