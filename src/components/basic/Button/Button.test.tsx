import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

test('should render Button without exploding', () => {
  const { container } = render(<Button />);
  expect(container).toBeInTheDocument();
});
