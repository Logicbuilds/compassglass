import React from 'react'
import { render } from '@testing-library/react'

import { About } from './About'

test('should render About without exploding', () => {
  const { container } = render(<About />)
  expect(container).toBeInTheDocument()
})
