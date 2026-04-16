'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
// Images

// import { ReactComponent as IconFacebookSVG } from 'assets/images/icon-facebook.svg';
// import { ReactComponent as IconInstagramSVG } from 'assets/images/icon-instagram.svg';
// import { ReactComponent as IconLinkedInSVG } from 'assets/images/icon-linkedin.svg';

export interface FooterProps {
  /** Example Footer property. */
  exampleFooter?: string;
}

/**
 * Footer component
 */
export const Footer: React.FC<FooterProps> = ({ ...props }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="section footer-section">
      <div className="footer container">
        <div className="grid grid-items-have-gap align-items-center">
          <div className="grid-item grid-item-tablet-8">
            <p>
              &copy; Copyright Compass Glass {new Date().getFullYear()}. All
              right reserved.
            </p>
            <div className="flex">
              <p>
                <Link
                  className={isActive('/about') ? 'active' : ''}
                  href="/about"
                >
                  Compass Glass Policies
                </Link>
                .
                <Link
                  className={isActive('/terms') ? 'active' : ''}
                  href="/terms"
                >
                  Terms and Conditions
                </Link>
              </p>
            </div>
          </div>
          <div className="grid-item grid-item-tablet-4 flex justify-content-end">
            <div className="icon-group">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Compass-Glass-104892421492307/"
              >
                <span className="sr-only">Compass Glass Facebook</span>
                <Image
                  src="/images/icon-facebook.svg"
                  alt="Compass Glass Facebook"
                  width={100}
                  height={100}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/compass-glass-ct"
              >
                <span className="sr-only">Compass Glass LinkedIn</span>
                <Image
                  src="/images/icon-linkedin.svg"
                  alt="Compass Glass LinkedIn"
                  width={100}
                  height={100}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/compassglassct?igshid=aj5btp4lfu7p"
              >
                <span className="sr-only">Compass Glass Instagram</span>
                <Image
                  src="/images/icon-instagram.svg"
                  alt="Compass Glass Instagram"
                  width={100}
                  height={100}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
