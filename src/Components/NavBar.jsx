import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-black text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">My Blog</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-pink-500 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu (Sliding Effect) */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black absolute top-full left-0 w-full shadow-lg"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            <li><Link to="/" className="hover:text-pink-500" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-500" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
