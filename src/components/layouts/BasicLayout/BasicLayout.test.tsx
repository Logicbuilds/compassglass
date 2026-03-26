import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

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

  const { container } = render(
    <HelmetProvider>
      <BasicLayout headMeta={headMeta}>
        <div>Test Content</div>
      </BasicLayout>
    </HelmetProvider>
  );
  expect(container).toBeInTheDocument();
});
