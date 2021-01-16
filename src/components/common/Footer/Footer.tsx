import React from 'react';

// Images

import { ReactComponent as IconFacebookSVG } from 'assets/images/icon-facebook.svg';
import { ReactComponent as IconInstagramSVG } from 'assets/images/icon-instagram.svg';
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Compass-Glass-104892421492307/"
              >
                <span className="sr-only">Compass Glass Facebook</span>
                <IconFacebookSVG />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/compass-glass-ct"
              >
                <span className="sr-only">Compass Glass LinkedIn</span>
                <IconLinkedInSVG />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/compassglassct?igshid=aj5btp4lfu7p"
              >
                <span className="sr-only">Compass Glass Twitter</span>
                <IconInstagramSVG />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
