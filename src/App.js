// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenteeList from './component/MenteeList';
import MenteeForm from './component/MenteeForm';
import HomePage from './component/HomePage';
import TPM from './component/TPM'; // Import HomePage
import Masterclass from './component/Masterclass';
//import Dashboard from './component/Dashboard';
import Git from './component/Version Control/Github'
import BEArchitecture from './component/Version Control/BEArchitecture'
import LoadBalancingComponent from './component/Version Control/LoadBalancingComponent';
import DataPipeline from './component/Version Control/DataPipeline'
import Security from './component/Version Control/Security';
import Microservices from './component/Version Control/Microservices'
import Dashboard from './component/Version Control/Dashboard'
import DatabaseComparison from './component/LessonTwo/DatabaseComparison'
import CompareDatabase from './component/LessonTwo/CompareDatabase'
import AgileMethodologyComponent from './component/LessonTwo/AgileMethodologyComponent'
import RiskManagementComponent from './component/LessonTwo/RiskManagementComponent'
import FeatureFeasibilityComponent from './component/LessonTwo/FeatureFeasibilityComponent'
import MonitoringMetrics from './component/LessonTwo/MonitoringMetrics'
import CostManagement from './component/LessonTwo/CostManagement'
import CustomerJourneyMapping from './component/LessonTwo/CustomerJourneyMapping'
import UserFlowsAndDesign from './component/LessonTwo/UserFlowsAndDesign'
import Dashboard2 from './component/LessonTwo/Dashboard2'
import ProductAnalysis from './component/Product Analytics/ProductAnalysis'
import UnderstandingProductAnalysis from './component/Product Analytics/UnderstandingProductAnalysis'
import DatabaseIndexing from './component/LessonTwo/DatabaseIndexing'
import DatabaseNormalization from './component/LessonTwo/DatabaseNormalization'
import DatabaseOptimization from './component/LessonTwo/DatabaseOptimization'
import Dashboard3 from './component/Product Analytics/Dashboard3'
import GenDashbaord from './component/GenDashboard/GenDashbaord'
import BlueOceanStrategy from './component/BlueOceanStrategy'
import SprintSimulator from './component/SprintSimulator'
import Simulate from './component/Version Control/Simulate'
import Dashboard4 from './component/Contents/Dashboard4'
import PRD from './component/InternPulsePRDClass'
import Dashboard5 from './component/Dashboard5'
import Inventory from './component/Inventory'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route to HomePage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/tpm" element={<TPM />} />

        {/* Route to show MenteeForm */}
        <Route path="/add-mentee" element={<MenteeForm />} />

        {/* Route to show MenteeList */}
        <Route path="/mentees" element={<MenteeList />} />
        <Route path="/masterclass" element={<Masterclass />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/git" element={<Git/>} />
        <Route path="/architecture" element={<BEArchitecture/>} />
        <Route path="/load" element={<LoadBalancingComponent/>} />
        <Route path="/datapipeline" element={<DataPipeline/>} />
        <Route path="/security" element={<Security/>} />
        <Route path="/micro" element={<Microservices/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/database" element={<DatabaseComparison/>} />
        <Route path="/compare" element={<CompareDatabase/>} />
        <Route path="/agile" element={<AgileMethodologyComponent/>} />
        <Route path="/risk" element={<RiskManagementComponent/>} />
        <Route path="/feasibility" element={<FeatureFeasibilityComponent/>} />
        <Route path="/metrics" element={<MonitoringMetrics/>} />
        <Route path="/cost" element={<CostManagement/>} />
        <Route path="/mapping" element={<CustomerJourneyMapping/>} />
        <Route path="/userflow" element={<UserFlowsAndDesign/>} />
        <Route path="/dashboard2" element={<Dashboard2/>} />
        <Route path="/prodanalysis" element={<ProductAnalysis/>} />
        <Route path="/understandanalysis" element={<UnderstandingProductAnalysis/>} />
        <Route path="/indexing" element={<DatabaseIndexing/>} />
        <Route path="/normalization" element={<DatabaseNormalization/>} />
        <Route path="/optimization" element={<DatabaseOptimization/>} />
        <Route path="/Dashboard3" element={<Dashboard3/>} />
        <Route path="/gendash" element={<GenDashbaord/>} />
        <Route path="/blue" element={<  BlueOceanStrategy/>} />
        <Route path="/sprints" element={<  SprintSimulator/>} />
        <Route path="/dashboard4" element={<Dashboard4/>} />
        <Route path="/simulate" element={<Simulate/>} />
        <Route path="/prd" element={<PRD/>} />
        <Route path="/dashboard5" element={<Dashboard5/>} />
        <Route path="/inventory" element={<Inventory/>} />
       
        
        

        
      </Routes>
    </Router>
  );
};

export default App;
