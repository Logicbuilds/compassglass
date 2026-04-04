import React from 'react';
// import ReactMarkdown from 'react-markdown';

import aboutData from 'assets/content/pages/about.json';

/**
 * About compass glass
 */
export const About: React.FC = () => {
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>{aboutData.title}</h1>
            {/* @ts-ignore */}
            <p>
              <strong>Compass Glass (Pty)</strong> Ltd was established in 2008
              at our premises in Brackenrite Business Park situated in
              Brackenfell, Cape Town and is a wholly-owned subsidiary of{' '}
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
              much higher levels in SAFETY, SECURITY, INSULATION &amp;
              EFFICIENCY compared to standard window glass. Our operation takes
              raw primary float glass in stocksheet form and progressively cuts
              and fabricates this basic material into value-added products via
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
            <div className="about tabs">
              <div className="tab">
                {/* Accordion Tab */}
                <input type="checkbox" id="policies" />
                <label className="tab-label" htmlFor="policies">
                  Compass Glass Policies
                </label>
                <div className="tab-content">
                  <ul>
                    <li>
                      <a href="/static/media/PRIVACY-STATEMENT.pdf">
                        PRIVACY-STATEMENT.pdf
                      </a>
                    </li>
                    <li>
                      <a href="/static/media/CG-Form02-RequestforAccesstoRecord.pdf">
                        CG-Form02-RequestforAccesstoRecord.pdf
                      </a>
                    </li>
                    <li>
                      <a href="/static/media/CG-Form03-Outcomeofrequestandoffeespayable.pdf">
                        CG-Form03-Outcomeofrequestandoffeespayable.pdf
                      </a>
                    </li>
                    <li>
                      <a href="/static/media/CG-PAIAManual.pdf">
                        CG-PAIAManual.pdf
                      </a>
                    </li>
                    {/* <li>
                      <a href="/static/media/CG-PRIVACYSTATEMENT.pdf">
                        CG-PRIVACYSTATEMENT.pdf
                      </a>
                    </li>
                    <li>
                      <a href="/static/media/CG-T5-PRIVACYSTATEMENT.pdf">
                        CG-T5-PRIVACYSTATEMENT.pdf
                      </a>
                    </li> */}
                    <li>
                      <a href="/static/media/CG-T5-PaiaManual.pdf">
                        CG-T5-PaiaManual.pdf
                      </a>
                    </li>
                    <li>
                      <a href="/static/media/CGSA-PAIAManual.pdf">
                        CGSA-PAIAManual.pdf
                      </a>
                    </li>
                    <li>
                      <a href="/static/media/CGSA-PRIVACYSTATEMENT.pdf">
                        CGSA-PRIVACYSTATEMENT.pdf
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
