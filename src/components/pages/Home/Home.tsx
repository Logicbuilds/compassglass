import React from 'react';
import { Button } from 'components/basic';

// Images

let imageWeKnowGlass = require('../../../assets/images/Compass-Glass-We-Know-Glass.jpg');
let imageGlassBenefits = require('../../../assets/images/Compass-Glass-Glass-Benefits.jpg');

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
        <div className="cards-container frosted-glass">
          {/* Card */}
          <div className="card">
            <div className="grid">
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-4">
                <img
                  src={imageWeKnowGlass}
                  className="img-respomnsive"
                  alt=""
                />
              </div>
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-4 grid-item-offset-left-1">
                <h2>We Know Glass</h2>
                <p>
                  Compass Glass has assembled a strong team of professional
                  managers, supervisors and operators with an extensive range of
                  experience in the building glass Industry.
                </p>
                <Button redirect="/about">Learn more</Button>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card secondary">
            <div className="grid">
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-4 grid-item-offset-right-1">
                <h2>Many Benefits Of Glass</h2>
                <p>
                  Glass is a material with remarkable properties of fragility,
                  durability and transparency and is an essential component of
                  civilised life as we know it in the modern world.
                </p>
                <Button redirect="/about">Learn more</Button>
              </div>
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-4">
                <img
                  src={imageGlassBenefits}
                  className="img-respomnsive"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card card-with-map card-with-query border-top border-linkwater">
            <div className="grid justify-content-center">
              <div className="grid-item grid-item-tablet-5 grid-item-desktop-6">
                <address>
                  <h4>CAPE TOWN</h4>
                  <span>
                    <a href="mailto:+27219817785">+27 (0) 21 981 7785</a>
                  </span>
                  <span>
                    <a href="mailto:technical@compassglass.co.za">
                      technical@compassglass.co.za
                    </a>
                  </span>
                </address>

                <address>
                  <h4>GEORGE</h4>
                  <span>
                    <a href="mailto:+270448714321">+27 (0) 44 871 4321</a>
                  </span>
                  <span>
                    <a href="mailto:technical@compassglass.co.za">
                      technical@compassglass.co.za
                    </a>
                  </span>
                </address>
              </div>
              <div className="grid-item grid-item-tablet-5">
                <div className="flex flex-column justify-content-between height-350">
                  <h3>Have a query?</h3>
                  <p>Looking for a specific product or have a question?</p>
                  <p>Contact Compass Glass today for more information.</p>
                  <Button redirect="/about" buttonClass="primary">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
