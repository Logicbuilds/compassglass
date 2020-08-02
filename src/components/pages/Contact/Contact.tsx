import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { camelCase } from 'change-case';
import { useForm } from 'react-hook-form';

import { CONTACT_CONFIG } from 'application/config';
import { Input, MapFrame } from 'components/common';
import contactData from 'assets/content/pages/contact.json';
// Images

import { ReactComponent as IconPhoneSVG } from 'assets/images/icon-phone.svg';
import { ReactComponent as IconEmailSVG } from 'assets/images/icon-email.svg';
import { ReactComponent as IconExternalSVG } from 'assets/images/icon-external.svg';

export const Contact: React.FC = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const { serviceID, templateID, form, userID } = CONTACT_CONFIG;
      await emailjs.sendForm(serviceID, templateID, form, userID);
      setMailSent(true);
      setLoading(false);
    } catch (err) {
      setHasError(true);
    }
  };

  if (!window.location.pathname.includes('contact')) return null;
  const { content } = contactData;
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>Contact Compass Glass</h1>
            <div className="grid grid-no-wrap grid-items-have-gap">
              {/* Contact Form */}
              <div className="grid-item grid-item-12 grid-item-laptop-4">
                <h3>Send us a message</h3>
                <div className="contact-form">
                  {!mailSent && (
                    <form
                      id="compassglass-contact-form"
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
                        <h3>Message sent</h3>
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
                {content.map((branch) => (
                  <div key={branch.phone} className="grid grid-no-wrap">
                    <div className="grid-item grid-item-tablet-6 grid-item-laptop-6 grid-item-offset-left-1">
                      <address>
                        <h5>{branch.title}</h5>
                        <address>{branch.address}</address>
                        <span>
                          <a href={`mailto:${branch.phone}`}>
                            <IconPhoneSVG /> {branch.phone}
                          </a>
                        </span>
                        <span>
                          <a href="mailto:sales@compassglass.co.za">
                            <IconEmailSVG /> {branch.email}
                          </a>
                        </span>
                      </address>
                      <p>
                        <a
                          href={branch.directions}
                          className="text-decoration-none link-with-icon"
                        >
                          <IconExternalSVG /> Get directions
                        </a>
                      </p>
                    </div>
                    <div className="grid-item grid-item-tablet-6 grid-item-laptop-4">
                      <MapFrame
                        city={camelCase(branch.title) as 'capeTown' | 'george'}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
