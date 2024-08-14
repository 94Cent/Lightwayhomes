import React, { useState } from 'react';
import Hero4 from "./../assets/images/novara-hero-home.jpg";
import Hero5 from "./../assets/images/roman-height-home-hero.jpg";
import Hero6 from "./../assets/images/Nairaland-Banner.jpg";
import Hero7 from "./../assets/images/ambassador.jpg"

const SaveProject = () => {
  const [status, setStatus] = useState('completed');
  const [title, setTitle] = useState('Ajah Palace Hotel');
  const [address, setAddress] = useState('Ajah street ikosi motor way park');
  const [details, setDetails] = useState('upstairs, downstairs, flowers around the...');
  const [pricing, setPricing] = useState('2000 - 3000');
  const [engineer, setEngineer] = useState('Kola-Wole Christwealth');
  const [pictures, setPictures] = useState([Hero4, Hero5, Hero6, Hero7]);

  const handleFileChange = (event) => {
    setPictures(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('status', status);
    formData.append('title', title);
    formData.append('address', address);
    formData.append('details', details);
    formData.append('pricing', pricing);
    formData.append('engineer', engineer);
    formData.append('pictures', pictures);
    // for (let i = 0; i < pictures.length; i++) {
    //   formData.append('pictures[]', pictures[i]);
    // }

    fetch('https://backend.lightway.com.ng/controller/project.php?action=save_project', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('Project saved successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('There was an error saving the project.');
      });
  };

  return (
    <div className="z-50 relative max-w-lg my-24 mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Save Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Details</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Pricing</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Engineer</label>
          <input
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            value={engineer}
            onChange={(e) => setEngineer(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Pictures</label>
          <input
            type="file"
            multiple
            className="mt-1 block w-full text-gray-700 border border-gray-300 rounded-md"
            onChange={handleFileChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple text-white py-2 px-4 rounded-md hover:bg-purple-700"
        >
          Save Project
        </button>
      </form>
    </div>
  );
};

export default SaveProject;
