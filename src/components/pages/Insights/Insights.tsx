import React from 'react'

export interface InsightsProps {
  /** Example Insights property. */
  exampleInsights?: string
}

/**
 * Insights about related information
 */
export const Insights: React.FC<InsightsProps> = ({ ...props }) => {
  return (
    <div className="insights">
      <h1>Insights</h1>
    </div>
  )
}
