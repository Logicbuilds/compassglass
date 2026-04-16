'use client';

import React, { useEffect } from 'react';
import { paramCase } from 'change-case';
import { Header, Footer } from '@/src/components/common';

export interface BasicLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  title = 'Compass Glass',
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`layout-columns basic-layout layout-landing ${paramCase(title)}`}
    >
      <Header />
      <div className="animated fadeIn slower">
        {children}
        <Footer />
      </div>
    </div>
  );
};
