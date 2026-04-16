import React, { ReactNode } from 'react';
// import { HelmetProvider } from 'react-helmet-async'; // Not needed for Next.js

/**
 * Wrapper component that contains all context providers
 */
export interface GlobalProvidersProps {
  children: ReactNode;
}

export const GlobalProviders: React.FC<GlobalProvidersProps> = ({ children }) => {
  return (
    <div className="global-providers">
      {/* Metadata handled by Next.js */}
      {/* Removed HelmetProvider as it's not needed in Next.js */}
      {children}
    </div>
  );
};
