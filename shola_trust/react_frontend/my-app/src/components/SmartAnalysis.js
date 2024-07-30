// src/components/SmartAnalysis.js
import React from 'react';

const SmartAnalysis = ({ soil, historicalData }) => (
  <div className="p-4 bg-white rounded shadow-md mt-4">
    <h2 className="text-xl font-bold">Smart Analysis</h2>
    <p className="text-gray-600"><strong>Soil Information:</strong> {soil}</p>
    <p className="text-gray-600"><strong>Historical Data:</strong> {historicalData}</p>
  </div>
);

export default SmartAnalysis;
