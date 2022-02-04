import React, { useState, useEffect } from 'react'
import {
  ContainerCenter,
  ContainerImage,
  Image,
  Message,
  WrapperContainer,
  WrapperProgres
} from './styles'

export const Toast = (props) => {
  const toastList = props.value

  if (toastList.length === 4) {
    toastList.shift()
  }
  const [List, settoastList] = useState(toastList)

  useEffect(() => {
    settoastList([...toastList])
  }, [toastList])

  useEffect(() => {
    const interval = setTimeout(() => {
      if (toastList.length && List.length && props.time) {
        deleteToast(toastList[0].id)
      }
    }, props.time)

    return () => {
      clearInterval(interval)
    }
  }, [toastList, List])

  const deleteToast = (id) => {
    const itemList = List.findIndex((e) => e.id === id)
    const itemToast = toastList.findIndex((e) => e.id === id)
    List.splice(itemList, 1)
    toastList.splice(itemToast, 1)
    settoastList([...List])
  }
  return (
    <ContainerCenter position={props.position}>
      {List.map((toast, i) => (
        <WrapperContainer
          key={i}
          style={{ backgroundColor: toast.backgroundColor }}
          animation={props.animation}
          margin={props.margin}
        >
          <button onClick={() => deleteToast(toast.id)}>X</button>
          <ContainerImage>
            <Image src={toast.icon} alt='' />
          </ContainerImage>
          <div>
            <Message>{toast.description}</Message>
          </div>
          <WrapperProgres time={props.time} />
        </WrapperContainer>
      ))}
    </ContainerCenter>
  )
}

Toast.defaultProps = {
  animation: 'Left',
  time: 3000,
  margin: 'small',
  position: 'center'
}
