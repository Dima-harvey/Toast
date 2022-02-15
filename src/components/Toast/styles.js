import styled, { keyframes } from 'styled-components'

export const ContainerCenter = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  border-radius: 10px;
  z-index: 999999;
  position: absolute;
  ${props =>
    props.position === 'top_right'
      ? props.theme.position.top_right
      : props.position ==='top_left'
      ? props.theme.position.top_left
      : props.position ==='bottom_right'
      ? props.theme.position.bottom_right
      : props.position ==='bottom_left'
      ? props.theme.position.bottom_left
      : props.position ==='top_center'
      ? props.theme.position.top_center
      : props.theme.position.bottom_center};
`

export const rotateLeft = keyframes`
	from {
		transform: translateX(30%);
		
	}
	to {
		transform: translateX(0%);
	}
`
export const rotateRight = keyframes`
	from {
		transform: translateX(-30%);
		
	}
	to {
		transform: translateX(0%);
	}
`
export const load = keyframes`
  0%{ width: 100%;
	opacity:1; }
  100% { width: 1%;
	opacity:0 }
`
export const WrapperContainer = styled.div`
  animation: ${props =>
      props.animation === 'Left' ? rotateLeft : rotateRight}
    2s;
  justify-content: flex-end;
  margin-top: ${props =>
    props.margin === 'small'
      ? props.theme.sizeMargin.small
      : props.theme.sizeMargin.big}px;
  border-radius: 13px;
`
export const WrapperProgres = styled.div`
  height: 5px;
  border-radius: 13px;
  background: ${props => props.theme.colors.pink};
  animation: ${load} ${props => props.time}ms linear forwards;
`
