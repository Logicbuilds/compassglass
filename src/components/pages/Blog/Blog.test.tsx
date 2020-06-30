import React from 'react'
import { render } from '@testing-library/react'

import { Blog } from './Blog'

test('should render Blog without exploding', () => {
  const { container } = render(<Blog />)
  expect(container).toBeInTheDocument()
})
