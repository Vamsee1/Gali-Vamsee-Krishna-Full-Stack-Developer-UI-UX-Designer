
import React from 'react';

const Loader3D = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-transparent border-t-blue-400 border-r-purple-400 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-purple-400 border-r-blue-400 rounded-full animate-spin animation-delay-75"></div>
          <div className="absolute inset-4 border-4 border-transparent border-t-blue-300 border-r-purple-300 rounded-full animate-spin animation-delay-150"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Loading Portfolio</h2>
        <div className="flex space-x-2 justify-center">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-75"></div>
          <div className="w-3 h-3 bg-blue-300 rounded-full animate-bounce animation-delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader3D;
