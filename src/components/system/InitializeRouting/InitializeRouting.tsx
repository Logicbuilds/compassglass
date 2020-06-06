import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { RouteConfig } from 'application/models';
import { mapRouteConfig } from './utils';

export interface InitializeRoutingProps {
  routeConfigs: Array<RouteConfig>;
}

export const InitializeRouting: React.FC<InitializeRoutingProps> = ({
  routeConfigs,
}) => {
  const { home, notFound, rest } = mapRouteConfig(routeConfigs);
  return (
    <Switch>
      {home && (
        <Route path={home.route.path} exact strict>
          <home.layout.component headMeta={home.headMeta}>
            <home.route.component />
          </home.layout.component>
        </Route>
      )}
      {rest.map(({ route, layout, headMeta }) => (
        <Route
          key={route.path}
          exact={route.path === route.location?.pathname}
          path={route.path}
        >
          <layout.component headMeta={headMeta}>
            <route.component />
          </layout.component>
        </Route>
      ))}
      {notFound && (
        <Route path={notFound.route.path}>
          <notFound.layout.component headMeta={notFound.headMeta}>
            <notFound.route.component />
          </notFound.layout.component>
        </Route>
      )}
    </Switch>
  );
};
