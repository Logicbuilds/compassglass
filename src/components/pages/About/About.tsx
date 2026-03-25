import React from 'react';
import ReactMarkdown from 'react-markdown';

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
            <ReactMarkdown source={aboutData.content} />
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
