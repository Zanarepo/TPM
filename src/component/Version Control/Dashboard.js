import React, { useState, useEffect } from 'react';
import { FaGithub, FaCogs, FaShieldAlt, FaNetworkWired, FaDatabase, FaServer } from 'react-icons/fa';
import { toast } from 'react-toastify';  // Import the toast function

// Section Components
import GithubSection from './Github';
import MicroservicesSection from './Microservices';
import SecuritySection from './Security';
import LoadBalancingComponent from './LoadBalancingComponent';
import DataPipeline from './DataPipeline';
import BEArchitecture from './BEArchitecture';
import Timer from './Timer';  // Timer component

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('');
  const [timerActive, setTimerActive] = useState(false);

  // Card data
  const cardData = [
    {
      icon: <FaGithub className="text-4xl text-blue-600" />,
      title: 'Github',
      description: 'Understanding version control with Github is essential for collaboration.',
      section: 'github',
    },
    {
      icon: <FaCogs className="text-4xl text-green-600" />,
      title: 'Microservices',
      description: 'Microservices architecture is key for scaling applications effectively.',
      section: 'microservices',
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-600" />,
      title: 'Security',
      description: 'Security is crucial for protecting data and ensuring system integrity.',
      section: 'security',
    },
    {
      icon: <FaNetworkWired className="text-4xl text-purple-600" />,
      title: 'Load Balancing',
      description: 'Load balancing optimizes the distribution of traffic to ensure smooth operation.',
      section: 'loadbalancing',
    },
    {
      icon: <FaDatabase className="text-4xl text-red-600" />,
      title: 'Data Pipeline',
      description: 'Data pipelines enable the smooth flow and transformation of data.',
      section: 'datapipeline',
    },
    {
      icon: <FaServer className="text-4xl text-gray-600" />,
      title: 'Backend Architecture',
      description: 'Backend architecture is the foundation for robust, scalable systems.',
      section: 'bearchitecture',
    },
  ];

  // Handle section change and start/stop timer
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setTimerActive(true); // Start timer when section changes
  };

  const handleStopTimer = () => {
    setTimerActive(false); // Stop timer when leaving section
  };

  // UseEffect to show a toast notification when the component is mounted
  useEffect(() => {
    toast.info('Welcome to the Dashboard! Here are some key concepts to explore.');
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold bg-blue-100 items-center mb-2 ">
        Masterclass: Understanding Various Technologies as a Product Manager
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            onClick={() => handleSectionChange(card.section)}
            className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col items-center text-center cursor-pointer hover:bg-gray-100"
          >
            {card.icon}
            <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
            <p className="text-gray-700 mt-2">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Timer Component */}
      <Timer isActive={timerActive} onStop={handleStopTimer} />

      {/* Dynamic Section Rendering */}
      {activeSection === 'github' && <GithubSection onStop={handleStopTimer} />}
      {activeSection === 'microservices' && <MicroservicesSection onStop={handleStopTimer} />}
      {activeSection === 'security' && <SecuritySection onStop={handleStopTimer} />}
      {activeSection === 'loadbalancing' && <LoadBalancingComponent onStop={handleStopTimer} />}
      {activeSection === 'datapipeline' && <DataPipeline onStop={handleStopTimer} />}
      {activeSection === 'bearchitecture' && <BEArchitecture onStop={handleStopTimer} />}
    </div>
  );
};

export default Dashboard;
