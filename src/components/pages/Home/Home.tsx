import React from 'react';
import { Button } from 'components/basic';

export const Home: React.FC = () => {
  return (
    <div className="section home-section">
      <div className="home container">
        <div className="hero">
          <h1>Encompassing all your glass needs</h1>
          <p>
            Our large pool of skills at every stage of our operation ensures
            that customers will benefit in terms of quality and service
            exceeding best expectations and at competitive market rates!
          </p>
          <Button redirect="/about" buttonClass="primary">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};
