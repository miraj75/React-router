import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <section className="text-gray-800 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Welcome to <span className="text-blue-600">Our Modern Website</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Discover sleek design, efficient features, and a modern approach to web experiences.
          </p>
          <div>
            <Link to={'/product'} className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-medium transition duration-300 ease-in-out">
              Get Started
            </Link>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Fast Performance</h2>
              <p className="text-gray-600">
                Experience lightning-fast load times and smooth interactions across the platform.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Responsive Design</h2>
              <p className="text-gray-600">
                Perfectly crafted to fit screens of all sizes for a consistent experience everywhere.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">Modern Interface</h2>
              <p className="text-gray-600">
                Enjoy a fresh and contemporary look with user-friendly design elements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
