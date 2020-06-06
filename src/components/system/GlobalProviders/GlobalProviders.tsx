import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { ProvideNotify } from 'application/modules/notify';

/**
 * Wrapper component that contains all context providers
 */
export const GlobalProviders: React.FC = ({ children }) => {
  return (
    <div className="global-providers">
      <ProvideNotify>
        <HelmetProvider>{children}</HelmetProvider>
      </ProvideNotify>
    </div>
  );
};
