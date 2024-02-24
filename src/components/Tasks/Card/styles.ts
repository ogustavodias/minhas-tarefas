// External
import styled from 'styled-components'

// Internal
import colors from '../../../styles/configs/colors'
import fonts from '../../../styles/configs/fonts'
import { Poster as PosterProps } from './index'

function getPosterColor(props: PosterProps): string {
  const { children } = props

  console.log(props.children)

  const color =
    children === 'concluído'
      ? colors.green
      : children === 'pendente'
      ? colors.yellow
      : children === 'importante'
      ? colors.orange
      : children === 'urgente'
      ? colors.red
      : colors.gray

  return color
}

export const Wrapper = styled.li`
  padding: 16px;
  background-color: ${colors.whiteLight};
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Description = styled.textarea`
  width: 100%;
  padding: 16px 0;
  margin-bottom: 16px;
  background-color: transparent;
  font-family: ${fonts.robotoMono};
  font-weight: 400;
  font-size: 14px;
  color: ${colors.grayDark};
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  resize: none;
  transition: padding 0.3s ease;

  &:focus {
    padding: 16px;
    background-color: ${colors.white};
    border: 1px solid ${colors.gray};
  }
`

export const Posters = styled.ul`
  display: flex;
  gap: 16px;
  margin: 18px 0;
`
export const Poster = styled.li<PosterProps>`
  padding: 4px 8px;
  background-color: ${(props) => getPosterColor(props)};
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  color: ${colors.white};
`

export const ActionBar = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 18px;
  border-top: 1px solid ${colors.gray};
`
