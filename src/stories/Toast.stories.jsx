import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'

import { POSITIONS, ANIMATION, MARGIN, TIME, BUTTON_TOAST } from '../constants'
import theme from '../theme'
import { Toast } from '../components/Toast'
import success from '../assets/success.svg'
import warning from '../assets/warning.svg'
import question from '../assets/question.svg'
import error from '../assets/error.svg'

const stories = storiesOf('App Test', module)
stories.addDecorator(withKnobs)

stories.add('App', () => {
  const [list, setList] = useState([])
  let Properties = null

  const showToast = type => {
    const id = Math.floor(Math.random() * 50 + 1)
    switch (type) {
      case 'success':
        Properties = {
          id,
          description: 'Success toast example',
          backgroundColor: `${theme.colors.green}`,
          icon: success
        }
        setList([...list, Properties])
        break
      case 'error':
        Properties = {
          id,
          description: 'Error toast example',
          backgroundColor:  `${theme.colors.red}`,
          icon: error
        }
        setList([...list, Properties])
        break
      case 'info':
        Properties = {
          id,
          description: 'Info toast example',
          backgroundColor: `${theme.colors.purple}`,
          icon: question
        }
        setList([...list, Properties])
        break
      case 'warning':
        Properties = {
          id,
          description: 'Warning toast example',
          backgroundColor: `${theme.colors.yellow}`,
          icon: warning
        }
        setList([...list, Properties])
        break

      default:
        setList([])
    }
  }
  return (
    <React.Fragment>
      {BUTTON_TOAST.map(index => (
        <button key={index.type} onClick={() => showToast(index.type)}>
          {index.type}
        </button>
      ))}
      <Toast
        value={list}
        position={select('position', POSITIONS)}
        time={select('time (ms)', TIME)}
        animation={select('animation', ANIMATION)}
        margin={select('margin', MARGIN)}
      />
    </React.Fragment>
  )
})
