import React, { useState, useEffect } from 'react';
import { FaRegChartBar, FaBalanceScale, FaDatabase, FaDollarSign, FaSitemap, FaExclamationTriangle, FaLightbulb, FaRoute, FaRegHandshake } from 'react-icons/fa';
import { toast } from 'react-toastify';  // Importing toast notifications for user feedback
import AgileMethodologyComponent from './AgileMethodologyComponent';
import CostManagement from './CostManagement';
import DatabaseComparison from './DatabaseComparison';
import CustomerJourneyMapping from './CustomerJourneyMapping';
import FeatureFeasibilityComponent from './FeatureFeasibilityComponent';
import MonitoringMetrics from './MonitoringMetrics';
import RiskManagementComponent from './RiskManagementComponent';
import UserFlowsDesign from './UserFlowsAndDesign';
import DatabaseNormalization from './DatabaseNormalization';
import DatabaseIndexing from './DatabaseIndexing'
import DatabaseOptimization from './DatabaseOptimization'
import TradeOffs from './Tradeoffs'






const Dashboard = () => {
  const [isAgileOpen, setIsAgileOpen] = useState(false);
  const [isCostOpen, setIsCostOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [isMonitoringOpen, setIsMonitoringOpen] = useState(false);
  const [isRiskOpen, setIsRiskOpen] = useState(false);
  const [isUserFlowsOpen, setIsUserFlowsOpen] = useState(false);

  const [isDatabaseNormalizationOpen, setIsDatabaseNormalizationOpen] = useState(false);
  const [isDatabaseIndexingOpen, setIsDatabaseIndexingOpen] = useState(false);
  const [isDatabaseOptimizationOpen, setIsDatabaseOptimizationOpen] = useState(false);
  const [isTradeoffsOpen, setIsTradeoffsOpen] = useState(false);
  
  
  // Card data for the overview grid
  const cardData = [

    



    {
      icon: <FaRegChartBar className="text-4xl text-blue-600" />,
      title: 'Agile Methodology',
      description: 'Understand how Agile methodologies help manage development sprints and product delivery.',
      toggle: () => setIsAgileOpen(!isAgileOpen),
    },
    {
      icon: <FaBalanceScale className="text-4xl text-blue-600" />,
      title: 'Trade-offs',
      description: 'Understanding Trades-offs as a PM',
      toggle: () => setIsTradeoffsOpen(!isTradeoffsOpen),
    },

   
    {
      icon: <FaDollarSign className="text-4xl text-green-600" />,
      title: 'Cost Management',
      description: 'Learn how to manage the product budget, track costs, and allocate resources effectively.',
      toggle: () => setIsCostOpen(!isCostOpen),
    },
    {
      icon: <FaDatabase className="text-4xl text-red-600" />,
      title: 'Database Comparison',
      description: 'Know the difference between SQL and NoSQL databases and their application in product development.',
      toggle: () => setIsDatabaseOpen(!isDatabaseOpen),
    },
    {
      icon: <FaSitemap className="text-4xl text-purple-600" />,
      title: 'System Architecture',
      description: 'Learn how to design scalable and robust system architectures.',
      toggle: () => setIsJourneyOpen(!isJourneyOpen),
    },
    {
      icon: <FaExclamationTriangle className="text-4xl text-yellow-600" />,
      title: 'Feature Feasibility',
      description: 'Evaluate and validate feature feasibility, technical constraints, and customer impact.',
      toggle: () => setIsFeatureOpen(!isFeatureOpen),
    },
    {
      icon: <FaLightbulb className="text-4xl text-orange-600" />,
      title: 'Monitoring Metrics',
      description: 'Learn about monitoring key product metrics to ensure performance and scalability.',
      toggle: () => setIsMonitoringOpen(!isMonitoringOpen),
    },
    {
      icon: <FaRegHandshake className="text-4xl text-teal-600" />,
      title: 'Risk Management',
      description: 'Identify and mitigate risks to ensure smooth product delivery and operations.',
      toggle: () => setIsRiskOpen(!isRiskOpen),
    },
    {
      icon: <FaRoute className="text-4xl text-indigo-600" />,
      title: 'User Flows & Design',
      description: 'Understand how to design user flows and map the customer journey effectively.',
      toggle: () => setIsUserFlowsOpen(!isUserFlowsOpen),
    },


/////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
      icon: <FaDatabase className="text-4xl text-blue-600" />,
      title: 'Database Normalization',
      description: 'Understanding Database Normalization helps curate efficient products to reduce redundancy and improve data integrity',
      toggle: () => setIsDatabaseNormalizationOpen(!isDatabaseNormalizationOpen),
    },


    {
      icon: <FaDatabase className="text-4xl text-blue-600" />,
      title: 'Database Indexing',
      description: 'Learn how database indexing enhances query performance by enabling faster data retrieval while balancing storage overhead.',
      toggle: () => setIsDatabaseIndexingOpen(!isDatabaseIndexingOpen),
    },
    
    {
      icon: <FaDatabase className="text-4xl text-blue-600" />,
      title: 'Database Optimization',
      description: 'Discover strategies to improve database performance, including query tuning, schema design, and resource management for efficient operations.',
      toggle: () => setIsDatabaseOptimizationOpen(!isDatabaseOptimizationOpen),
    },

 
   

  ];







  // UseEffect to show a toast notification when the component is mounted
  useEffect(() => {
    toast.info('Welcome to the Product Manager Dashboard! Click any icon to explore the content.');
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold bg-blue-100 items-center mb-2">
        Masterclass: Understanding Agile, Cost Management, Databases, and More as a Product Manager
      </h1>

      {/* Grid of icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col items-center text-center cursor-pointer"
            onClick={card.toggle}
          >
            {card.icon}
            <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
            <p className="text-gray-700 mt-2">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Render sections based on toggle state */}
      <div className="mt-8">
        {isAgileOpen && <AgileMethodologyComponent />}
        {isCostOpen && <CostManagement />}
        {isDatabaseOpen && <DatabaseComparison />}
        {isJourneyOpen && <CustomerJourneyMapping />}
        {isFeatureOpen && <FeatureFeasibilityComponent />}
        {isMonitoringOpen && <MonitoringMetrics />}
        {isRiskOpen && <RiskManagementComponent />}
        {isUserFlowsOpen && <UserFlowsDesign />}
        {isDatabaseNormalizationOpen && <DatabaseNormalization />}
        {isDatabaseIndexingOpen && <DatabaseIndexing />}
        {isDatabaseOptimizationOpen && <DatabaseOptimization />}
        {isTradeoffsOpen && <TradeOffs />}


      
      </div>
   
    </div>
  );
};

export default Dashboard;
