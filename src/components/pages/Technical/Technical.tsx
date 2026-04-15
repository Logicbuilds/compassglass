import React from 'react';
// import ReactMarkdown from 'react-markdown';

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
            {/* @ts-ignore */}
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
                  {techData.compositionOfCommercialGlass.content.map(
                    (row, idx) =>
                      row.data.map((item, itemIdx) => (
                        <tr key={`row-${idx}-${itemIdx}`}>
                          {itemIdx === 0 && (
                            <td
                              rowSpan={row.data.length}
                              className="cell-origin"
                            >
                              {row.origin}
                            </td>
                          )}
                          <td>{item.description.value1}</td>
                          <td>{item.description.value2}</td>
                          <td>{item.percentage}</td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
            {/* @ts-ignore */}
            <div class="small">
              <p>
                * Note: All commercial window glass contains a residue of iron
                oxide (Fe2O3 ) which is difficult and expensive to remove and
                gives the glass it’s characteristic green edge-colour which is
                considered acceptable for most glazing applications, including
                mirrors. However, to meet the demand for a “whiter”
                architectural window glass, it is possible to remove most of the
                residual iron by further processing and additional cost to
                create Low-Iron (“Extra-Clear”) glass which is almost perfectly
                white with no green colour at the edges. The clarity and high
                light-transmission characteristics of “Low-Iron” glass make it a
                highly popular glazing-choice for a wide variety of applications
                in Retail and Commercial buildings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
