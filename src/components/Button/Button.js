import React from 'react'
import { ButtonContainer } from './styles'

export const Button = props => {
  return <ButtonContainer onClick={props.onClick}>X</ButtonContainer>
}

