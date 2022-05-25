import { format } from 'date-fns'
import React from 'react'
import { New } from '../../utils/types'

import * as S from './styled'

type NewsItemProps = {
  item: New
  onClick: React.MouseEventHandler<HTMLLIElement>
}

const NewsItem: React.FC<NewsItemProps> = ({ item, onClick }) => {
  return (
    <S.ListItem onClick={onClick}>
      <S.Header>
        <p>
          <b>
            {item.byline.original !== '' ? item.byline.original : 'Not known'}
          </b>
        </p>
        <S.Box>
          <S.SectionName>{item.section_name}</S.SectionName>
          <S.Paragraph color='grey'>
            {format(new Date(item.pub_date), 'MM-dd-yyyy')}
          </S.Paragraph>
        </S.Box>
      </S.Header>
      <S.Paragraph textAlign='justify'>{item.snippet}</S.Paragraph>
    </S.ListItem>
  )
}

export default NewsItem
