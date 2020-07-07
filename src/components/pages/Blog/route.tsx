import React from 'react';
import { RouteConfig } from 'application/models';

export const blogRoute: RouteConfig = {
  name: 'blog',
  layout: {
    component: React.lazy(() =>
      import('components/layouts/BasicLayout/default')
    ),
  },
  route: {
    path: '/blog',
    component: React.lazy(() => import('components/pages/Blog/default')),
  },
  headMeta: {
    title: 'Compass Glass Blog',
    meta: [
      {
        name: 'description',
        content: 'Compass Glass Blog',
      },
    ],
  },
};
