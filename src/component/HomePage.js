import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaChartLine, FaTachometerAlt, FaUsers } from 'react-icons/fa';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Introductory Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Welcome to the TPM Hub
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Explore a series of lessons designed to enhance your product management skills. In these lessons, you'll learn about databases, agile methodologies, cost management, and product analytics—all critical topics for any Product Manager.
        </p>
      </header>
      {/* Lesson Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Link to="/tpm" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <FaTools size={48} className="text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Lesson 1</h3>
          <h4 className="text-center text-gray-600">
            Masterclass: Understanding Databases, Frontend, Backend, and APIs as a Product Manager
          </h4>
        </Link>
        <Link to="/dashboard2" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <FaChartLine size={48} className="text-green-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Lesson 2</h3>
          <h4 className="text-center text-gray-600">
            Understanding Agile, Cost Management, Databases, and More as a Product Manager
          </h4>
        </Link>
        <Link to="/dashboard" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <FaTachometerAlt size={48} className="text-purple-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Lesson 3</h3>
          <h4 className="text-center text-gray-600">
            Understanding Various Technologies as a Product Manager
          </h4>
        </Link>
        <Link to="/Dashboard3" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <FaUsers size={48} className="text-red-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Lesson 4</h3>
          <h4 className="text-center text-gray-600">
            Understanding Product Analytics
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
