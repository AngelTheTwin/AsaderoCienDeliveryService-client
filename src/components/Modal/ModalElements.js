import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'

export const CloseIcon = styled(AiOutlineClose)`
	font-size: 20px;
	&:hover{
        color: #C40C0C;
    }
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 20px;
    left: 0;
    background-color: rgba(0,0,0,.5);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
    padding-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
	z-index: 9999;
`

export const ModalContent = styled.div`
    width: 50%;
    position: relative;
    background-color: #222222;
	color: white;
    border-radius: 10px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
	max-height: 80%;
	overflow-y: auto;
	top: -20px;

    @media screen and (max-width: 768px) {
        width: 80%;
	}
`

export const HeaderModal = styled.div`
    padding-top: 20px;
	position: fixed;
    display: flex;
	height: auto;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid #E8E8E8;
	background-color: #222222;
	width: 50%;
    z-index: 999;
	@media screen and (max-width: 768px) {
        width: 80%;
	}

    h3{
        font-weight: 500;
        font-size: 20px;
        margin: 0;
    }
`

export const BodyModal = styled.div`
	margin-top: 70px;
`

export const ButtonCerrar = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    transition: .3 ease all;
    border-radius: 5px;
    color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`
