import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo.svg';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <section>
        <img src={logo} alt="logo" />
        <Link to="/contact">Contact</Link>
      </section>
    </div>
  );
};
