import React from 'react';

/**
 * Loading indicator
 */
export const Loader: React.FC = ({ children }) => {
  return (
    <div className="loading-container">
      <div className="loading"></div>
    </div>
  );
};
