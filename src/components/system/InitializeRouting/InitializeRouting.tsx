import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
    <Routes>
      {home && (
        <Route
          path={home.route.path}
          element={
            <home.layout.component headMeta={home.headMeta}>
              <home.route.component />
            </home.layout.component>
          }
        />
      )}
      {rest.map(({ route, layout, headMeta }) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <layout.component headMeta={headMeta}>
              <route.component />
            </layout.component>
          }
        />
      ))}
      {notFound && (
        <Route
          path={notFound.route.path}
          element={
            <notFound.layout.component headMeta={notFound.headMeta}>
              <notFound.route.component />
            </notFound.layout.component>
          }
        />
      )}
    </Routes>
  );
};
