import React, { useState } from 'react';

function App() {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [

    {
        id: 1,
        title: "Module 1: API Testing with Postman",
        content: (
          <div>
            <ul className="list-disc ml-5">
              <li>GET: Retrieve data from an API</li>
              <li>POST: Create new data via an API</li>
              <li>UPDATE: Modify existing data using PUT/PATCH</li>
              <li>DELETE: Remove data via an API</li>
            </ul>
            <h3 className="mt-4 font-bold">Task:</h3>
            <ul className="list-disc ml-5">
              <li>Use Postman to test a sample API by performing GET, POST, UPDATE, and DELETE requests.</li>
              <li>Document your requests and responses.</li>
            </ul>
          </div>
        )
      },
    
    {
      id: 2,
      title: "Module 2: Databases",
      content: (
        <div>
          <ul className="list-disc ml-5">
            <li>What are Databases?</li>
            <li>Types of Databases (Relational vs. NoSQL)</li>
            <li>How Databases Store and Retrieve Data</li>
            <li>Basics of SQL Queries (SELECT, INSERT, UPDATE, DELETE)</li>
          </ul>
          <h3 className="mt-4 font-bold">Homework:</h3>
          <p>Design a user table for an online store and link it to the product table using a foreign key.</p>
        </div>
      )
    },






    {
      id: 3,
      title: "Module 3: Introduction to Frontend (FE)",
      content: (
        <div>
          <h3 className="font-bold">FE Basics & Terminologies</h3>
          <ul className="list-disc ml-5">
            <li>What is Frontend Development?</li>
            <li>Client vs. Server</li>
            <li>Understanding HTML, CSS, and JavaScript</li>
          </ul>
          <h3 className="mt-4 font-bold">Tools & Environment Setup</h3>
          <ul className="list-disc ml-5">
            <li>Installing VSCode and extensions</li>
            <li>GitHub Basics (Repositories, Commits, Branches)</li>
            <li>Setting up GitHub account and linking with VSCode</li>
            <li>Introduction to Netlify for deployment</li>
          </ul>
          <h3 className="mt-4 font-bold">Homework:</h3>
          <ul className="list-disc ml-5">
            <li>Create a simple HTML page with CSS styling.</li>
            <li>Push code to GitHub and deploy using Netlify.</li>
            <li>Research and compare MySQL, PostgreSQL, and MongoDB.</li>
            <li>Write basic SQL queries for a sample database.</li>
          </ul>
        </div>
      )
    },
    {
      id: 4,
      title: "Module 4: Building a Simple Landing Page",
      content: (
        <div>
          <ul className="list-disc ml-5">
            <li>Structure of a Web Page (HTML Elements & Layout)</li>
            <li>Styling with CSS (Selectors, Flexbox, Grid)</li>
            <li>JavaScript Basics</li>
            <li>Deploying the Page on Netlify</li>
          </ul>
          <h3 className="mt-4 font-bold">Portfolio Task:</h3>
          <ul className="list-disc ml-5">
            <li>Create a personal portfolio page with sections like About Me, Skills, Projects.</li>
            <li>Deploy and share the Netlify link.</li>
          </ul>
        </div>
      )
    },


    {
        id: 5,
        title: "Module 5: Agile & Product Development",
        content: (
          <div>
            <ul className="list-disc ml-5">
              <li>What is Agile? (Scrum vs. Kanban)</li>
              <li>Trade-offs in Product Development</li>
              <li>Feature Feasibility Assessment</li>
              <li>Risk Management in Product Development</li>
            </ul>
            <h3 className="mt-4 font-bold">Homework:</h3>
            <p>
              Write a 1-page Agile case study: How would you prioritize a feature with tech debt concerns?
            </p>
          </div>
        )
      },

      {
        id: 6,
        title: "Module 6: System Architecture & Backend (BE) Fundamentals",
        content: (
          <div>
            <ul className="list-disc ml-5">
              <li>What is System Architecture?</li>
              <li>Monolith vs. Microservices</li>
              <li>Load Balancing (Why it’s needed & how it works)</li>
              <li>Security Considerations in Product Development</li>
            </ul>
            <h3 className="mt-4 font-bold">Task:</h3>
            <p>
              Research and create a diagram of a simple system architecture (Frontend + Backend + Database).
            </p>
          </div>
        )
      },
      {
        id: 7,
        title: "Module 7: Data & Analytics for TPMs",
        content: (
          <div>
            <ul className="list-disc ml-5">
              <li>What is a Data Pipeline?</li>
              <li>Monitoring & Metrics (KPIs, Logs, Alerts)</li>
              <li>Cost Management in Cloud & Infrastructure</li>
              <li>Basics of Product Analytics</li>
            </ul>
            <h3 className="mt-4 font-bold">Homework:</h3>
            <p>
              Identify 3 key metrics to monitor for a FinTech or SaaS product.
            </p>
          </div>
        )
      }










  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Course Modules</h1>
      <div className="flex">
        {/* Sidebar for Module List */}
        <div className="w-1/4 p-2 bg-white shadow rounded">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setSelectedModule(module.id)}
              className={`block w-full text-left p-2 mb-2 border rounded ${
                selectedModule === module.id ? 'bg-blue-200' : 'bg-white'
              }`}
            >
              {module.title}
            </button>
          ))}
        </div>
        {/* Content Display Area */}
        <div className="w-3/4 p-4 ml-4 bg-white shadow rounded">
          {selectedModule ? (
            modules.find((module) => module.id === selectedModule).content
          ) : (
            <p>Please select a module to view its content.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
