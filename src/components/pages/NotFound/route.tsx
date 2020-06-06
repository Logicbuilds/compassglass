import React from 'react';
import { RouteConfig } from 'application/models';

export const notFoundRoute: RouteConfig = {
  name: 'notFound',
  layout: {
    component: React.lazy(() =>
      import('components/layouts/BasicLayout/default')
    ),
  },
  route: {
    path: '*',
    component: React.lazy(() => import('components/pages/NotFound/default')),
  },
  headMeta: {
    title: '404',
    meta: [
      {
        name: 'description',
        content: 'Page not found!!',
      },
    ],
  },
};
