import React from 'react';
import { Button } from 'components/basic';
import { MapFrame } from 'components/common';

// Images
import { ReactComponent as CompassGlassLogoSVG } from 'assets/images/Compass-Glass-Logo.svg';
import { ReactComponent as IconPhoneSVG } from 'assets/images/icon-phone.svg';
import { ReactComponent as IconEmailSVG } from 'assets/images/icon-email.svg';
import { ReactComponent as IconExternalSVG } from 'assets/images/icon-external.svg';

import imageWeKnowGlass from 'assets/images/Compass-Glass-We-Know-Glass.jpg';
import imageGlassBenefits from 'assets/images/Compass-Glass-Glass-Benefits.jpg';
import certificationLogoSAGGA from 'assets/images/logo-certification-sagga.png';
import certificationLogoGGF from 'assets/images/logo-certification-ggf.png';
import certificationLogoSABS from 'assets/images/logo-certification-sabs.png';
import certificationLogoASDA from 'assets/images/logo-certification-asda.png';
import certificationLogoSAGI from 'assets/images/logo-certification-sagi.png';
import certificationLogoSS from 'assets/images/logo-certification-ss.png';
// import backgroundVideoPoster from 'assets/images/Compass-Glass-Background-Gradient.png';

export const Home: React.FC = () => {
  return (
    <div className="section home-section">
      <div className="home container">
        <div className="hero">
          {/* <div className="video-wrapper">
            <video
              playsInline
              autoPlay
              muted
              loop
              poster={backgroundVideoPoster}
            >
              <source
                src={require('assets/videos/Compass-Glass-Video.webm')}
                type="video/webm"
              />
              <source
                src={require('assets/videos/Compass-Glass-Video.mp4')}
                type="video/mp4"
              />
            </video>
          </div> */}
          <div className="grid">
            <div className="grid-item grid-item-laptop-3">
              <h1 className="logo">
                <CompassGlassLogoSVG />
              </h1>
            </div>
            <div className="grid-item hero-text grid-item-laptop-9">
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
          </div>
        </div>
        <div className="cards-container glass frosted-glass">
          {/* Card */}
          <div className="card certifications-logos">
            <img src={certificationLogoSAGGA} alt="certificationLogoSAGGA" />
            <img src={certificationLogoGGF} alt="certificationLogoGGF" />
            <img src={certificationLogoSABS} alt="certificationLogoSABS" />
            <img src={certificationLogoASDA} alt="certificationLogoASDA" />
            <img src={certificationLogoSAGI} alt="certificationLogoSAGI" />
            <img src={certificationLogoSS} alt="certificationLogoSS" />
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
                  We strive not only to be the biggest glass supply company in
                  the Western Cape, but the best - as voted for by our clients.
                  We offer pure, customer-first care, as we put you first when
                  it comes to service, sales and safety.
                </p>
                <Button redirect="/about">Learn more</Button>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="card card-padding-default secondary">
            <div className="grid flex-direction-column-reverse">
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-6">
                <h2>Many Benefits Of Glass</h2>
                <p>
                  Glass is a material with remarkable properties of fragility,
                  durability and transparency and is an essential component of
                  civilised life as we know it in the modern world.
                </p>
                <Button redirect="/technical">Learn more</Button>
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
                    <a href="mailto:+27219817785">
                      <IconPhoneSVG /> (021) 981 7785
                    </a>
                  </span>
                  <span>
                    <a href="mailto:sales@compassglass.co.za">
                      <IconEmailSVG /> sales@compassglass.co.za
                    </a>
                  </span>
                </address>
                <p>
                  <a href="/" className="text-decoration-none link-with-icon">
                    <IconExternalSVG /> Get directions
                  </a>
                </p>
              </div>
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-4">
                <MapFrame city="capeTown" />
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
                    <a href="mailto:+270448714321">
                      <IconPhoneSVG /> (044) 873 5135
                    </a>
                  </span>
                  <span>
                    <a href="mailto:admingeorge@compassglass.co.za">
                      <IconEmailSVG /> admingeorge@compassglass.co.za
                    </a>
                  </span>
                </address>

                <p>
                  <a href="/" className="text-decoration-none link-with-icon">
                    <IconExternalSVG /> Get directions
                  </a>
                </p>
              </div>
              <div className="grid-item grid-item-tablet-6 grid-item-laptop-4">
                <MapFrame city="george" />
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
                    <Button redirect="/contact" buttonClass="primary">
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
