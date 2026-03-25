import React from 'react';
import ReactMarkdown from 'react-markdown';

import faqData from 'assets/content/pages/faqs.json';

/**
 * Frequently asked questions page
 */
export const Faq: React.FC = () => {
  return (
    <div className="section faq">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>{faqData.title}</h1>
            <div className="faq-container">
              {/* Accordion */}
              <div className="tabs">
                {faqData.content.map((faq, idx) => (
                  <div key={`faq${idx + 1}`} className="tab">
                    {/* Accordion Tab */}
                    <input type="checkbox" id={`faq${idx + 1}`} />
                    <label className="tab-label" htmlFor={`faq${idx + 1}`}>
                      {faq.question}
                    </label>
                    <div className="tab-content">
                      {/* @ts-ignore */}
                      <ReactMarkdown source={faq.answer} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
