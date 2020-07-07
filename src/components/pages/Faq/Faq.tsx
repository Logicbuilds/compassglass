import React from 'react';

export interface FaqProps {
  /** Example Faq property. */
  exampleFaq?: string;
}

/**
 * Frequently asked questions page
 */
export const Faq: React.FC<FaqProps> = ({ ...props }) => {
  return (
    <div className="section faq">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-container">
              {/* Accordion */}
              <div className="tabs">
                <div className="tab">
                  <input type="checkbox" id="chck1" />
                  <label className="tab-label" htmlFor="chck1">
                    What is glass?
                  </label>
                  <div className="tab-content">
                    <p>
                      Glass is a material with remarkable properties of
                      fragility, durability and transparency and is an essential
                      component of civilised life as we know it in the modern
                      world. It protects us from short-term changes in the
                      weather as well as from longer-term changes in the climate
                      and provides us with a view of the world beyond the pane.
                      If undisturbed, glass will continue to perform it’s
                      protective role for centuries but, if disturbed by impact,
                      excessive wind-load or other undue forces, it will break
                      into fragments which can be potentially lethal. This
                      unique combination of durability and fragility are
                      enhanced by modern processing methods which provide a wide
                      range of benefits of additional strength and security and
                      allow glass to be used in a vast range of applications in
                      all aspects of modern living.
                    </p>
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
