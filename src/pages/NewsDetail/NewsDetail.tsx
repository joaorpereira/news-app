import { useEffect } from 'react'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useAppSelector } from '../../hooks/hooks'

import * as S from './styled'

const NewsDetail = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  const { newInfo } = useAppSelector(state => state.newReducer)

  useEffect(() => {
    if (!newInfo) {
      navigate('/')
    }
  }, [navigate, newInfo])

  return (
    <S.Section>
      <S.ButtonWrapper>
        <Button onClick={handleBack} color='lightblue'>
          RETURN TO RESULTS PAGE
        </Button>
      </S.ButtonWrapper>
      <S.Content>
        <S.Title>{newInfo?.snippet}</S.Title>
        <S.Paragraph color='gray' margin='10px 0'>
          {!!newInfo &&
            format(new Date(newInfo?.pub_date as string), 'MM-dd-yyyy')}
        </S.Paragraph>
        <S.Paragraph textAlign='justify' margin='0 0 20px 0'>
          {newInfo?.lead_paragraph}
        </S.Paragraph>
        <S.Link href={newInfo?.web_url} target='_blank' rel='noreferrer'>
          Click here to read the full article
        </S.Link>
      </S.Content>
    </S.Section>
  )
}

export default NewsDetail
