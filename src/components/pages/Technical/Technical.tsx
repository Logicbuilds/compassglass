import React from 'react';

export interface TechnicalProps {
  /** Example Technical property. */
  exampleTechnical?: string;
}

/**
 * Technical inforamatioin about related topics
 */
export const Technical: React.FC<TechnicalProps> = ({ ...props }) => {
  return (
    <div className="section">
      <div className="page container">
        <div className="cards-container glass frosted-glass">
          <div className="card card-padding-default">
            <h1>Technical</h1>
            <h2>What is glass?</h2>
            <p>
              Glass is a material with remarkable properties of fragility,
              durability and transparency and is an essential component of
              civilised life as we know it in the modern world. It protects us
              from short-term changes in the weather as well as from longer-term
              changes in the climate and provides us with a view of the world
              beyond the pane. If undisturbed, glass will continue to perform
              it’s protective role for centuries but, if disturbed by impact,
              excessive wind-load or other undue forces, it will break into
              fragments which can be potentially lethal. This unique combination
              of durability and fragility are enhanced by modern processing
              methods which provide a wide range of benefits of additional
              strength and security and allow glass to be used in a vast range
              of applications in all aspects of modern living.
            </p>

            <h2>Composition of commercial glass</h2>
            <h3>Soda lime glass</h3>

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
                  <td rowSpan={4}>Mined or Quarried Materials</td>
                  <td>Silica</td>
                  <td>Si</td>
                  <td>72</td>
                </tr>
                <tr>
                  <td>Limestone</td>
                  <td>CaCO 3</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>Dolomite</td>
                  <td>CaMg(CO 3 ) 2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Others</td>
                  <td>incl iron oxide **</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Manufactured Materials</td>
                  <td>Soda Ash</td>
                  <td>Na 2 CO 3</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>By-Product Material</td>
                  <td>Clean Scrap</td>
                  <td>“Cullet”</td>
                  <td>Up to 20% by volume</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
