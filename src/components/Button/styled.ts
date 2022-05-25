import styled from 'styled-components'

type ButtonProps = {
  color?: string
  marginLeft?: string
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ color }) => color};
  padding: 10px;
  cursor: pointer;
  outline: none;
  margin-left: ${({ marginLeft }) => marginLeft};
  border: none;
  color: white;
  border-radius: 4px;
  font-weight: bold;
`
