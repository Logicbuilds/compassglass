import { FC, LazyExoticComponent } from 'react';
import { RouteProps } from 'react-router-dom';

export type LayoutProps = Pick<RouteConfig, 'headMeta'>;

export interface RouteConfig {
  name: string;
  layout: LayoutDefinition;
  route: RouteDefinition;
  headMeta: HeadMetaDefinition;
}

export interface RouteConfigMap {
  home: RouteConfig;
  notFound: RouteConfig;
  rest: Array<RouteConfig>;
}

export interface HeadMetaDefinition {
  title: string;
  meta: Array<MetaTag>;
}

interface MetaTag {
  property?: string;
  name?: string;
  content: string;
}

export interface LayoutDefinition {
  component: LazyExoticComponent<FC<LayoutProps>>;
}

export interface RouteDefinition extends RouteProps {
  path: string;
  component: LazyExoticComponent<FC>;
}
