import React from 'react';

const tools = [
  {
    category: '📊 Analytics & Insights',
    description: 'Tools to track and understand user behavior, retention, and product performance.',
    items: [
      {
        name: 'Mixpanel',
        link: 'https://mixpanel.com',
        description: 'Event tracking, funnels, retention, cohorts — PM-friendly.',
        useCase: 'Track user interactions like sign-ups or feature usage to optimize onboarding.',
        pros: 'Intuitive UI, great for PMs, detailed funnel analysis.',
        cons: 'Can be pricey for startups, complex for small teams.',
        icon: 'ChartBarIcon',
      },
      {
        name: 'Amplitude',
        link: 'https://amplitude.com',
        description: 'Deeper behavioral analytics and product KPIs.',
        useCase: 'Analyze user retention to identify drop-off points in a product.',
        pros: 'Robust analytics, predictive insights, scalable.',
        cons: 'Steep learning curve, expensive for small businesses.',
        icon: 'ChartPieIcon',
      },
      {
        name: 'Google Analytics 4 (GA4)',
        link: 'https://marketingplatform.google.com/about/analytics/',
        description: 'Website performance, traffic, attribution.',
        useCase: 'Measure website traffic sources to optimize marketing campaigns.',
        pros: 'Free tier, widely used, integrates with Google tools.',
        cons: 'Complex setup, less focus on product analytics.',
        icon: 'GlobeAltIcon',
      },
      {
        name: 'Hotjar',
        link: 'https://hotjar.com',
        description: 'Session recordings and heatmaps to see UX friction.',
        useCase: 'Identify where users struggle on a webpage via heatmaps.',
        pros: 'Visual UX insights, easy to use, affordable.',
        cons: 'Limited advanced analytics, not ideal for large-scale data.',
        icon: 'EyeIcon',
      },
      {
        name: 'Looker',
        link: 'https://looker.com',
        description: 'Data visualization for advanced product insights.',
        useCase: 'Create dashboards to monitor product KPIs across teams.',
        pros: 'Powerful visualizations, customizable, enterprise-ready.',
        cons: 'Expensive, requires technical expertise.',
        icon: 'PresentationChartLineIcon',
      },
      {
        name: 'PostHog',
        link: 'https://posthog.com',
        description: 'Open-source product analytics with session replays.',
        useCase: 'Track user journeys in an open-source app to improve UX.',
        pros: 'Open-source, cost-effective, self-hosted option.',
        cons: 'Setup can be complex, limited support.',
        icon: 'CodeBracketIcon',
      },
    ],
  },
  {
    category: '🧪 Experimentation & A/B Testing',
    description: 'Tools for running controlled tests to validate growth ideas.',
    items: [
      {
        name: 'Optimizely',
        link: 'https://optimizely.com',
        description: 'A/B testing and feature flag management.',
        useCase: 'Test two landing page designs to boost conversions.',
        pros: 'Robust A/B testing, feature flags, enterprise-grade.',
        cons: 'High cost, complex for beginners.',
        icon: 'BeakerIcon',
      },
      {
        name: 'VWO',
        link: 'https://vwo.com',
        description: 'Web-based A/B testing, easy to implement.',
        useCase: 'Run A/B tests on CTAs to increase click-through rates.',
        pros: 'User-friendly, quick setup, affordable plans.',
        cons: 'Limited advanced features, web-only focus.',
        icon: 'AdjustmentsHorizontalIcon',
      },
      {
        name: 'LaunchDarkly',
        link: 'https://launchdarkly.com',
        description: 'Feature flags with experimentation at scale.',
        useCase: 'Roll out new features to specific user segments safely.',
        pros: 'Scalable, great for devs, robust feature flags.',
        cons: 'Expensive, less focus on A/B testing.',
        icon: 'FlagIcon',
      },
      {
        name: 'Split.io',
        link: 'https://split.io',
        description: 'Data-driven feature experimentation platform.',
        useCase: 'Test new feature impacts on user engagement metrics.',
        pros: 'Developer-friendly, scalable, reliable.',
        cons: 'Complex setup, higher cost for small teams.',
        icon: 'ArrowsPointingOutIcon',
      },
    ],
  },
  {
    category: '📬 User Engagement & Retention',
    description: 'Tools for messaging, emails, push notifications, and in-app prompts.',
    items: [
      {
        name: 'Braze',
        link: 'https://braze.com',
        description: 'Multi-channel lifecycle engagement.',
        useCase: 'Send targeted emails to re-engage inactive users.',
        pros: 'Multi-channel, automation, scalable.',
        cons: 'Expensive, steep learning curve.',
        icon: 'EnvelopeIcon',
      },
      {
        name: 'Customer.io',
        link: 'https://customer.io',
        description: 'Automated customer messaging based on behavior.',
        useCase: 'Trigger emails based on user actions like cart abandonment.',
        pros: 'Behavior-based automation, flexible, affordable.',
        cons: 'Less robust for non-email channels.',
        icon: 'ChatBubbleLeftRightIcon',
      },
      {
        name: 'OneSignal',
        link: 'https://onesignal.com',
        description: 'Push notifications (web and mobile).',
        useCase: 'Send push notifications to remind users of new features.',
        pros: 'Free tier, easy setup, cross-platform.',
        cons: 'Limited to notifications, basic analytics.',
        icon: 'BellIcon',
      },
      {
        name: 'Intercom',
        link: 'https://intercom.com',
        description: 'In-app messaging and onboarding support.',
        useCase: 'Guide new users with in-app onboarding messages.',
        pros: 'Great UX, live chat, onboarding tools.',
        cons: 'Costly for small teams, complex setup.',
        icon: 'ChatBubbleBottomCenterTextIcon',
      },
      {
        name: 'Mailchimp',
        link: 'https://mailchimp.com',
        description: 'Email marketing automation for growth funnels.',
        useCase: 'Automate email campaigns for user acquisition.',
        pros: 'User-friendly, affordable, great templates.',
        cons: 'Limited beyond email, basic analytics.',
        icon: 'MailIcon',
      },
    ],
  },
  {
    category: '🎯 CRM & User Segmentation',
    description: 'Tools to track, segment, and manage user interactions.',
    items: [
      {
        name: 'HubSpot',
        link: 'https://hubspot.com',
        description: 'CRM with marketing and automation tools.',
        useCase: 'Segment users for targeted marketing campaigns.',
        pros: 'All-in-one, free tier, easy to use.',
        cons: 'Expensive at scale, limited customization.',
        icon: 'UserGroupIcon',
      },
      {
        name: 'Segment',
        link: 'https://segment.com',
        description: 'Customer data platform for routing analytics.',
        useCase: 'Centralize user data for analytics across tools.',
        pros: 'Integrates with many tools, scalable, reliable.',
        cons: 'Complex setup, costly for startups.',
        icon: 'PuzzlePieceIcon',
      },
      {
        name: 'Salesforce',
        link: 'https://salesforce.com',
        description: 'Enterprise CRM for large-scale teams.',
        useCase: 'Manage enterprise customer relationships at scale.',
        pros: 'Highly customizable, enterprise-ready, robust.',
        cons: 'Very expensive, steep learning curve.',
        icon: 'BuildingOfficeIcon',
      },
    ],
  },
  {
    category: '🧠 User Research & Feedback',
    description: 'Tools to understand user motivations and issues via testing and surveys.',
    items: [
      {
        name: 'Maze',
        link: 'https://maze.co',
        description: 'Rapid usability testing and feedback.',
        useCase: 'Test prototypes to identify usability issues early.',
        pros: 'Fast, integrates with design tools, affordable.',
        cons: 'Limited for complex studies, basic reporting.',
        icon: 'LightBulbIcon',
      },
      {
        name: 'Typeform',
        link: 'https://typeform.com',
        description: 'Beautiful and user-friendly surveys.',
        useCase: 'Create surveys to gather user feedback on features.',
        pros: 'Stylish, easy to use, mobile-friendly.',
        cons: 'Limited free tier, basic analytics.',
        icon: 'ClipboardDocumentListIcon',
      },
      {
        name: 'UsabilityHub',
        link: 'https://usabilityhub.com',
        description: 'Remote user testing platform.',
        useCase: 'Run quick preference tests for UI designs.',
        pros: 'Fast results, affordable, easy to use.',
        cons: 'Limited test types, small user pool.',
        icon: 'MagnifyingGlassIcon',
      },
      {
        name: 'Survicate',
        link: 'https://survicate.com',
        description: 'Micro-surveys embedded in your product.',
        useCase: 'Embed surveys to collect in-app user feedback.',
        pros: 'In-app integration, lightweight, affordable.',
        cons: 'Limited for large-scale research, basic design.',
        icon: 'QuestionMarkCircleIcon',
      },
      {
        name: 'Dovetail',
        link: 'https://dovetailapp.com',
        description: 'User research repository and analysis.',
        useCase: 'Store and analyze user interview data for insights.',
        pros: 'Great for qualitative data, collaborative, organized.',
        cons: 'Niche focus, expensive for small teams.',
        icon: 'DocumentTextIcon',
      },
    ],
  },
  {
    category: '🤝 Collaboration & Roadmapping',
    description: 'Tools to align teams, experiments, and plan product growth.',
    items: [
      {
        name: 'Figma',
        link: 'https://figma.com',
        description: 'Collaborative product and UI design.',
        useCase: 'Collaborate with designers on UI prototypes.',
        pros: 'Real-time collaboration, versatile, free tier.',
        cons: 'Learning curve for non-designers, web-based.',
        icon: 'PaintBrushIcon',
      },
      {
        name: 'Notion',
        link: 'https://notion.so',
        description: 'Docs, databases, and wikis for PMs.',
        useCase: 'Create a product wiki for team alignment.',
        pros: 'Flexible, user-friendly, great for docs.',
        cons: 'Can get cluttered, limited offline support.',
        icon: 'BookOpenIcon',
      },
      {
        name: 'Trello',
        link: 'https://trello.com',
        description: 'Visual kanban boards for task tracking.',
        useCase: 'Manage sprint tasks with a kanban board.',
        pros: 'Simple, visual, free tier.',
        cons: 'Limited for complex projects, basic features.',
        icon: 'ViewColumnsIcon',
      },
      {
        name: 'Aha!',
        link: 'https://aha.io',
        description: 'Product planning and roadmapping suite.',
        useCase: 'Plan and share product roadmaps with stakeholders.',
        pros: 'Robust roadmapping, integrates well, PM-focused.',
        cons: 'Expensive, complex for small teams.',
        icon: 'MapIcon',
      },
    ],
  },
  {
    category: '⚒️ Technical Skills & Tools (Bonus)',
    description: 'Foundational tech skills every Growth PM should explore.',
    items: [
      {
        name: 'SQL',
        link: '#',
        description: 'Query user and product data directly from databases.',
        useCase: 'Query user data to analyze feature adoption rates.',
        pros: 'Powerful, widely used, precise data access.',
        cons: 'Requires learning, no UI for beginners.',
        icon: 'CommandLineIcon',
      },
      {
        name: 'Excel / Google Sheets',
        link: '#',
        description: 'Model CAC/LTV and track growth KPIs.',
        useCase: 'Calculate customer acquisition cost for campaigns.',
        pros: 'Accessible, flexible, widely used.',
        cons: 'Limited for large datasets, manual errors.',
        icon: 'TableCellsIcon',
      },
      {
        name: 'Google Tag Manager',
        link: 'https://tagmanager.google.com',
        description: 'Manage tracking without engineering support.',
        useCase: 'Add tracking codes for marketing campaigns.',
        pros: 'No coding needed, integrates with GA4, free.',
        cons: 'Complex for advanced setups, limited scope.',
        icon: 'TagIcon',
      },
      {
        name: 'HTML/JS',
        link: '#',
        description: 'Basics to work closely with devs and marketing.',
        useCase: 'Tweak landing page code for quick tests.',
        pros: 'Empowers PMs, widely applicable, flexible.',
        cons: 'Requires learning, not PM-focused.',
        icon: 'CodeBracketSquareIcon',
      },
    ],
  },
];

