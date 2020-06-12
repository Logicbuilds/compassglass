import React from 'react';
import { Link } from 'react-router-dom';

// Images

import { ReactComponent as CompassGlassLogoSVG } from '../../../assets/images/Compass-Glass-Logo.svg';

export interface HeaderProps {
  /** Example Header property. */
  exampleHeader?: string;
}

/**
 * Header component
 */
export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <div className="header-section">
      <div className="container header">
        <div className="position-fixed flex flex-column nav-container min-vw-15">
          <h1 className="logo">
            <Link to="/">
              <CompassGlassLogoSVG />
            </Link>
          </h1>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/technical">Technical</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
