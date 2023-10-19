import React from 'react';
import ReactMarkdown from 'react-markdown';

import aboutData from 'assets/content/pages/about.json';

/**
 * About compass glass
 */
export const About: React.FC = () => {
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>{aboutData.title}</h1>
            {/* @ts-ignore */}
            <ReactMarkdown source={aboutData.content} />
          </div>
        </div>
      </div>
    </div>
  );
};
