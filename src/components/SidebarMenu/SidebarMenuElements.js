import styled from 'styled-components'
import {BiUserCircle, BiReceipt, BiLogOut } from 'react-icons/bi'
import {MdOutlinePayment} from 'react-icons/md'
import {RiMapPinUserLine, RiSurgicalMaskLine} from 'react-icons/ri'
import {BsPinMap} from 'react-icons/bs'


export const SidebarContent = styled.div`
    width: 17%;
    position: fixed;
    background-color: #222222;
	color: white;
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 15px;
    margin-left: 2%;
	z-index: 9999999;
    @media screen and (max-width: 768px) {
        width: 45%;
	}
`

export const BodySidebar = styled.div`
	margin-top: 10px;
`

export const Section = styled.div`
	border-bottom: solid rgba(255, 255, 255, 0.1) 1px;
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    gap: 8px;
    padding-bottom: 5px;
    padding-top: 5px;
`

export const Li = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    cursor: pointer;
	transition: 0.5s;

	&:hover{
        background-color: #323232;
		transform: scale(105%);
    }
`

export const Link = styled.p`
	font-size: 75%;
	font-family: 'Secular one';
    
`

export const UserIcon = styled(BiUserCircle)`
	font-size: 130%;
`

export const PaymentIcon = styled(MdOutlinePayment)`
	font-size: 130%;
`

export const ReceiptIcon = styled(BiReceipt)`
	font-size: 130%;
`

export const PinUser = styled(RiMapPinUserLine)`
	font-size: 130%;
`

export const SurgicalMask = styled(RiSurgicalMaskLine)`
	font-size: 130%;
`

export const PinMap = styled(BsPinMap)`
	font-size: 130%;
`

export const LogOutIcon = styled(BiLogOut)`
	font-size: 130%;
`