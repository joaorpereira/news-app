import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

describe('<Navbar/>', () => {
  it('should render navbar with correct title and background color', () => {
    render(<Navbar />)

    expect(screen.getByRole('heading')).toHaveTextContent(
      '"The New York Times" article search application'
    )
    expect(screen.getByRole('navigation')).toHaveStyleRule(
      'background-color',
      '#000000'
    )
  })
})
