import React from 'react';

// Images

import { ReactComponent as IconFacebookSVG } from 'assets/images/icon-facebook.svg';
import { ReactComponent as IconTwitterSVG } from 'assets/images/icon-twitter.svg';
import { ReactComponent as IconLinkedInSVG } from 'assets/images/icon-linkedin.svg';

export interface FooterProps {
  /** Example Footer property. */
  exampleFooter?: string;
}

/**
 * Footer component
 */
export const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <div className="section footer-section">
      <div className="footer container">
        <div className="grid grid-items-have-gap align-items-center">
          <div className="grid-item grid-item-tablet-6">
            <p>
              &copy; Copyright Compass Glass {new Date().getFullYear()}. All
              right reserved.
            </p>
          </div>
          <div className="grid-item grid-item-tablet-6 flex justify-content-end">
            <div className="icon-group">
              <a href="/">
                <span className="sr-only">Compass Glass Facebook</span>
                <IconFacebookSVG />
              </a>
              <a href="/">
                <span className="sr-only">Compass Glass Twitter</span>
                <IconTwitterSVG />
              </a>
              <a href="/">
                <span className="sr-only">Compass Glass LinkedIn</span>
                <IconLinkedInSVG />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
