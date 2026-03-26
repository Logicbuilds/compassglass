import React from 'react';
import ReactMarkdown from 'react-markdown';

import faqData from 'assets/content/pages/faqs.json';

/**
 * Frequently asked questions page
 */
export const Faq: React.FC = () => {
  return (
    <div className="section faq">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>{faqData.title}</h1>
<div className="faq-container"><div className="tabs"><div className="tab"><input type="checkbox" id="faq1"/><label className="tab-label"htmlFor="faq1">What is glass?</label><div className="tab-content"><p>Glass is a material with remarkable properties of fragility, durability and transparency and is an essential component of civilised life as we know it in the modern world. It protects us from short-term changes in the weather as well as from longer-term changes in the climate and provides us with a view of the world beyond the pane. If undisturbed, glass will continue to perform it’s protective role for centuries but, if disturbed by impact, excessive wind-load or other undue forces, it will break into fragments which can be potentially lethal. This unique combination of durability and fragility are enhanced by modern processing methods which provide a wide range of benefits of additional strength and security and allow glass to be used in a vast range of applications in all aspects of modern living.</p></div></div><div className="tab"><input type="checkbox" id="faq2"/><label className="tab-label"htmlFor="faq2">What is Safety Glass?</label><div className="tab-content"><p>Safety glass is glass with additional safety features such as: 1) Thermally Toughened Glass (also known as Tempered Glass) where glass is heated and cooled to set up compressive stresses on the surface and balanced tensile stresses at the centre. 2) Laminated Safety Glass consists of two or more pieces of glass normally held together with a PVB(Polyvinyl Butyral) Interlayer.</p></div></div><div className="tab"><input type="checkbox" id="faq3"/><label className="tab-label"htmlFor="faq3">What glass can I use for balustrading?</label><div className="tab-content"><p>Glass in balustrades shall be Toughened Safety Glass unless rigidly supported on all sides. All glazing materials i.e. the complete system is subject to impact and line load tests determined in accordance within the requirements of SANS 10160-2.</p></div></div><div className="tab"><input type="checkbox" id="faq4"/><label className="tab-label"htmlFor="faq4">What colour glass do you have?</label><div className="tab-content"><p>Although there are multiple body tinted float glass options globally, we generally only supply Grey, Bronze, Green and Blue tinted products. We also offer a large variety of body tinted options in Solar Performance and Low-E(Low Emissivity) products.</p><p>We also stock a few options of Coloured interlayers for laminated glass and can also paint on glass via our Rollercoater and Diptech machines so please feel free to contact us for more information. Requests for certain coloured products that we don’t stock will be looked at individually.</p></div></div><div className="tab"><input type="checkbox" id="faq5"/><label className="tab-label"htmlFor="faq5">What is the largest panel you can toughen?</label><div className="tab-content"><p>Our largest piece we can toughen is 2400mm x 4496mm due to machine limitations.</p></div></div></div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
