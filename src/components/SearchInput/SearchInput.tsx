import React from 'react'
import * as S from './styled'

type SearchInputProps = {
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: () => Promise<void>
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClick,
}) => {

  return (
    <S.Wrapper>
      <S.Input type='text' value={value} onChange={onChange} />
      <S.Button onClick={onClick}>Search</S.Button>
    </S.Wrapper>
  )
}

export default SearchInput
