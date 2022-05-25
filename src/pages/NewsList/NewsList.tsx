import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../services/api'
import { Response, New } from '../../utils/types'
import { set } from '../../store/slices/newSlice'
import { useAppDispatch } from '../../hooks/hooks'

import Loading from '../../assets/Loading'
import Button from '../../components/Button/Button'
import NewsItem from '../../components/NewsItem/NewsItem'
import SearchInput from '../../components/SearchInput/SearchInput'

import * as S from './styled'

const NewsList = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [newsList, setNewsList] = useState<New[]>([])
  const [searchValue, setSearchValue] = useState('')
  const [error, setError] = useState('')
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (pageValue: number) => {
    try {
      setLoading(true)
      if (searchValue === '') {
        throw new Error('Invalid search value')
      }
      const { data } = (await api.get(
        `?q=${searchValue.toLocaleLowerCase()}&page=${pageValue}&api-key=${
          process.env.REACT_APP_NEWS_KEY
        }`
      )) as Response

      setNewsList(data.response.docs)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleNext = () => {
    setPage(prev => prev + 1)
    handleSearch(page + 1)
  }

  const handleBack = () => {
    if (page === 0) {
      return
    }
    setPage(prev => prev - 1)
    handleSearch(page - 1)
  }

  const handleDetailPage = (item: New) => {
    const id = item.snippet.toLocaleLowerCase().split(' ').join('-')
    navigate(`/${id}`)
    dispatch(set(item))
  }

  return (
    <S.Section>
      <SearchInput
        onClick={() => handleSearch(page)}
        onChange={handleSearchValue}
        value={searchValue}
      />
      {!!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      {loading && <Loading />}
      {newsList.length > 0 && !loading ? (
        <>
          <S.List>
            {newsList.map(el => (
              <NewsItem
                key={el._id}
                item={el}
                onClick={() => handleDetailPage(el)}
              />
            ))}
          </S.List>
          <S.Footer>
            <Button
              onClick={handleBack}
              color='lightgreen'
              disabled={page === 0}
            >
              Back
            </Button>
            <Button onClick={handleNext} color='lightgreen'>
              Next
            </Button>
          </S.Footer>
        </>
      ) : null}
    </S.Section>
  )
}

export default NewsList
