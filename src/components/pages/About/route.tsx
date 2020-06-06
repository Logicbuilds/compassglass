import React from 'react';
import { RouteConfig } from 'application/models';

export const aboutRoute: RouteConfig = {
	name: 'about',
	layout: {
    component: React.lazy(() =>
      import('components/layouts/BasicLayout/default')
    ),
  },
  route: {
    path: '/about',
    component: React.lazy(() => import('components/pages/About/default')),
  },
	headMeta: {
    title: 'About page',
		meta: [
			{
				name: 'description',
				content: 'About compass glass'
			},
		],
  },
};
