import React from 'react';
import { RouteConfig } from 'application/models';

export const termsRoute: RouteConfig = {
  name: 'terms',
  layout: {
    component: React.lazy(
      () => import('components/layouts/BasicLayout/default')
    ),
  },
  route: {
    path: '/terms',
    component: React.lazy(() => import('components/pages/Terms/default')),
  },
  headMeta: {
    title: 'Compass Glass',
    meta: [
      {
        name: 'description',
        content: 'Compass Glass',
      },
    ],
  },
};
