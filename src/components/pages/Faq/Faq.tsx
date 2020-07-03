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
    <div className="section home-section">
      <div className="page container">
        <div className="hero">
          <h1>Frequently Asked Questions</h1>
          <p>
            Compass Glass (Pty) Ltd was established in 2008 at our premises in
            Brackenrite Business Park situated in Brackenfell, Cape Town and is
            a wholly-owned subsidiary of{' '}
            <a href="http://mazor.co.za/">The Mazor Group</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
