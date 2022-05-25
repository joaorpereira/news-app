import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import NewsDetail from './NewsDetail'
import { renderWithRedux } from '../../tests/renderWithRedux'
import { item } from 'pages/NewsDetail/NewsDetail.stub'
import userEvent from '@testing-library/user-event'

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}))

describe('<NewsDetail/>', () => {
  it('should render correctly the component with valid properties', () => {
    renderWithRedux(<NewsDetail />, { newReducer: { newInfo: item } })

    expect(
      screen.getByRole('button', {
        name: /RETURN TO RESULTS PAGE/i,
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent(
      'In a written opinion explaining his decision to dismiss Ms. Palin’s defamation case, Judge Jed S. Rakoff also stated his faith in the integrity of the jury.'
    )
    expect(screen.getByText('03-01-2022')).toBeInTheDocument()
    expect(
      screen.getByText(
        'A federal judge on Tuesday refuted Sarah Palin’s claims that The New York Times defamed her in a 2017 editorial, concluding in a written opinion that the case should be dismissed because she had “wholly failed to prove her case even to the minimum standard required by law.”'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Click here to read the full article/i })
    ).toBeInTheDocument()
  })

  it("should redirect to home page when button 'RETURN TO RESULTS PAGE' is clicked", async () => {
    renderWithRedux(<NewsDetail />, { newReducer: { newInfo: item } })

    const button = screen.getByRole('button', {
      name: /RETURN TO RESULTS PAGE/i,
    })
    userEvent.click(button)

    await waitFor(() =>
      expect(mockedNavigate).toHaveBeenCalledWith(-1)
    )
  })

  it("should redirect to home page when button 'RETURN TO RESULTS PAGE' when 'newInfo' property is equal to 'null'", async () => {
    renderWithRedux(<NewsDetail />, { newReducer: { newInfo: null } })

    const button = screen.getByRole('button', {
      name: /RETURN TO RESULTS PAGE/i,
    })
    userEvent.click(button)

    await waitFor(() =>
      expect(mockedNavigate).toHaveBeenCalledWith('/')
    )
  })
})
