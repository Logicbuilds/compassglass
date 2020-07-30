import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as emailjs from 'emailjs-com';
import { contactConfig } from '../../../config';
import { Input } from '../../common/Input';

// Images

import { ReactComponent as IconPhoneSVG } from '../../../assets/images/icon-phone.svg';
import { ReactComponent as IconEmailSVG } from '../../../assets/images/icon-email.svg';
import { ReactComponent as IconExternalSVG } from '../../../assets/images/icon-external.svg';

export const Contact: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const { serviceID, templateID, form, userID } = contactConfig;
      await emailjs.sendForm(serviceID, templateID, form, userID);
      setMailSent(true);
      setLoading(false);
    } catch (err) {
      setHasError(true);
    }
  };

  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>Contact Compass Glass</h1>
            <div className="grid grid-no-wrap grid-items-have-gap">
              {/* Contact Form */}
              <div className="grid-item grid-item-12 grid-item-laptop-4">
                <div className="contact-form">
                  {!mailSent && (
                    <form
                      id="logicbuilds-contact-form"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Input
                        label="Your Name"
                        name="name"
                        type="text"
                        errors={errors}
                        register={register}
                        required
                      />
                      <Input
                        label="Your Email"
                        name="email"
                        type="email"
                        errors={errors}
                        register={register}
                        required
                      />
                      <Input
                        label="Your Message"
                        name="message"
                        type="textarea"
                        errors={errors}
                        register={register}
                        required
                      />
                      <button
                        className="button primary"
                        type="submit"
                        value="Send message"
                      >
                        {isLoading ? 'Sending...' : 'Send message'}
                      </button>
                    </form>
                  )}
                  <div>
                    {mailSent && (
                      <div>
                        <h2>Message sent</h2>
                        <p>Thank you for contacting us.</p>
                        <p>We will be in touch soon.</p>
                      </div>
                    )}
                    {hasError && (
                      <div className="alert alert-error">
                        Your message was not sent, please check what you entered
                        and try again.
                      </div>
                    )}
                  </div>
                </div>
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
