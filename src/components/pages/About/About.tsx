import React from 'react'

export interface AboutProps {
  /** Example About property. */
  exampleAbout?: string
}

/**
 * About compass glass
 */
export const About: React.FC<AboutProps> = ({ ...props }) => {
  return (
    <div className="about">
      <h1>About</h1>
    </div>
  )
}
