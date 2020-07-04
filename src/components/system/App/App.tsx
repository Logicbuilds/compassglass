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

// const Fallback = React.lazy(async () => {
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   return import('./Loader');
// });

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
