import React from 'react';
import { RouteConfig } from 'application/models';

export const contactRoute: RouteConfig = {
  name: 'contact',
  layout: {
    component: React.lazy(() =>
      import('components/layouts/BasicLayout/default')
    ),
  },
  route: {
    path: '/contact',
    component: React.lazy(() => import('components/pages/Contact/default')),
  },
  headMeta: {
    title: 'Contact',
    meta: [
      {
        name: 'description',
        content: 'Contact us page',
      },
    ],
  },
};
