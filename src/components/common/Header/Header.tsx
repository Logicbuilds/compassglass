import React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps {
  /** Example Header property. */
  exampleHeader?: string;
}

/**
 * Header component
 */
export const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <div className="section header-section">
      <div className="container header">
        <h1 className="logo">
          <Link to="/">Compass Glass</Link>
        </h1>
        <menu>
          <Link to="/about">about</Link>
          <Link to="/faq">faq</Link>
          <Link to="/technical">technical</Link>
          <Link to="/insights">insights</Link>
          <Link to="/contact">contact</Link>
        </menu>
      </div>
    </div>
  );
};
