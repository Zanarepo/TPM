import React from 'react';
import Prd2 from './Contents/Prd2'; // Import the Prd2 component

import Prd3 from './Contents/Prd3'; // Import the Prd3 component
import PRD4 from './Contents/PRD4'; // Import the PRD4 component

// Example inline SVG icons from Heroicons
const OverviewIcon = () => (
  <svg
    className="w-8 h-8 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
  </svg>
);

const ObjectiveIcon = () => (
  <svg
    className="w-8 h-8 text-green-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ProblemIcon = () => (
  <svg
    className="w-8 h-8 text-red-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-1.414 1.414M6.343 17.657l-1.414 1.414M18.364 18.364l-1.414-1.414M6.343 6.343L4.93 7.757M12 8v4m0 4h.01m-6.364-9.364a9 9 0 1112.728 0 9 9 0 01-12.728 0z" />
  </svg>
);

const Tile = ({ title, icon, children, useCase }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-bold ml-3">{title}</h2>
    </div>
    <p className="text-gray-700 mb-4">{children}</p>
    <div className="mt-auto pt-2 border-t border-gray-200">
      <p className="text-sm text-gray-500">
        <strong>Use Case / Reason: </strong>{useCase}
      </p>
    </div>
  </div>
);

const POSPadiPRD = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">POS-Padi MVP Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Overview Tile */}
          <Tile
            title="Overview"
            icon={<OverviewIcon />}
            useCase="Provides context about the product and outlines the overall solution for POS agents facing operational challenges."
          >
            POS-Padi is a mobile and web-based platform developed to support POS agents who face challenges in managing daily operations efficiently. In markets ranging from busy urban centers to underserved rural areas, agents must contend with high fraud rates, inefficient dispute resolution, and liquidity issues due to limited access to cash suppliers. The platform was conceived to deliver real-time transaction monitoring, intelligent fraud alerts, rapid dispute resolution, and reliable cash supplier connectivity—all to improve operational reliability and customer trust.
          </Tile>

          {/* Objective Tile */}
          <Tile
            title="Objective"
            icon={<ObjectiveIcon />}
            useCase="Defines the primary goal of the MVP—testing the core features that address the most critical user pain points."
          >
            The primary objective of the MVP is to validate that a lean, focused solution can help POS agents reduce fraud, resolve disputes more quickly, and manage cash shortages by providing real-time insights and proactive alerts. This will be achieved by building and testing a set of core features that address the immediate pain points of our target users.
          </Tile>

          {/* Problem Tile */}
          <Tile
            title="Problem"
            icon={<ProblemIcon />}
            useCase="Highlights the key challenges that the product is aiming to solve for the POS agents."
          >
            POS agents currently face several critical issues:
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Fraud & Theft:</strong> High incidence of fraudulent transactions and cash theft impacting revenue.</li>
              <li><strong>Inefficient Dispute Resolution:</strong> Lengthy and complex dispute processes that lead to customer dissatisfaction.</li>
              <li><strong>Liquidity Challenges:</strong> Frequent cash shortages due to limited access to a reliable network of cash suppliers.</li>
              <li><strong>Operational Gaps:</strong> Absence of real-time transaction monitoring and performance tracking, hindering prompt intervention.</li>
            </ul>
          </Tile>
        </div>
      </div> <br /> 
<Prd2/>
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Additional Information</h2>
        <p className="text-gray-700 mb-4 text-center">
          This section can include more details about the product, user stories, or any other relevant information.
        </p>
      </div>
<Prd3/>
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Conclusion</h2>
        <p className="text-gray-700 mb-4 text-center">
          The POS-Padi MVP aims to address the pressing challenges faced by POS agents, enhancing their operational efficiency and customer trust.
        </p>
      </div>  
  <PRD4/>
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Next Steps</h2>
        <p className="text-gray-700 mb-4 text-center">
          The next steps include gathering user feedback, iterating on the MVP features, and planning for future releases.
        </p>
      </div>  
    </div>
  );
};

export default POSPadiPRD;
