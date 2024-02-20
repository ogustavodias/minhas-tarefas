// External
import styled from 'styled-components'

// Internal
import colors from '../../styles/configs/colors'
import { Props } from './index'

function checkRoleColor(props: Props): string {
  const role = props.role
  const color =
    role === 'save' || role === 'add'
      ? colors.green
      : role === 'remove' || role === 'cancel'
      ? colors.red
      : colors.darkBlue

  return color
}

export const Button = styled.button<Props>`
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  background-color: ${(props: Props) => checkRoleColor(props)};
  font-size: 12px;
  font-weight: 700;
  color: ${colors.white};
  cursor: pointer;

  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`
