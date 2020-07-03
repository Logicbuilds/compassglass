import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { routes } from 'application/core/router';

import { InitializeRouting } from '../InitializeRouting';
import { GlobalProviders } from '../GlobalProviders';

const Fallback = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <React.Suspense fallback={<Fallback />}>
        <GlobalProviders>
          <InitializeRouting routeConfigs={routes} />
        </GlobalProviders>
      </React.Suspense>
    </Router>
  );
};
