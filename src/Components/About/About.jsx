

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <p className="text-gray-700 text-lg">
          We are a dedicated team providing solutions to help you grow. Our mission is to deliver high-quality products
          and services to our customers, ensuring satisfaction and trust. Founded in 2024, we have been constantly
          evolving to meet the needs of our clients.
        </p>
        <div className="flex flex-wrap justify-between mt-6">
          <div className="w-full sm:w-1/2 p-2">
            <h2 className="font-semibold text-xl">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To innovate and provide quality services that exceed our clients' expectations.
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <h2 className="font-semibold text-xl">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              To be a global leader in our industry, recognized for our excellence and integrity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
