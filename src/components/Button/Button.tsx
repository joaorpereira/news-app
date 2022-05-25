import React from 'react'
import * as S from './styled'

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  color: string
} & React.HTMLProps<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, onClick, color }) => {
  return (
    <S.Button color={color} onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default Button
