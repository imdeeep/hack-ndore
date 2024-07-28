"use client";
import React, { useState, useEffect } from 'react';
import { FaSearch, FaPlus, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Office = () => {
  const [office, setOffice] = useState("office");
  const [offices, setOffices] = useState([]);
  const [assets, setAssets] = useState([]);
  const [showOfficeForm, setShowOfficeForm] = useState(false);
  const [showAssetForm, setShowAssetForm] = useState(false);

  useEffect(() => {
    if (office === "office") {
      fetchOffices();
    } else {
      fetchAssets();
    }
  }, [office]);

  const fetchOffices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/offices');
      setOffices(response.data);
    } catch (error) {
      console.error('Error fetching offices', error);
    }
  };

  const fetchAssets = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/assets');
      setAssets(response.data);
    } catch (error) {
      console.error('Error fetching assets', error);
    }
  };

  const handleOfficeFormToggle = () => setShowOfficeForm(!showOfficeForm);
  const handleAssetFormToggle = () => setShowAssetForm(!showAssetForm);

  const handleOfficeSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newOffice = Object.fromEntries(formData.entries());
    try {
      await axios.post('http://localhost:5000/api/offices', JSON.stringify(newOffice), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      fetchOffices();
      handleOfficeFormToggle();
    } catch (error) {
      console.error('Error creating office', error);
    }
  };

  const handleAssetSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newAsset = Object.fromEntries(formData.entries());
    try {
      await axios.post('http://localhost:5000/api/assets', JSON.stringify(newAsset), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      fetchAssets();
      handleAssetFormToggle();
    } catch (error) {
      console.error('Error creating asset', error);
    }
  };

  const renderCard = (title, data) => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">{title}</h2>
      {Object.entries(data).map(([key, value]) => (
        <p key={key} className="mb-2">
          <span className="font-semibold">{key}:</span> {typeof value === 'object' ? JSON.stringify(value) : value}
        </p>
      ))}
    </div>
  );

  const renderForm = (title, fields, onSubmit, onClose) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">
            <FaTimes size={24} />
          </button>
        </div>
        <form className="p-6 space-y-4" onSubmit={onSubmit}>
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Create {title}
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button
              onClick={() => setOffice("office")}
              className={`px-4 py-2 rounded-md transition duration-300 ${
                office === "office" ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"
              }`}
            >
              Office
            </button>
            <button
              onClick={() => setOffice("assets")}
              className={`px-4 py-2 rounded-md transition duration-300 ${
                office === "assets" ? "bg-blue-600 text-white" : "bg-white text-blue-600 hover:bg-blue-100"
              }`}
            >
              Assets
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder={`Search for ${office || 'items'}...`}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={office === "office" ? handleOfficeFormToggle : handleAssetFormToggle}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 flex items-center"
            >
              <FaPlus className="mr-2" /> Create {office || 'Item'}
            </button>
          </div>
        </div>

        {office === "office" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) =>
              renderCard(office.name, {
                Employees: office.employees,
                Location: office.location,
                "Budget Allotment": office.budgetAllotment,
                "Budget Spending": office.budgetSpending,
                Rating: office.rating,
              })
            )}
          </div>
        )}

        {office === "assets" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assets.map((asset) =>
              renderCard(asset.name, {
                "Office Name": asset.officeName,
                Employees: asset.employees,
                Location: asset.location,
                "Budget Allotment": asset.budgetAllotment,
                "Budget Spending": asset.budgetSpending,
                Rating: asset.rating,
                "Asset Type": asset.assetType,
              })
            )}
          </div>
        )}

        {!office && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Welcome to Office Management</h2>
            <p className="text-gray-600">Please select an option above to get started.</p>
          </div>
        )}

        {showOfficeForm && renderForm(
          "Office",
          [
            { label: "Office Name", name: "name", type: "text" },
            { label: "Location", name: "location", type: "text" },
            { label: "Budget Allotment", name: "budgetAllotment", type: "number" },
            { label: "Employees", name: "employees", type: "number" },
          ],
          handleOfficeSubmit,
          handleOfficeFormToggle
        )}

        {showAssetForm && renderForm(
          "Asset",
          [
            { label: "Asset Name", name: "name", type: "text" },
            { label: "Office Name", name: "officeName", type: "text" },
            { label: "Budget Allotment", name: "budgetAllotment", type: "number" },
            { label: "Employees", name: "employees", type: "number" },
            { label: "Asset Type", name: "assetType", type: "text" },
          ],
          handleAssetSubmit,
          handleAssetFormToggle
        )}
      </div>
    </div>
  );
};

export default Office;
