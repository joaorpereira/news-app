import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  max-width: 600px;
  width: 100%;
`
export const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid lightgrey;
  outline: none;
  width: 100%;
`
export const Button = styled.button`
  color: #ffffff;
  font-weight: bold;
  background-color: lightgrey;
  border: 1px solid lightgrey;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  width: 160px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: ease-in-out .3s;

  :hover{
    background-color: #cccccc;
  }
`