export default function GrowthPMTools() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
        🧰 Growth PM Toolset
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        A curated list of tools to help product managers drive growth, with use cases, pros, and cons to make your work easier.
      </p>
      <div className="space-y-8">
        {tools.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{section.category}</h2>
            <p className="text-gray-600 mb-6">{section.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((tool, i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center mb-3">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={
                          tool.icon === 'ChartBarIcon'
                            ? 'M3 3h18M3 12h18M3 21h18'
                            : tool.icon === 'ChartPieIcon'
                            ? 'M11 3.1A9 9 0 002 12a9 9 0 0011 8.9 9 9 0 009-9 9 9 0 00-9-9zm0 16.9A7.9 7.9 0 013.1 12 7.9 7.9 0 0111 4.1a7.9 7.9 0 017.9 7.9 7.9 7.9 0 01-7.9 7.9zM12 12V3.1'
                            : tool.icon === 'GlobeAltIcon'
                            ? 'M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.3v1.7M12 12a2.3 2.3 0 100-4.6 2.3 2.3 0 000 4.6zm0 0v-9'
                            : tool.icon === 'EyeIcon'
                            ? 'M15 12a3 3 0 11-6 0 3 3 0 016 0zm2.2 0c0 4-7.2 7.2-7.2 7.2S4.8 16 4.8 12 12 4.8 12 4.8 19.2 8 19.2 12z'
                            : tool.icon === 'PresentationChartLineIcon'
                            ? 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
                            : tool.icon === 'CodeBracketIcon'
                            ? 'M10 20l4-16m4 4l4 4-4 4M6 12l-4 4 4 4'
                            : tool.icon === 'BeakerIcon'
                            ? 'M19 14l-7 7m0 0l-7-7m7 7V3'
                            : tool.icon === 'AdjustmentsHorizontalIcon'
                            ? 'M6 10h4m4 0h4M6 14h4m4 0h4M3 3h18v18H3V3z'
                            : tool.icon === 'FlagIcon'
                            ? 'M3 3h18v6H3zm0 8h18v10H3z'
                            : tool.icon === 'ArrowsPointingOutIcon'
                            ? 'M3 3h18v18H3zm4 4l-4 4 4 4m10-8l4-4-4-4'
                            : tool.icon === 'EnvelopeIcon'
                            ? 'M3 8l9 6 9-6m-18 0v10h18V8H3z'
                            : tool.icon === 'ChatBubbleLeftRightIcon'
                            ? 'M20 6H4a2 2 0 00-2 2v10a2 2 0 002 2h6l3 3 3-3h4a2 2 0 002-2V8a2 2 0 00-2-2z'
                            : tool.icon === 'BellIcon'
                            ? 'M15 17h5l-1.4-1.4M9 17H4l1.4-1.4M12 3v2m-4 4h8m-8 4h8'
                            : tool.icon === 'ChatBubbleBottomCenterTextIcon'
                            ? 'M3 6h18v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm6 8h6'
                            : tool.icon === 'MailIcon'
                            ? 'M3 8l9 6 9-6m-18 0v10h18V8H3z'
                            : tool.icon === 'UserGroupIcon'
                            ? 'M12 4a4 4 0 100 8 4 4 0 000-8zm-7 7a4 4 0 100 8 4 4 0 000-8zm14 0a4 4 0 100 8 4 4 0 000-8z'
                            : tool.icon === 'PuzzlePieceIcon'
                            ? 'M7 3h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z'
                            : tool.icon === 'BuildingOfficeIcon'
                            ? 'M3 3h18v18H3zm4 4h10v4H7zm0 6h10v4H7z'
                            : tool.icon === 'LightBulbIcon'
                            ? 'M12 2a7 7 0 00-7 7c0 2.8 1.6 5.2 4 6.3V18h6v-2.7c2.4-1.1 4-3.5 4-6.3a7 7 0 00-7-7zm0 18v2'
                            : tool.icon === 'ClipboardDocumentListIcon'
                            ? 'M9 2h6v2H9zm0 4h6v14H9V6zm-2 0H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-2'
                            : tool.icon === 'MagnifyingGlassIcon'
                            ? 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            : tool.icon === 'QuestionMarkCircleIcon'
                            ? 'M12 4a8 8 0 100 16 8 8 0 000-16zm0 12h-1v-1h1v1zm0-2h-1v-4h1v4z'
                            : tool.icon === 'DocumentTextIcon'
                            ? 'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm2 4h10v2H7zm0 4h10v2H7zm0 4h7v2H7z'
                            : tool.icon === 'PaintBrushIcon'
                            ? 'M7 3h10l-5 5-5-5zm0 10l5 5 5-5H7z'
                            : tool.icon === 'BookOpenIcon'
                            ? 'M3 5h18v14H3zm2 2h14v10H5z'
                            : tool.icon === 'ViewColumnsIcon'
                            ? 'M3 3h18v18H3zm6 0v18m6-18v18'
                            : tool.icon === 'MapIcon'
                            ? 'M3 12l9-9 9 9v9H3zm2 2h14v5H5z'
                            : tool.icon === 'CommandLineIcon'
                            ? 'M3 6h18v12H3zm2 2h14v8H5z'
                            : tool.icon === 'TableCellsIcon'
                            ? 'M3 3h18v18H3zm6 0v18m6-18v18m-12 6h18m-18 6h18'
                            : tool.icon === 'TagIcon'
                            ? 'M17 3H7l-7 7 7 7h10l7-7-7-7zm-5 5h2v2h-2V8z'
                            : 'M3 3h18v18H3zm6 0v18m6-18v18'
                        }
                      />
                    </svg>
                    <a
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-blue-600 hover:underline"
                    >
                      {tool.name}
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                  <p className="text-sm text-gray-800">
                    <span className="font-semibold">Use Case:</span> {tool.useCase}
                  </p>
                  <p className="text-sm text-green-600">
                    <span className="font-semibold">Pros:</span> {tool.pros}
                  </p>
                  <p className="text-sm text-red-600">
                    <span className="font-semibold">Cons:</span> {tool.cons}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}