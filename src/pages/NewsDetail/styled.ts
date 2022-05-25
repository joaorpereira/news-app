import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 750px;
  padding-top: 100px;
`
type ParagraphProps = {
  color?: string
  textAlign?: string
  margin?: string
}

export const Paragraph = styled.p<ParagraphProps>`
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  text-align: ${({ textAlign }) => textAlign};
`

export const Title = styled.h1`
  text-align: center;
`
export const Link = styled.a`
  color: blue;
  text-decoration: underline;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin: 100px 50px;
`
