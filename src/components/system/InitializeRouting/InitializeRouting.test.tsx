import React from 'react';
import { render } from '@testing-library/react';
import { InitializeRouting } from './InitializeRouting';

test('renders learn react link', () => {
  const { getByText } = render(<InitializeRouting routes={[]} />);
});
