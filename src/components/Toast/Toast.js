import React, { useState, useEffect, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'

import { Button } from '@components/Button'
import { Message } from '@components/Message'
import { Image } from '@components/Image'
import theme from '@/theme'
import success from '@/assets/images/success.svg'
import warning from '@/assets/images/warning.svg'
import question from '@/assets/images/question.svg'
import error from '@/assets/images/error.svg'

import { ContainerCenter, WrapperContainer, WrapperProgres } from './styles'

export const Toast = props => {
  const [newlist, setList] = useState([])
  const toastList = newlist
  const [list, settoastList] = useState(toastList)
  let Properties = null

  const showToast = type => {
    const id = Math.floor(Math.random() * 50 + 1)
    switch (type) {
      case 'success':
        Properties = {
          id,
          description: 'Success toast example',
          backgroundColor: `${theme.colors.green}`,
          icon: success,
        }
        break
      case 'error':
        Properties = {
          id,
          description: 'Error toast example',
          backgroundColor: `${theme.colors.red}`,
          icon: error,
        }
        break
      case 'info':
        Properties = {
          id,
          description: 'Info toast example',
          backgroundColor: `${theme.colors.purple}`,
          icon: question,
        }
        break
      case 'warning':
        Properties = {
          id,
          description: 'Warning toast example',
          backgroundColor: `${theme.colors.yellow}`,
          icon: warning,
        }
        break

      default:
        setList([])
    }
    setList([...newlist, Properties])
  }

  useEffect(() => {
    showToast(props.value)
  }, [props.value])

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
    [list, toastList]
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
              <Message>
                {props.children !== undefined
                  ? props.children
                  : toast.description}
              </Message>
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
  value: 'info',
}
