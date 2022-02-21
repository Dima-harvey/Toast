import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { Toast } from '@components/Toast'
import { POSITIONS, ANIMATION, MARGIN, TIME, BUTTON_TOAST } from '@/constants'

const stories = storiesOf('App Test', module)
stories.addDecorator(withKnobs)

stories.add('App', () => {
  const toast = select('toast', BUTTON_TOAST)
  console.log("toast:",toast)

  return (
    <React.Fragment>
      <Toast
        value={toast}
        position={select('position', POSITIONS)}
        time={select('time (ms)', TIME)}
        animation={select('animation', ANIMATION)}
        margin={select('margin', MARGIN)}
      >
        {text('label')}
      </Toast>
    </React.Fragment>
  )
})
