// src/components/NGO.js
import React from 'react';

const NGO = ({ name, location, contact, onAccept, onReject }) => (
  <div className="p-4 bg-white rounded shadow-md mt-4">
    <h2 className="text-xl font-bold mb-4">NGO Details</h2>
    <table className="min-w-full bg-white border">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 border">NGO Name</th>
          <th className="px-4 py-2 border">Location</th>
          <th className="px-4 py-2 border">Contact Number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border">{name}</td>
          <td className="px-4 py-2 border">{location}</td>
          <td className="px-4 py-2 border">{contact}</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-4">
      <button onClick={onAccept} className="bg-green-500 text-white px-4 py-2 rounded mr-2">Accept</button>
      <button onClick={onReject} className="bg-red-500 text-white px-4 py-2 rounded">Reject</button>
    </div>
  </div>
);

export default NGO;
