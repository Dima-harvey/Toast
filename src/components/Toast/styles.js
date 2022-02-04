import styled, { keyframes } from 'styled-components'

export const ContainerCenter = styled.div`
  margin: ${(props) => (props.position === 'center' ? '0 auto' : 'none')};
  display: flex;
  width: 250px;
  flex-direction: column;
  border-radius: 10px;
  button {
    position: relative;
    margin-top: 5px;
    margin-right: 10px;
    float: right;
    color: #fff;
    outline: none;
    border: none;
    line-height: 1;
    font-size: 16px;
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
  }
`
export const ContainerImage = styled.div`
  float: left;
  margin-right: 10px;
`
export const Image = styled.img`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 10px;
  width: 40px;
  height: 40px;
`
export const Message = styled.p`
  padding-top: 15px;
  color: white;
`
export const rotateLeft = keyframes`
	from {
		transform: translateX(100%);
		
	}
	to {
		transform: translateX(0%);
	}
`
export const rotateRight = keyframes`
	from {
		transform: translateX(-100%);
		
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
