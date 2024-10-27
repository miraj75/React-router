import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Logo</h2>
            <p className="text-gray-400 mt-2">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link to={'/product'} className="text-gray-400 hover:text-white">Product</Link>
            <Link to={'/blog'} className="text-gray-400 hover:text-white">Blog</Link>
            <Link to={'/about'} className="text-gray-400 hover:text-white">About</Link>
            <Link to={'/contact'} className="text-gray-400 hover:text-white">Contact</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.56v14.88C24 21.42 21.42 24 18.44 24H5.56C2.58 24 0 21.42 0 19.44V4.56C0 2.58 2.58 0 5.56 0h12.88C21.42 0 24 2.58 24 4.56zM9.6 19.2V9.6h-3.2v9.6h3.2zm-1.6-10.8a1.84 1.84 0 100-3.68 1.84 1.84 0 000 3.68zm11.2 10.8V13.6c0-1.28-.48-2.16-1.6-2.16-.88 0-1.36.6-1.6 1.2V9.6h-3.2v9.6h3.2v-4.8c0-.32.08-.64.32-.8.24-.16.56-.16.88-.16.56 0 .8.4.8 1v4.8h3.2z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.56v14.88C24 21.42 21.42 24 18.44 24H5.56C2.58 24 0 21.42 0 19.44V4.56C0 2.58 2.58 0 5.56 0h12.88C21.42 0 24 2.58 24 4.56zM9.6 19.2V9.6h-3.2v9.6h3.2zm-1.6-10.8a1.84 1.84 0 100-3.68 1.84 1.84 0 000 3.68zm11.2 10.8V13.6c0-1.28-.48-2.16-1.6-2.16-.88 0-1.36.6-1.6 1.2V9.6h-3.2v9.6h3.2v-4.8c0-.32.08-.64.32-.8.24-.16.56-.16.88-.16.56 0 .8.4.8 1v4.8h3.2z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 4.56v14.88C24 21.42 21.42 24 18.44 24H5.56C2.58 24 0 21.42 0 19.44V4.56C0 2.58 2.58 0 5.56 0h12.88C21.42 0 24 2.58 24 4.56zM9.6 19.2V9.6h-3.2v9.6h3.2zm-1.6-10.8a1.84 1.84 0 100-3.68 1.84 1.84 0 000 3.68zm11.2 10.8V13.6c0-1.28-.48-2.16-1.6-2.16-.88 0-1.36.6-1.6 1.2V9.6h-3.2v9.6h3.2v-4.8c0-.32.08-.64.32-.8.24-.16.56-.16.88-.16.56 0 .8.4.8 1v4.8h3.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
