import React from 'react'
import { render } from '@testing-library/react'

import { Header } from './Header'

test('should render Header without exploding', () => {
  const { container } = render(<Header />)
  expect(container).toBeInTheDocument()
})
