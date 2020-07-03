import React from 'react';

export interface TechnicalProps {
  /** Example Technical property. */
  exampleTechnical?: string;
}

/**
 * Technical inforamatioin about related topics
 */
export const Technical: React.FC<TechnicalProps> = ({ ...props }) => {
  return (
    <div className="technical section">
      <h1>Technical</h1>
    </div>
  );
};
