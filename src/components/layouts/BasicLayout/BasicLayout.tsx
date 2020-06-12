import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LayoutProps } from 'application/models';
import { Header, Footer } from 'components/common';

// let backgroundVideoPoster = require('../../../assets/images/Compass-Glass-Background.jpg');
// let backgroundVideo = require('../../../assets/videos/Compass-Glass-Video.mp4');

/**
 * Basic page layout component
 */
export const BasicLayout: React.FC<LayoutProps> = ({ children, headMeta }) => {
  return (
    <div className="basic-layout">
      {/* <div className="video-wrapper">
        <video playsInline autoPlay muted loop poster={backgroundVideoPoster}>
          {/* <source src="polina.webm" type="video/webm" /> */}
      {/* <source src={backgroundVideo} type="video/mp4" /> */}
      {/* </video> */}
      {/* </div> */}
      <Helmet>
        <title>{headMeta.title}</title>
        {headMeta.meta.map((metaItem) => (
          <meta key={metaItem.name} {...metaItem} />
        ))}
      </Helmet>
      <Header />
      <div className="layout-columns">
        {children}
        <Footer />
      </div>
    </div>
  );
};
