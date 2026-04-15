import React from 'react';
// import ReactMarkdown from 'react-markdown';

import termsData from 'assets/content/pages/terms.json';

/**
 * About compass glass
 */
export const Terms: React.FC = () => {
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>{termsData.title}</h1>
            {/* @ts-ignore */}
            <p>Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
