import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

export const PaymentMethodContent = styled.div`
	height: 100%;
	font-family: 'Secular one';
	margin: 0;
	top: auto;
	width: 100%;
	color: white;
	display: flex;
`

export const Navbar = styled.nav`
	font-family: 'ABeeZee';
	top: 0;
	background-color: black;
	width: 100%;
	position: fixed;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	height: 70px;
	z-index: 999;
`

export const BackButton = styled(NavLink)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0;
	position: fixed;
	margin-right: 95%;
`

export const BackIcon = styled(BiArrowBack)`
	font-size: large;
	font-weight: bold;
`

export const Title = styled.h4`
	margin: 0;
`
export const Grid = styled.div`
	display: grid;
    grid-template-columns: 1fr 1fr 1fr;
	width: 100%;
    gap: 32px;
    margin-top: 3%;
    padding-left: 16px;
    padding-right: 16px;

    @media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

export const ButtonAgregar = styled.div`
    background-color: #222222;
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    border-radius: 20px;
    width: 90%;
    aspect-ratio: 16/9;
    align-self: center;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 100%;
		max-width: 100%;
        margin: 0;
	}
`

export const Plus = styled.div`
    color: #FFFF;
	font-size: 400%;
	font-family: 'Secular one';
`

export const Text = styled.div`
    color: #FFFF;
	font-size: 100%;
	font-family: 'Secular one';
    margin-bottom: 6%;
`

export const DivTarjeta = styled.div`
	display: flex;
	width: 100%;
    height: fit-content;
    align-items: center;
	justify-content: center;
    padding-bottom: 16px;

    
    @media screen and (max-width: 768px) {
        padding-bottom: 8px;
	}
`