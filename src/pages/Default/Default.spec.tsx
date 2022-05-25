import React from 'react'
import { screen } from '@testing-library/react'
import Default from './Default'
import { renderProvider } from '../../tests/renderProvider'

describe('<Default/>', () => {
  it('should Default page correctly', () => {
    renderProvider(<Default />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
