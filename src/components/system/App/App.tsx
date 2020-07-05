import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { routes } from 'application/core/router';

import { InitializeRouting } from '../InitializeRouting';
import { GlobalProviders } from '../GlobalProviders';
import { Loader } from 'components/common/Loader';

export const App: React.FC = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <GlobalProviders>
          <InitializeRouting routeConfigs={routes} />
        </GlobalProviders>
      </Router>
    </React.Suspense>
  );
};
