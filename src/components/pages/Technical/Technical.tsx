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
            <ReactMarkdown className="small" source={techData.disclaimer} />
          </div>
        </div>
      </div>
    </div>
  );
};
