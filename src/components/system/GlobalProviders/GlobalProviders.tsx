import React, { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';

/**
 * Wrapper component that contains all context providers
 */
export interface GlobalProvidersProps {
  children: ReactNode;
}

export const GlobalProviders: React.FC<GlobalProvidersProps> = ({ children }) => {
  return (
    <div className="global-providers">
      {/* @ts-ignore */}
      <HelmetProvider>{children}</HelmetProvider>
    </div>
  );
};
