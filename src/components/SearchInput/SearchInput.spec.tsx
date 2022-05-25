import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('<SearchInput/>', () => {
  it('should set a value when type in the input', async () => {
    render(<SearchInput onChange={jest.fn()} onClick={jest.fn()} />)
    const input = screen.getByRole('textbox') as HTMLInputElement

    userEvent.type(input, 'Brazil')
    expect(input).toHaveValue('Brazil')
  })

  it("should set a value when type in the input and enable the 'onclick' event", async () => {
    const onClick = jest.fn()
    render(<SearchInput onChange={jest.fn()} onClick={onClick} />)
    const input = screen.getByRole('textbox') as HTMLInputElement

    userEvent.type(input, 'Brazil')
    expect(input).toHaveValue('Brazil')

    const button = screen.getByRole('button')

    userEvent.click(button)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
