import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
  return (
    <div className="header-section">
      <div className="header">
        <div className="flex nav-container container">
          <h1 className="logo">
            <Link to="/">
              <span className="sr-only">Compass Glass</span>
              <CompassGlassLogoTextSVG />
            </Link>
          </h1>
          <nav>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
            <NavLink activeClassName="active" to="/faq">
              FAQ
            </NavLink>
            <NavLink activeClassName="active" to="/technical">
              Technical
            </NavLink>
            <NavLink activeClassName="active" to="/blog">
              Blog
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};
