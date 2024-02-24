// External
import styled from 'styled-components'

// Internal
import colors from '../../../styles/configs/colors'
import fonts from '../../../styles/configs/fonts'

function getPosterColor(props: PosterProps): string {
  const { children } = props

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

type DescriptionProps = {
  editing: string
}

export const Description = styled.textarea<DescriptionProps>`
  width: 100%;
  padding: ${({ editing }) => (editing === 'true' ? '16px' : '16px 0')};
  margin-bottom: 16px;
  background-color: ${({ editing }) =>
    editing === 'true' ? colors.white : 'transparent'};
  font-family: ${fonts.robotoMono};
  font-weight: 400;
  font-size: 14px;
  color: ${colors.grayDark};
  border: 1px solid
    ${({ editing }) => (editing === 'true' ? colors.gray : 'transparent')};
  border-radius: 8px;
  outline: none;
  resize: none;
  transition: padding 0.3s ease;
`

export const Posters = styled.ul`
  display: flex;
  gap: 16px;
  margin: 18px 0;
`
type PosterProps = {
  type: 'priority' | 'status'
  children: React.ReactNode
}

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
