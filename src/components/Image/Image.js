import React from 'react'
import { ContainerImage, Logo } from './styles'

const Image = (props) => {
  const { src, alt } = props
  return (
    <ContainerImage>
      <Logo src={src} alt={alt} />
    </ContainerImage>
  )
}

export default Image
