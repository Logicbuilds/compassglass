import React from 'react';
import { RouteConfig } from 'application/models';

export const insightsRoute: RouteConfig = {
	name: 'insights',
	layout: {
    component: React.lazy(() =>
      import('components/layouts/BasicLayout/default')
    ),
  },
  route: {
    path: '/insights',
    component: React.lazy(() => import('components/pages/Insights/default')),
  },
	headMeta: {
    title: 'Insights page',
		meta: [
			{
				name: 'description',
				content: 'Insights about related information'
			},
		],
  },
};
