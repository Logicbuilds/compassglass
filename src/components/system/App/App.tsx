import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { routes } from 'application/core/router';

import { InitializeRouting } from '../InitializeRouting';
import { GlobalProviders } from '../GlobalProviders';

const Fallback = () => {
  return (
    <div className="loading-container">
      <div className="loading"></div>
    </div>
  );
};

// const Fallback = React.lazy(() => {
//   new Promise((resolve) => setTimeout(resolve, 500));
//   return import('components/common/Loader/default');
// });

export const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Fallback />}>
      <Router>
        <GlobalProviders>
          <InitializeRouting routeConfigs={routes} />
        </GlobalProviders>
      </Router>
    </React.Suspense>
  );
};
