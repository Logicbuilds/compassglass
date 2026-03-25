import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

/**
 * Wrapper component that contains all context providers
 */
export const GlobalProviders: React.FC = ({ children }) => {
  return (
    <div className="global-providers">
      {/* @ts-ignore */}
      <HelmetProvider>{children}</HelmetProvider>
    </div>
  );
};
