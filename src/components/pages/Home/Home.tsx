import React from 'react';
import { Button } from 'components/basic';

export const Home: React.FC = () => {
  return (
    <div className="section">
      <div className="home container">
        <h1>Home</h1>
        <Button>Learn more</Button>
      </div>
    </div>
  );
};
