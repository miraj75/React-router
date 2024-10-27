// Products.jsx
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
  const Players = useLoaderData()
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Players.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-fill"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.country}</p>
                <a
                  href="#"
                  className="inline-block bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out"
                >
                  Select Player
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
