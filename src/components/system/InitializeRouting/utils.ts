import { RouteConfig, RouteConfigMap } from 'application/models';

export const mapRouteConfig = (routeConfigs: Array<RouteConfig>) => {
  return routeConfigs.reduce((acc, config) => {
    const { name } = config;
    if (name === 'home' || name === 'notFound') {
      acc[name] = config;
      return acc;
    }

    if (!acc.rest) {
      acc.rest = [];
    }
    acc.rest.push(config);

    return acc;
  }, {} as RouteConfigMap);
};
