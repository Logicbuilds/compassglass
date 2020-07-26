import React from 'react';

// Images

// Images

import { ReactComponent as IconPhoneSVG } from '../../../assets/images/icon-phone.svg';
import { ReactComponent as IconEmailSVG } from '../../../assets/images/icon-email.svg';
import { ReactComponent as IconExternalSVG } from '../../../assets/images/icon-external.svg';

export const Contact: React.FC = () => {
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>Contact Compass Glass</h1>
            <div className="grid grid-no-wrap grid-items-have-gap">
              {/* Contact Form */}
              <div className="grid-item grid-item-12 grid-item-laptop-4">
                <form>
                  <div className="form-group">
                    <label htmlFor="your-name">Your Name</label>
                    <input
                      type="text"
                      name="your-name"
                      size={40}
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      size={40}
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Email Address"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Phone Number</label>
                    <input
                      type="tel"
                      name="number"
                      size={40}
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Phone Number"
                    ></input>
                  </div>
                  <div className="form-group form-group-textarea">
                    <label htmlFor="exampleFormControlTextarea1">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                    ></textarea>
                  </div>
                  <button type="submit" className="button primary">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="grid-item grid-item-12 grid-item-laptop-7">
                {/* Compass Glass - Cape Town */}
                <div className="grid grid-no-wrap">
                  <div className="grid-item grid-item-tablet-6 grid-item-laptop-6 grid-item-offset-left-1">
                    <address>
                      <h5>Compass Glass - Cape Town</h5>
                      <address>
                        Unit A6, Brackenrite Business Park, Kruis Road,
                        Brackenfell, Cape Town 7560
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
                      <a
                        href="/"
                        className="text-decoration-none link-with-icon"
                      >
                        <IconExternalSVG /> Get directions
                      </a>
                    </p>
                  </div>
                  <div className="grid-item grid-item-tablet-6 grid-item-laptop-4">
                    <iframe
                      title="Compass Glass Cape Town"
                      src="https://snazzymaps.com/embed/242336"
                      frameBorder="none"
                    ></iframe>
                  </div>
                </div>

                {/* Compass Glass - George */}
                <div className="grid  grid-no-wrap">
                  <div className="grid-item grid-item-tablet-6 grid-item-laptop-6 grid-item-offset-left-1">
                    <address>
                      <h5>Compass Glass - George</h5>
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
                      <a
                        href="/"
                        className="text-decoration-none link-with-icon"
                      >
                        <IconExternalSVG /> Get directions
                      </a>
                    </p>
                  </div>
                  <div className="grid-item grid-item-tablet-6 grid-item-laptop-4">
                    <iframe
                      title="Compass Glass George"
                      src="https://snazzymaps.com/embed/246367"
                      frameBorder="none"
                    ></iframe>
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
