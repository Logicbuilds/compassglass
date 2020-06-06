import React from 'react';
import { Link } from 'react-router-dom';

import { useNotify } from 'application/modules/notify';

export interface MenuContainerProps {}

export const MenuContainer: React.FC<MenuContainerProps> = () => {
  const { notifyUser } = useNotify();

  return (
    <div className="menu-container">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/testing">Testing</Link>
      <Link to="/google">Google</Link>
      <button onClick={() => notifyUser('NICE_TOAST')}>Nice Toast</button>
      <button onClick={() => notifyUser('NAUGHTY_TOAST')}>**** Toast</button>
    </div>
  );
};
