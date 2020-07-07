import React from 'react';
import { RouteConfig } from 'application/models';

export const homeRoute: RouteConfig = {
  name: 'home',
  layout: {
    component: React.lazy(() =>
      import('components/layouts/BasicLayout/default')
    ),
  },
  route: {
    path: '/',
    component: React.lazy(() => import('components/pages/Home/default')),
  },
  headMeta: {
    title: 'Compass Glass South Africa',
    meta: [
      {
        name: 'description',
        content: 'Compass Glass South Africa',
      },
    ],
  },
};
