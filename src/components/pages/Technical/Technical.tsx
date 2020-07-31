import React from 'react';
import ReactMarkdown from 'react-markdown';

import techData from 'assets/content/pages/technical.json';

/**
 * Technical inforamatioin about related topics
 */
export const Technical: React.FC = () => {
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>{techData.title}</h1>
            <h2>{techData.whatIsGlass.title}</h2>
            <ReactMarkdown source={techData.whatIsGlass.content} />

            <h2>{techData.compositionOfCommercialGlass.title}</h2>
            <h3>{techData.compositionOfCommercialGlass.subTitle}</h3>

            <div className="table-container">
              <table className="table striped">
                <thead>
                  <tr>
                    <th>Origin</th>
                    <th colSpan={2}>Description</th>
                    <th>%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={4} className="cell-origin">
                      Mined or Quarried Materials
                    </td>
                    <td>Silica</td>
                    <td>Si</td>
                    <td>72</td>
                  </tr>
                  <tr>
                    <td>Limestone</td>
                    <td>CaCO³</td>
                    <td>9</td>
                  </tr>
                  <tr>
                    <td>Dolomite</td>
                    <td>CaMg(CO³)²</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Others</td>
                    <td>incl iron oxide *</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td className="cell-origin">Manufactured Materials</td>
                    <td>Soda Ash</td>
                    <td>Na²CO³</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td className="cell-origin">By-Product Material</td>
                    <td>Clean Scrap</td>
                    <td>“Cullet”</td>
                    <td>Up to 20% by volume</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <ReactMarkdown source={techData.disclaimer} /> */}
            <small>
              <sup>*</sup> Note: All commercial window glass contains a residue
              of iron oxide (Fe2O3 ) which is difficult and expensive to remove
              and gives the glass it’s characteristic green edge-colour which is
              considered acceptable for most glazing applications, including
              mirrors. However, to meet the demand for a “whiter” architectural
              window glass, it is possible to remove most of the residual iron
              by further processing and additional cost to create Low-Iron
              (“Extra-Clear”) glass which is almost perfectly white with no
              green colour at the edges. The clarity and high light-transmission
              characteristics of “Low-Iron” glass make it a highly popular
              glazing-choice for a wide variety of applications in Retail and
              Commercial buildings.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
