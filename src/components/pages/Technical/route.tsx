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
    title: 'Technical page',
		meta: [
			{
				name: 'description',
				content: 'Technical inforamatioin about related topics'
			},
		],
  },
};
