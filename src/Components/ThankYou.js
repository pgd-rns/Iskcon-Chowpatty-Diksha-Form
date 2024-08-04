// ThankYou.js
import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-500 mb-6">Thank You!</h1>
        <p className="text-lg text-center text-gray-700 mb-4">
          Your form has been submitted successfully.
        </p>
        <p className="text-center text-gray-500 mb-6">
          We appreciate your input and will get back to you shortly.
        </p>
        <div className="text-center">
          <Link to="/">
            <button className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
