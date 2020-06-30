import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutProps } from 'application/models';
import { Header, Footer } from 'components/common';
import Headroom from 'react-headroom';
import { paramCase } from 'change-case';

// let backgroundVideoPoster = require('../../../assets/images/Compass-Glass-Background.jpg');
// let backgroundVideo = require('../../../assets/videos/Compass-Glass-Video.mp4');

/**
 * Basic page layout component
 */
export const BasicLayout: React.FC<LayoutProps> = ({ children, headMeta }) => {
  console.log(headMeta);
  return (
    //  basic-layout layout-aside layout-landing
    <div className={`basic-layout layout-landing ${paramCase(headMeta.title)}`}>
      <Helmet>
        <title>{headMeta.title}</title>
        {headMeta.meta.map((metaItem) => (
          <meta key={metaItem.name} {...metaItem} />
        ))}
      </Helmet>
      <Headroom>
        <Header />
      </Headroom>
      <div className="layout-columns">
        {children}
        <Footer />
      </div>
    </div>
  );
};
