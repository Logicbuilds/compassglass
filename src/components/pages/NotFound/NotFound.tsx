import React from 'react';

import { memoized } from 'components/system/utils';

const NotFoundFn: React.FC = () => {
  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <div>:(</div>
      </div>
      <p>The page you're looking for could be found...</p>
    </div>
  );
};

export const NotFound = memoized(NotFoundFn);
