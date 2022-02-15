import styled from 'styled-components'

export const ContainerImage = styled.div`
  float: left;
  margin-right: ${props => props.theme.sizeMargin.xs}px;
`
export const Logo = styled.img`
  text-align: center;
  padding-top: ${props => props.theme.sizeMargin.small}px;
  padding-bottom: ${props => props.theme.sizeMargin.m}px;
  padding-left: ${props => props.theme.sizeMargin.xs}px;
  width: 40px;
  height: 40px;
`
