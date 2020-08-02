import React from 'react';
import { render } from '@testing-library/react';

import { MapFrame } from './MapFrame';

test('should render MapFrame without exploding', () => {
  const { container } = render(<MapFrame city="george" />);
  expect(container).toBeInTheDocument();
});
