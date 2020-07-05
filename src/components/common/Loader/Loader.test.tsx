import React from 'react';
import { render } from '@testing-library/react';

import { Loader } from './Loader';

test('should render Loader without exploding', () => {
  const { container } = render(<Loader />);
  expect(container).toBeInTheDocument();
});
