// src/App.js
import React, { useState } from 'react';
import User from './components/User';
import NGO from './components/NGO';
import SmartAnalysis from './components/SmartAnalysis';

const App = () => {
  const [showNGO, setShowNGO] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleNGOButtonClick = () => setShowNGO(true);
  const handleAnalysisButtonClick = () => setShowAnalysis(true);
  const handleAccept = () => alert('Accepted');
  const handleReject = () => alert('Rejected');

  const user = {
    name: "John Doe",
    location: { latitude: "40.7128", longitude: "-74.0060" },
    image: "https://via.placeholder.com/150"
  };

  const ngoDetails = {
    name: "Helping Hands NGO",
    details: "Helping Hands is a non-profit organization focused on community welfare."
  };

  const analysisDetails = {
    soil: "Loamy soil suitable for agriculture",
    historicalData: "Area has a history of moderate rainfall and stable temperatures"
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <User {...user} />
      <div className="flex space-x-4 mt-4">
        <button 
          onClick={handleNGOButtonClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Show NGO
        </button>
        <button 
          onClick={handleAnalysisButtonClick} 
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Smart Analysis
        </button>
      </div>
      {showNGO && (
        <NGO 
          {...ngoDetails}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
      {showAnalysis && <SmartAnalysis {...analysisDetails} />}
    </div>
  );
}

export default App;
