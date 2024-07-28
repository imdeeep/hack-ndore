import React from 'react';

const OverviewAndServices = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Overview Section */}
          <div className="lg:w-1/2 p-6">
            <h2 className="text-center text-2xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              OVERVIEW
            </h2>
            <p className="text-center text-gray-700 text-lg lg:text-xl leading-relaxed">
              Indore Municipal Corporation (IMC) is the governing body of the city of Indore in the Indian state of Madhya Pradesh. 
              The municipal corporation consists of democratically elected members, is headed by a mayor and administers the city’s 
              infrastructure and public services. Members from the state’s leading various political parties hold elected offices 
              in the corporation. It is the richest Municipal corporation in terms of revenue generated in the state of Madhya Pradesh.
            </p>
          </div>

          {/* Online Services Section */}
          <div className="lg:w-1/2 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-center text-2xl lg:text-4xl font-extrabold text-gray-900 mb-6">
              ONLINE SERVICES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service Item */}
              <div className="flex flex-col items-center text-center">
                <div className="p-1 bg-blue-100 rounded-full mb-4">
                  <img src="https://imgs.search.brave.com/yDWLOwZf1ePf8Vew5vGdYh9tLpuC9SJjptsW7p03_kY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NDgwNzQzOS9waG90/by9mYW1pbHktc29y/dGluZy1vdXQtd2Fz/dGUtZm9yLXJlY3lj/bGluZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9M1RBanR5/WTd3MGprX0pYd3dH/LTFscVJJeTlsYmxv/SkEyNTBTbDZHaGdV/dz0"  alt="SWM" className="w-12 h-12 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">SWM</h3>
                <p className="text-gray-700 mb-4">
                  Indore excels in solid waste management with innovative practices, citizen...
                </p>
                <a href="#" className="text-blue-500 hover:underline">Explore</a>
              </div>

              {/* Service Item */}
              <div className="flex flex-col items-center text-center">
                <div className="p-1 bg-blue-100 rounded-full mb-4">
                  <img src="https://imgs.search.brave.com/_vkT3NdEQ5BKaj8ghJk2XtgRXJXh8u1Q-vqNz_dBkO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzQzNzM4Ni9waG90/by9ob3VzaW5nLWFu/ZC1wcm9wZXJ0eS10/YXgtY29uY2VwdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/My14YnlpU2UwM3I4/MWlwZGRlUVRwbk9G/TEZJekprdGlvN0g0/R3ZtaW51VT0" alt="Property Tax" className="w-12 h-12 rounded-full " />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Property Tax</h3>
                <p className="text-gray-700 mb-4">
                  Indore prioritizes efficient tax management, ensuring fair collection,...
                </p>
                <a href="#" className="text-blue-500 hover:underline">Explore</a>
              </div>

              {/* Service Item */}
              <div className="flex flex-col items-center text-center">
                <div className="p-1 bg-blue-100 rounded-full mb-4">
                  <img src="https://imgs.search.brave.com/tl69luB4b9zcb_quj1aZ85leoEHwlie7J17_zeEeqsM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wb3J0/YWwuMzExLm55Yy5n/b3YvdGF4ZXMuanBn" alt="Water Charges" className="w-12 h-12 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Water Charges</h3>
                <p className="text-gray-700 mb-4">
                  Indore water charges ensure sustainable usage. Fair pricing encourages...
                </p>
                <a href="#" className="text-blue-500 hover:underline">Explore</a>
              </div>

              {/* Service Item */}
              <div className="flex flex-col items-center text-center">
                <div className="p-1 bg-blue-100 rounded-full mb-4">
                  <img src="https://imgs.search.brave.com/3FTjRT9S-RC2iVbj25CPBQMiU1K6RUWmvcJ6jEMR58I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/bW9uZXktaW4tdGhl/LWJhbmsuanBnP3dp/ZHRoPTEwMDAmZm9y/bWF0PXBqcGcmZXhp/Zj0wJmlwdGM9MA" alt="Business" className="w-12 h-12 rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business</h3>
                <p className="text-gray-700 mb-4">
                  Thriving businesses in Indore, the heart of commerce, blend tradition with...
                </p>
                <a href="#" className="text-blue-500 hover:underline">Explore</a>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewAndServices;
