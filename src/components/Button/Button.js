import React from 'react'
import { ButtonContainer } from './styles'

const Button = (props) => {
  return <ButtonContainer onClick={props.onClick}>X</ButtonContainer>
}

export default Button
