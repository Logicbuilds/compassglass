import React from 'react'

export interface FaqProps {
  /** Example Faq property. */
  exampleFaq?: string
}

/**
 * Frequently asked questions page
 */
export const Faq: React.FC<FaqProps> = ({ ...props }) => {
  return (
    <div className="faq">
      <h1>Faq</h1>
    </div>
  )
}
