import React, { useState } from 'react'
import { Toast } from 'toast'

function App() {
  const arOptions = ['success', 'error', 'warning', 'info']
  const [value, setValue] = useState('warning')

  const options = arOptions.map((text, index) => {
    return <option key={index}>{text}</option>
  })

  return (
    <>
      Выберите toast: 
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        {options}
      </select>
      <Toast />
      <Toast value="warning" position="top_left">
        Good
      </Toast>
      <Toast
        value="success"
        position="bottom_right"
        time="4000"
        animation="Right"
        margin="big"
      />
      <Toast
        value="warning"
        position="bottom_left"
        time="4000"
        animation="Right"
        margin="big"
      />
      <Toast
        value={value}
        position="top_center"
        time="4000"
        animation="Right"
        margin="small"
      />
    </>
  )
}

export default App
