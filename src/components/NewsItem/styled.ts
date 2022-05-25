import styled from 'styled-components'

export const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 10px 20px 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  border-radius: 4px;
  cursor: pointer;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

type ParagraphProps = {
  color?: string
  textAlign?: string
}

export const Paragraph = styled.p<ParagraphProps>`
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`
export const SectionName = styled.span`
  padding: 5px 10px;
  background-color: lightblue;
  margin: 10px 0;
  border-radius: 8px;
  margin-right: 5px;
`
export const Box = styled.div`
  display: flex;
  align-items: center;
`
