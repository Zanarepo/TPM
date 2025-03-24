import React from 'react';
import InteractiveBrainstorming from './InteractiveBrainstorming'
import { FaBrain, FaSearch, FaChartBar, FaLightbulb, FaCommentAlt, FaRegChartBar, FaUserAlt } from 'react-icons/fa';

const BrainstormingTechniques = () => {
  const techniques = [
    {
      name: 'Mind Mapping',
      icon: <FaBrain className="text-4xl text-blue-500" />,
      description:
        'Mind Mapping is a visual technique that helps organize ideas and see relationships between concepts. It allows product teams to brainstorm and explore ideas more creatively.',
      example:
        'Example: Creating a mind map for a new mobile app to explore features, target users, and design.',
    },
    {
      name: 'SWOT Analysis',
      icon: <FaSearch className="text-4xl text-green-500" />,
      description:
        'SWOT Analysis is a structured approach for identifying the Strengths, Weaknesses, Opportunities, and Threats of your product or market. This helps you evaluate potential opportunities and challenges.',
      example:
        'Example: Using SWOT to evaluate a new e-commerce website against competitors.',
    },
    {
      name: 'SCAMPER',
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      description:
        'SCAMPER is a creative thinking method that helps to enhance or adapt existing products. It encourages you to Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, and Reverse.',
      example:
        'Example: SCAMPER applied to a smartphone app could include adding new features or modifying the user interface.',
    },
    {
      name: '5 Whys',
      icon: <FaCommentAlt className="text-4xl text-red-500" />,
      description:
        'The 5 Whys technique involves asking "Why?" five times to explore the root cause of a problem. This helps uncover underlying issues that need to be addressed in product development.',
      example:
        'Example: Asking "Why is our app crashing?" and following up to discover a memory leak as the root cause.',
    },
    {
      name: 'Customer Feedback & Surveys',
      icon: <FaUserAlt className="text-4xl text-purple-500" />,
      description:
        'Gathering feedback directly from customers helps identify pain points and needs, leading to product improvements and ensuring the product meets the market demand.',
      example:
        'Example: Using surveys to understand customer preferences for a new food delivery app.',
    },
    {
      name: 'Competitor Analysis',
      icon: <FaChartBar className="text-4xl text-teal-500" />,
      description:
        'Competitor Analysis involves studying existing products in the market to identify gaps and opportunities. Understanding what competitors are offering helps you create a unique value proposition.',
      example:
        'Example: Analyzing existing fitness apps to find a gap in offering personalized workout plans.',
    },
    {
      name: 'Role Storming',
      icon: <FaRegChartBar className="text-4xl text-orange-500" />,
      description:
        'Role Storming encourages you to assume different roles, such as a customer, investor, or competitor, to think creatively and come up with ideas from diverse perspectives.',
      example:
        'Example: A product manager assuming the role of a customer to explore pain points when using their product.',
    },
    {
      name: 'Brainwriting',
      icon: <FaUserAlt className="text-4xl text-indigo-500" />,
      description:
        'Brainwriting is a technique where team members write down ideas instead of speaking them out. This ensures everyone gets to contribute equally, making it great for quiet or remote teams.',
      example:
        'Example: A product team uses brainwriting to come up with new features for a website redesign.',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Effective Brainstorming Techniques for Product Identification</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techniques.map((technique, index) => (
          <div key={index} className="bg-white p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-4">{technique.icon}</div>
            <h3 className="text-xl font-semibold text-center mb-2">{technique.name}</h3>
            <p className="text-gray-700 text-sm mb-4">{technique.description}</p>
            <p className="text-gray-500 text-xs italic">{technique.example}</p>
          </div>
        ))}
      </div>
      <InteractiveBrainstorming/>
    </div>
  );
};

export default BrainstormingTechniques;
