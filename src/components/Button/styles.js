import styled from 'styled-components'

export const ButtonContainer = styled.button`
  position: relative;
  margin-top: ${props => props.theme.sizeMargin.s}px;
  margin-right: ${props => props.theme.sizeMargin.xs}px;
  float: right;
  color: ${props => props.theme.colors.white};
  border: none;
  font-size: 15px;
  background: none;
`
