import React from 'react'
import Router from '../../routes/routes'
import Navbar from '../../components/Navbar/Navbar'

import * as S from './styled'

const Default = () => {
  return (
    <>
      <Navbar />
      <S.Main>
        <Router />
      </S.Main>
    </>
  )
}

export default Default
