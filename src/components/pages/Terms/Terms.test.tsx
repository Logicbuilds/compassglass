import React from 'react';
import { render } from '@testing-library/react';

import { Terms } from './Terms';

test('should render Terms without exploding', () => {
  const { container } = render(<Terms />);
  expect(container).toBeInTheDocument();
});
