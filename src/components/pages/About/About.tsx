import React from 'react';

export interface AboutProps {
  /** Example About property. */
  exampleAbout?: string;
}

/**
 * About compass glass
 */
export const About: React.FC<AboutProps> = ({ ...props }) => {
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>About Compass Glass</h1>
            <p>
              Compass Glass (Pty) Ltd was established in 2008 at our premises in
              Brackenrite Business Park situated in Brackenfell, Cape Town and
              is a wholly-owned subsidiary of{' '}
              <a href="http://mazor.co.za/">The Mazor Group</a>.
            </p>

            <p>
              At Compass Glass we endeavor to provide our clients with
              solution-driven products for all their glass needs and we pride
              ourselves in our offering of high quality products along with the
              best technical assistance and service at competitive rates.
              Through aggressive investment in our machines and employees, we
              have established ourselves as the leaders in glass and will
              continue to push the envelope through innovative thinking.
            </p>

            <p>
              Compass Glass offers architectural flat glass which perform at
              much higher levels in SAFETY, SECURITY, INSULATION & EFFICIENCY
              compared to standard window glass. Our operation takes raw primary
              float glass in stocksheet form and progressively cuts and
              fabricates this basic material into value-added products via
              Thermal Toughening, Laminating, Double Glazing, Printing and in
              combinations of all these processes to meet specific client
              requirements.
            </p>

            <p>
              Through the use of mirrored, patterned, tinted, printed, Low-E and
              Solar performance coated glass an almost endless combination is
              achievable for use in architectural and interior design, wherever
              you live, work or play.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
