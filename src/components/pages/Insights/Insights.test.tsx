import React from 'react'
import { render } from '@testing-library/react'

import { Insights } from './Insights'

test('should render Insights without exploding', () => {
  const { container } = render(<Insights />)
  expect(container).toBeInTheDocument()
})
