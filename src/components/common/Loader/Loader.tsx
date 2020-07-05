import React, { useState, useEffect } from 'react';

const Fallback = () => {
  return (
    <div className="loading-container">
      <div className="loading"></div>
    </div>
  );
};

/**
 * Loading indicator
 */
export const Loader: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <div>{loading ? <Fallback /> : { children }}</div>;
};
