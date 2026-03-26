import React from 'react';
import { render } from '@testing-library/react';

import { GlobalProviders } from './GlobalProviders';

test('should render GlobalProviders without exploding', () => {
  const { container } = render(
    <GlobalProviders>
      <div>Test</div>
    </GlobalProviders>
  );
  expect(container).toBeInTheDocument();
});
