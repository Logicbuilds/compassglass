import React from 'react';
import { RouteConfig } from 'application/models';

export const technicalRoute: RouteConfig = {
  name: 'technical',
  layout: {
    component: React.lazy(() =>
      import('components/layouts/BasicLayout/default')
    ),
  },
  route: {
    path: '/technical',
    component: React.lazy(() => import('components/pages/Technical/default')),
  },
  headMeta: {
    title: 'Compass Glass Technical Information',
    meta: [
      {
        name: 'description',
        content: 'Compass Glass Technical Information',
      },
    ],
  },
};
