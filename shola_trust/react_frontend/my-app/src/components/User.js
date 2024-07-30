// src/components/User.js
import React from 'react';

const User = ({ name, location, image }) => (
  <div className="p-4 bg-white rounded shadow-md">
    <img src={image} alt={`${name}'s avatar`} className="w-32 h-32 rounded-full mb-4" /> {/* Increased size */}
    <h2 className="text-xl font-bold">{name}</h2>
    <p className="text-gray-600">Location: {location.latitude}, {location.longitude}</p> {/* Lat, Long format */}
  </div>
);

export default User;
