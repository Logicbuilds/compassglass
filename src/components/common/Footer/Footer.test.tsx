import React from 'react'
import { render } from '@testing-library/react'

import { Footer } from './Footer'

test('should render Footer without exploding', () => {
  const { container } = render(<Footer />)
  expect(container).toBeInTheDocument()
})
