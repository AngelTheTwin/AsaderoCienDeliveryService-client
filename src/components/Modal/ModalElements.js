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
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
    padding-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalContent = styled.div`
    width: 50%;
    position: relative;
    background-color: #222222;
	color: white;
    border-radius: 10px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;

    @media screen and (max-width: 768px) {
        width: 80%;
	}
`

export const HeaderModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid #E8E8E8;

    h3{
        font-weight: 500;
        font-size: 20px;
        margin: 0;
    }
`
export const ButtonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 16px;
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
