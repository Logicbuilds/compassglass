import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutProps } from 'application/models';
import { Header, Footer } from 'components/common';

/**
 * Basic page layout component
 */
export const BasicLayout: React.FC<LayoutProps> = ({ children, headMeta }) => {
  return (
    <div className="basic-layout">
      <Helmet>
        <title>{headMeta.title}</title>
        {headMeta.meta.map((metaItem) => (
          <meta key={metaItem.name} {...metaItem} />
        ))}
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
