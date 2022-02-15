const white = '#ffffff'
const red = '#e25837'
const green = '#37e29a'
const purple = '#9a40d3'
const pink = '#ff8fa2'
const yellow = '#f4e048'

const sizeMargin = {
  s: 5,
  xs: 10,
  m: 15,
  small: 20,
  big: 40,
}

const position = {
  top_right: { top: '30px', right: '12px' },
  bottom_right: { bottom:'30px', right: '12px' },
  top_left: { top: '30px', left: '12px' },
  bottom_left: { bottom: '30px', left: '12px' },
  top_center: { top: '30px', right: '50%' },
  bottom_center: { bottom: '30px', right: '50%' }
}

export default {
  position,
  sizeMargin,
  colors: {
    green,
    purple,
    white,
    red,
    pink,
    yellow,
  },
}
