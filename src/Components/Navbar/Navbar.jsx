import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a className="text-white text-2xl font-bold">Logo</a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link to={'/home'} className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to={'/blog'} className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to={'/about'} className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to={'/product'} className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Product
            </Link>
            <Link to={'/contact'} className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden space-y-2 px-2 pt-2 pb-3">
            <Link to={'/home'} className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to={'/blog'} className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to={'/about'} className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link to={'/product'} className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Product
            </Link>
            <Link to={'/contact'} className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
