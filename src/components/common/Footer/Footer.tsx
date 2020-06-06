import React from 'react';

export interface FooterProps {
  /** Example Footer property. */
  exampleFooter?: string;
}

/**
 * Footer component
 */
export const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <div className="footer">
      <p>
        &copy; Copyright Compass Glass {new Date().getFullYear()}. All right
        reserved
      </p>
    </div>
  );
};
