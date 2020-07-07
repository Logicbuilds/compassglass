import React from 'react';
import { RouteConfig } from 'application/models';

export const faqRoute: RouteConfig = {
  name: 'faq',
  layout: {
    component: React.lazy(() =>
      import('components/layouts/BasicLayout/default')
    ),
  },
  route: {
    path: '/faq',
    component: React.lazy(() => import('components/pages/Faq/default')),
  },
  headMeta: {
    title: 'Frequently Asked Questions',
    meta: [
      {
        name: 'description',
        content: 'Frequently Asked Questions',
      },
    ],
  },
};
