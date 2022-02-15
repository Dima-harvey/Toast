import React, { useState, useEffect, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme'
import { Button } from '../Button'
import { Message } from '../Message'
import { Image } from '../Image'
import { ContainerCenter, WrapperContainer, WrapperProgres } from './styles'

export const Toast = props => {
  const toastList = props.value
  const [list, settoastList] = useState(toastList)

  useEffect(() => {
    if (toastList.length === 4) {
      toastList.shift()
    }
    settoastList([...toastList])
  }, [toastList])

  useEffect(() => {
    const interval = setTimeout(() => {
      if (toastList.length && list.length && props.time) {
        deleteToast(toastList[0].id)
      }
    }, props.time)

    return () => {
      clearInterval(interval)
    }
  }, [toastList, list])

  const deleteToast = useCallback(
    id => {
      const itemList = list.findIndex(e => e.id === id)
      const itemToast = toastList.findIndex(e => e.id === id)
      list.splice(itemList, 1)
      toastList.splice(itemToast, 1)
      settoastList([...list])
    },
    [list]
  )
  return (
    <ThemeProvider theme={theme}>
      <ContainerCenter position={props.position}>
        {list.map((toast, i) => (
          <WrapperContainer
            key={i}
            style={{ backgroundColor: toast.backgroundColor }}
            animation={props.animation}
            margin={props.margin}
          >
            <Button onClick={() => deleteToast(toast.id)} />
            <Image src={toast.icon} alt="" />
            <div>
              <Message>{toast.description}</Message>
            </div>
            <WrapperProgres time={props.time} />
          </WrapperContainer>
        ))}
      </ContainerCenter>
    </ThemeProvider>
  )
}

Toast.defaultProps = {
  animation: 'Left',
  time: 3000,
  margin: 'small',
  position: 'top_right',
}
