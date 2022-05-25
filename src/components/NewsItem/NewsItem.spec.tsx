import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import NewsItem from './NewsItem'
import { item, item2 } from './NewsItem.stub'

describe('<NewsItem/>', () => {
  it('should render NewsItem with correct props', () => {
    render(<NewsItem item={item} onClick={jest.fn()} />)

    expect(screen.getByText('By Jeremy W. Peters')).toBeInTheDocument()
    expect(screen.getByText('Business Day')).toBeInTheDocument()
    expect(screen.getByText('03-01-2022')).toBeInTheDocument()
    expect(
      screen.getByText(
        'In a written opinion explaining his decision to dismiss Ms. Palin’s defamation case, Judge Jed S. Rakoff also stated his faith in the integrity of the jury.'
      )
    ).toBeInTheDocument()
  })

  it('should render NewsItem be able to be clicked', () => {
    const handleClick = jest.fn()
    render(<NewsItem item={item} onClick={handleClick} />)

    const linkBtn = screen.getByRole('listitem')
    userEvent.click(linkBtn)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("should render 'Not known' message when not value of original is provided", () => {
    const handleClick = jest.fn()
    render(<NewsItem item={item2} onClick={handleClick} />)

    expect(screen.getByText('Not known')).toBeInTheDocument()
  })
})
