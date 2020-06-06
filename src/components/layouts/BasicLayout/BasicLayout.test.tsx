import React from 'react';
import { render } from '@testing-library/react';

import { BasicLayout } from './BasicLayout';

test('should render BasicLayout without exploding', () => {
  const headMeta = {
    title: 'TestBasicLayout',
    meta: [
      {
        name: 'description',
        content: 'TestBasicLayout description',
      },
    ],
  };

  const { container } = render(<BasicLayout headMeta={headMeta} />);
  expect(container).toBeInTheDocument();
});
