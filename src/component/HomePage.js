// HomePage.js
import React, { useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

const HomePage = () => {
  const [, setMentees] = useState([]); // Fix: Include `mentees` state

  const fetchMentees = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/mentees");
      setMentees(response.data.mentees);
    } catch (error) {
      console.error("Error fetching mentees:", error);
    }
  }, [setMentees]); // Fix: Include `setMentees` in dependency array

  useEffect(() => {
    fetchMentees();
  }, [fetchMentees]);
  useEffect(() => {
    fetchMentees();
  }, [fetchMentees]); // Now useEffect has a stable function dependency

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
        <Dashboard/>
      {/* Navigation Bar */}
   

      {/* Hero Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Welcome to Mentee Management</h1>
        <p className="text-lg text-gray-600">Manage and track your mentees in a simple and intuitive way.</p>
      </div>

      {/* Mentee Management Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Manage Mentees</h3>
          <p className="text-gray-600 mb-4">View all your mentees and track their progress.</p>
          <Link 
            to="/mentees" 
            className="block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300"
          >
            Go to Mentees Dashboard
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Add a Mentee</h3>
          <p className="text-gray-600 mb-4">Easily add new mentees to your management system.</p>
          <Link 
            to="/add-mentee" 
            className="block bg-green-500 text-white font-semibold py-2 px-4 rounded-lg text-center hover:bg-green-600 transition-colors duration-300"
          >
            Add Mentee
          </Link>
        </div>
      </div>

      {/* Optionally display mentees */}
      {/* mentees.map() logic can go here */}
    </div>
  );
};

export default HomePage;
