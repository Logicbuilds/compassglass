import React from 'react';
// import { Helmet } from 'react-helmet-async'; // Disabled for Next.js
import { LayoutProps } from 'application/models';
import { Header, Footer } from 'components/common';
// import Headroom from 'react-headroom';
import { paramCase } from 'change-case';
/**
 * Basic page layout component
 */
export const BasicLayout: React.FC<LayoutProps> = ({ children, headMeta }) => {
  window.scrollTo(0, 0);
  return (
    //  basic-layout layout-aside layout-landing
    <div
      className={`layout-columns basic-layout layout-landing ${paramCase(
        headMeta.title
      )}`}
    >
      {/* Metadata handled by Next.js - react-helmet-async removed */}
      {/* @ts-ignore */}
      {/* <Helmet>
        <title>{headMeta.title}</title>
        {headMeta.meta.map((metaItem) => (
          <meta key={metaItem.name} {...metaItem} />
        ))}
      </Helmet> */}
      {/* @ts-ignore */}
      {/* <Headroom> */}
      <Header />
      {/* </Headroom> */}
      <div className="animated fadeIn slower">
        {children}
        <Footer />
      </div>
    </div>
  );
};
