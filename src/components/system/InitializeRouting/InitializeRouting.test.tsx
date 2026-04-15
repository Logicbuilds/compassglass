import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { InitializeRouting } from './InitializeRouting';

test('renders learn react link', () => {
  const { container } = render(
    <BrowserRouter>
      <InitializeRouting routeConfigs={[]} />
    </BrowserRouter>
  );
  expect(container).toBeInTheDocument();
});
