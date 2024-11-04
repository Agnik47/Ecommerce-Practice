import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-gray-900 z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full opacity-75 animate-spin"></div>
        <div className="absolute inset-2 bg-gray-900 rounded-full border-4 border-gray-800"></div>
      </div>
    </div>
  );
};

export default Loader;
