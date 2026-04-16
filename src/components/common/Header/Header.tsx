'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Images

// import { ReactComponent as CompassGlassLogoSVG } from 'assets/images/Compass-Glass-Logo.svg';
import { ReactComponent as CompassGlassLogoTextSVG } from 'assets/images/Compass-Glass-Logo-Text.svg';

export interface HeaderProps {
  /** Example Header property. */
  exampleHeader?: string;
}

/**
 * Header component
 */
export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="header-section">
      <div className="header">
        <div className="flex nav-container container">
          <h1 className="logo">
            <Link href="/">
              <span className="sr-only">Compass Glass</span>
              <CompassGlassLogoTextSVG />
            </Link>
          </h1>
          <nav>
            <Link className={isActive('/about') ? 'active' : ''} href="/about">
              About
            </Link>
            <Link className={isActive('/faq') ? 'active' : ''} href="/faq">
              FAQ
            </Link>
            <Link
              className={isActive('/technical') ? 'active' : ''}
              href="/technical"
            >
              Technical
            </Link>
            <Link className={isActive('/blog') ? 'active' : ''} href="/blog">
              Blog
            </Link>
            <Link
              className={isActive('/contact') ? 'active' : ''}
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
