import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('<Button/>', () => {
  it("should render button with required props of color as 'black' and children as 'click'here", () => {
    render(
      <Button onClick={jest.fn()} color='#000000'>
        Click here
      </Button>
    )
    const btnElement = screen.getByRole('button', { name: /click here/i })
    expect(btnElement).toHaveTextContent('Click here')
    expect(btnElement).toHaveStyleRule('background-color', '#000000')
  })

  it('should call onClick function one time when the button was clicked', () => {
    const handleClick = jest.fn()
    render(
      <Button color='#000000' onClick={handleClick}>
        Click here
      </Button>
    )
    const btnElement = screen.getByRole('button', { name: /click here/i })
    userEvent.click(btnElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
