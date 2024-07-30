import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardTable = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-image');
      setImages(response.data.data);
    } catch (error) {
      console.error("There was an error fetching the images!", error);
    }
  };

  const handleButtonClick = (id) => {
    // Handle button click (e.g., analysis, delete, etc.)
    console.log(`Button clicked for image with id: ${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="px-4 py-2 text-left">S.No</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Image</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Analysis</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {images.map((image, index) => (
            <tr key={image._id} className="border-b">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{image.name}</td>
              <td className="px-4 py-2">
                <img
                  src={`http://localhost:5000/uploads/${image.image}`}
                  alt={image.name}
                  className="w-24 h-auto"
                />
              </td>
              <td className="px-4 py-2">{image.location}</td>
              <td className="px-4 py-2">{/* Analysis logic can be added here */}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleButtonClick(image._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Action
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;
