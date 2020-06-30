import React from 'react'

export interface BlogProps {
  /** Example Blog property. */
  exampleBlog?: string
}

/**
 * Blog page
 */
export const Blog: React.FC<BlogProps> = ({ ...props }) => {
  return (
    <div className="blog">
      <h1>Blog</h1>
    </div>
  )
}
