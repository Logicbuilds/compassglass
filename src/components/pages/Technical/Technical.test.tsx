import React from 'react'
import { render } from '@testing-library/react'

import { Technical } from './Technical'

test('should render Technical without exploding', () => {
  const { container } = render(<Technical />)
  expect(container).toBeInTheDocument()
})
