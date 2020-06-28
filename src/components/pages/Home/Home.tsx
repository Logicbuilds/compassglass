import React from 'react';
import { Button } from 'components/basic';

// Images

let imageWeKnowGlass = require('../../../assets/images/Compass-Glass-We-Know-Glass.jpg');
let imageGlassBenefits = require('../../../assets/images/Compass-Glass-Glass-Benefits.jpg');

let certificationLogoSAGGA = require('../../../assets/images/logo-certification-sagga.png');
let certificationLogoGGF = require('../../../assets/images/logo-certification-ggf.png');
let certificationLogoSABS = require('../../../assets/images/logo-certification-sabs.png');
let certificationLogoASDA = require('../../../assets/images/logo-certification-asda.png');
let certificationLogoSAGI = require('../../../assets/images/logo-certification-sagi.png');
let certificationLogoSS = require('../../../assets/images/logo-certification-ss.png');

export const Home: React.FC = () => {
  return (
    <div className="section home-section">
      <div className="home container">
        <div className="hero">
          <h1>Built around you</h1>
          <p>
            Our large pool of skills at every stage of our operation ensures
            that customers will benefit in terms of quality and service
            exceeding best expectations and at competitive market rates!
          </p>
          <Button redirect="/about" buttonClass="primary">
            Learn more
          </Button>
        </div>
        <div className="cards-container glass frosted-glass">
          {/* Card */}
          <div className="card certifications-logos">
            <img src={certificationLogoSAGGA} alt="" />
            <img src={certificationLogoGGF} alt="" />
            <img src={certificationLogoSABS} alt="" />
            <img src={certificationLogoASDA} alt="" />
            <img src={certificationLogoSAGI} alt="" />
            <img src={certificationLogoSS} alt="" />
          </div>
          {/* Card */}
          <div className="card card-padding-default">
            <div className="grid">
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-4">
                <img src={imageWeKnowGlass} className="img-responsive" alt="" />
              </div>
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-5 grid-item-offset-left-1">
                <h2>About Compass Glass</h2>
                <p>
                  Compass Glass (Pty) Ltd was established in 2008 at our
                  premises in Brackenrite Business Park situated in Brackenfell,
                  Cape Town and is a wholly-owned subsidiary of The Mazor Group.
                </p>
                <Button redirect="/about">Learn more</Button>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card card-padding-default secondary">
            <div className="grid">
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-6 grid-item-offset-right-1">
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
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card card-padding-default padding-top-1">
            <h2 className="padding-bottom-3">Get in touch</h2>
            <div className="grid">
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-6">
                <address>
                  <h4>Compass Glass - Cape Town</h4>
                  <address>
                    Unit A6, Brackenrite Business Park, Kruis Road, Brackenfell,
                    Cape Town 7560
                  </address>
                  <span>
                    <a href="mailto:+27219817785">(021) 981 7785</a>
                  </span>
                  <span>
                    <a href="mailto:sales@compassglass.co.za">
                      sales@compassglass.co.za
                    </a>
                  </span>
                </address>

                <p>
                  <a href="/">Get directions</a>
                </p>
              </div>
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-4">
                <iframe
                  title="Compass Glass Cape Town"
                  src="https://snazzymaps.com/embed/242336"
                  width="400px"
                  height="350px"
                  frameBorder="none"
                ></iframe>
              </div>
            </div>

            <div className="grid padding-top-3">
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-6">
                <address>
                  <h4>Compass Glass - George</h4>
                  <address>
                    120 Fichat Street, George Industrial, George 6536
                  </address>
                  <span>
                    <a href="mailto:+270448714321">(044) 873 5135</a>
                  </span>
                  <span>
                    <a href="mailto:admingeorge@compassglass.co.za">
                      admingeorge@compassglass.co.za
                    </a>
                  </span>
                </address>

                <p>
                  <a href="/">Get directions</a>
                </p>
              </div>
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-4">
                <iframe
                  title="Compass Glass George"
                  src="https://snazzymaps.com/embed/246367"
                  width="400px"
                  height="350px"
                  frameBorder="none"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card secondary">
            <div className="grid padding-top-0">
              <div className="grid-item grid-item-tablet-12">
                <div className="flex flex-column justify-content-between">
                  <div className="card-cta">
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
    </div>
  );
};
