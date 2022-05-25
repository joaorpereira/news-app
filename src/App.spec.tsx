import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App/>', () => {
  it("should type the qeury value, click in the 'Search' button and receive a list of news", () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        name: /"The New York Times" article search application/i,
      })
    ).toBeInTheDocument()
  })
})
