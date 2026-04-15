import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Button } from './Button';

test('should render Button without exploding', () => {
  const { container } = render(
    <BrowserRouter>
      <Button redirect="/">Hello Button</Button>
    </BrowserRouter>
  );
  expect(container).toBeInTheDocument();
});
