import React from 'react';

// Images

import { ReactComponent as IconExternalSVG } from '../../../assets/images/icon-external.svg';

export const Contact: React.FC = () => {
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>Contact Us</h1>
            <div className="grid">
              <div className="grid-item grid-item-laptop-12">
                <h2>Contact Form</h2>
                <div className="grid form">
                  <div className="grid-item grid-item-tablet-4">
                    <div className="form-group">
                      <label htmlFor="inputEmail4">Your Name</label>
                      <input
                        type="text"
                        name="your-name"
                        value=""
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputEmail4">Email</label>
                      <input
                        type="text"
                        name="your-name"
                        value=""
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputEmail4">Phone Number</label>
                      <input
                        type="text"
                        name="your-name"
                        value=""
                        size={40}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Name"
                      ></input>
                    </div>
                  </div>
                  <div className="grid-item grid-item-tablet-8">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Your Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2>Our Locations</h2>
            <div className="grid">
              <div className="grid-item grid-item-tablet-6">
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
                  <a href="/" className="text-decoration-none link-with-icon">
                    <IconExternalSVG /> Get directions
                  </a>
                </p>

                <iframe
                  title="Compass Glass Cape Town"
                  src="https://snazzymaps.com/embed/242336"
                  frameBorder="none"
                ></iframe>
              </div>

              <div className="grid-item grid-item-tablet-6">
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
                  <a href="/" className="text-decoration-none link-with-icon">
                    <IconExternalSVG /> Get directions
                  </a>
                </p>

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
  );
};
