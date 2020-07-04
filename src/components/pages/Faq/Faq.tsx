import React from 'react';

export interface FaqProps {
  /** Example Faq property. */
  exampleFaq?: string;
}

/**
 * Frequently asked questions page
 */
export const Faq: React.FC<FaqProps> = ({ ...props }) => {
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>Frequently Asked Questions</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              erat lacus, venenatis vitae volutpat mollis, vehicula ut lorem.
              Aliquam augue elit, mattis eget dapibus in, maximus et nisl. Fusce
              ac leo sit amet ipsum mollis blandit. Duis vel posuere massa.
              Nullam sodales dolor eu ligula finibus convallis.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
