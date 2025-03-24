import React, { useState } from 'react';

const MasterclassContent = () => {
  // State to toggle visibility of each section
  const [showDatabase, setShowDatabase] = useState(true);
  const [showFrontend, setShowFrontend] = useState(true);
  const [showBackend, setShowBackend] = useState(true);
  const [showAPI, setShowAPI] = useState(true);
  const [showQA, setShowQA] = useState(true);

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Masterclass: Understanding Databases, Frontend, Backend, and APIs</h1>
        <p className="text-lg mt-2">Learn the fundamentals of full-stack development, APIs, and how they all work together!</p>
      </header>

      {/* Database Section */}
      <div className="card mb-4 p-4 border rounded shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">What is a Database?</h2>
          <button
            className="text-blue-600"
            onClick={() => setShowDatabase(!showDatabase)}
          >
            {showDatabase ? 'Hide' : 'Show'} Info
          </button>
        </div>
        {showDatabase && (
          <div>
            <p className="mt-2">A database stores and organizes your data. It's like a digital filing cabinet where all your information is securely kept.</p>
            <p className="mt-2">In simple terms:</p>
            <ul className="list-disc ml-4">
              <li>FE (Frontend) fetches data from BE via API calls to display it.</li>
              <li>BE interacts with the database to save, update, or delete data.</li>
            </ul>
            <p className="mt-2"><strong>Example:</strong> User data (name, email) is stored in the database and retrieved when they log in.</p>
          </div>
        )}
      </div>

      {/* Frontend Section */}
      <div className="card mb-4 p-4 border rounded shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">What is Frontend (FE)?</h2>
          <button
            className="text-blue-600"
            onClick={() => setShowFrontend(!showFrontend)}
          >
            {showFrontend ? 'Hide' : 'Show'} Info
          </button>
        </div>
        {showFrontend && (
          <div>
            <p className="mt-2">Frontend is what the users interact with on the screen. It's the visual part of your application (buttons, forms, images).</p>
            <p className="mt-2">In simple terms:</p>
            <ul className="list-disc ml-4">
              <li>FE sends requests to BE to fetch data.</li>
              <li>FE displays the data retrieved from BE (e.g., user profiles).</li>
            </ul>
            <p className="mt-2"><strong>Example:</strong> A user fills out a signup form (FE), which sends the data to BE and stores it in the database.</p>
          </div>
        )}
      </div>

      {/* Backend Section */}
      <div className="card mb-4 p-4 border rounded shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">What is Backend (BE)?</h2>
          <button
            className="text-blue-600"
            onClick={() => setShowBackend(!showBackend)}
          >
            {showBackend ? 'Hide' : 'Show'} Info
          </button>
        </div>
        {showBackend && (
          <div>
            <p className="mt-2">Backend is where the business logic, server-side processes, and database interactions happen. It's the engine behind the scenes.</p>
            <p className="mt-2">In simple terms:</p>
            <ul className="list-disc ml-4">
              <li>BE processes requests sent by FE.</li>
              <li>BE performs CRUD (Create, Read, Update, Delete) operations on the database.</li>
            </ul>
            <p className="mt-2"><strong>Example:</strong> When you log in (FE), BE checks the credentials against the database to authenticate the user.</p>
          </div>
        )}
      </div>

      {/* API Section */}
      <div className="card mb-4 p-4 border rounded shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">What is an API?</h2>
          <button
            className="text-blue-600"
            onClick={() => setShowAPI(!showAPI)}
          >
            {showAPI ? 'Hide' : 'Show'} Info
          </button>
        </div>
        {showAPI && (
          <div>
            <p className="mt-2">APIs allow different software applications to communicate. It enables FE to interact with BE and fetch data.</p>
            <p className="mt-2">There are different types of API requests you can make:</p>
            <ul className="list-disc ml-4">
              <li><strong>GET:</strong> Fetch data.</li>
              <li><strong>POST:</strong> Send new data.</li>
              <li><strong>PUT:</strong> Update existing data.</li>
              <li><strong>DELETE:</strong> Remove data.</li>
            </ul>
            <p className="mt-2"><strong>Example:</strong> To fetch all mentees, use a GET request.</p>
            <pre className="bg-gray-100 p-2 rounded">
              curl -X GET http://localhost:5000/api/mentees
            </pre>
            <p className="mt-2"><strong>Example:</strong> To add a mentee, use a POST request.</p>
            <pre className="bg-gray-100 p-2 rounded">
              curl -X POST -H "Content-Type: application/json" -d '"name" "John Doe", "email": "john@example.com"' http://localhost:5000/api/mentees
            </pre>
          </div>
        )}
      </div>

      {/* Q&A Section */}
      <div className="card mb-4 p-4 border rounded shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Q&A Section</h2>
          <button
            className="text-blue-600"
            onClick={() => setShowQA(!showQA)}
          >
            {showQA ? 'Hide' : 'Show'} Q&A
          </button>
        </div>
        {showQA && (
          <div>
            <p className="mt-2">Feel free to ask questions about the concepts covered in this masterclass!</p>
            <ul className="list-disc ml-4">
              <li>How does the frontend communicate with the backend?</li>
              <li>What is the role of APIs in full-stack development?</li>
              <li>Can you explain CRUD operations in the context of a database?</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MasterclassContent;
