import React from 'react'
import { render } from '@testing-library/react'

import { Faq } from './Faq'

test('should render Faq without exploding', () => {
  const { container } = render(<Faq />)
  expect(container).toBeInTheDocument()
})
