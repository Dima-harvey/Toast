import styled, { keyframes } from 'styled-components'

export const ContainerCenter = styled.div`
  float: ${(props) => (props.position === 'center' ? 'left' : 'right')};
  display: flex;
  width: 250px;
  top: 12px;
  right: 50%;
  flex-direction: column;
  border-radius: 10px;
  z-index: 999999;
  position: absolute;
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
  animation: ${(props) =>
      props.animation === 'Left' ? rotateLeft : rotateRight}
    2s;
  justify-content: flex-end;
  margin-top: ${(props) => (props.margin === 'small' ? 20 : 40)}px;
  border-radius: 13px;
`
export const WrapperProgres = styled.div`
  height: 5px;
  border-radius: 13px;
  background: #ff8fa2;
  animation: ${load} ${(props) => props.time}ms linear forwards;
`
