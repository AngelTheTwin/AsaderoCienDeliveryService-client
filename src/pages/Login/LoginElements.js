import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import imagen from '../../assets/logo-blanco.svg'

export const LoginContent = styled.div`
font-family: 'Secular one';
	background: #0F0F0F;
	margin: 0;
	top: auto;
	width: 100%;
	height: 100%;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
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

export const Grid = styled.nav`
	margin-top: 70px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 16px;
	width: 100%;
	max-width: 1500px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

export const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Img = styled.img.attrs({
	src: imagen
})`
	color: white;
	aspect-ratio: 1/1;
	width: 100%;
	max-width: 700px;
	align-self: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Label = styled.label.attrs({
	
})`
	font-weight: 500;
	font-size: 50px;
	line-height: 73px;
	margin-bottom: 30px;
`

export const LoginButtons = styled.div`
	display: grid;
	gap: 16px;
`

export const Icon = styled.img`
	aspect-ratio: 1/1;
	height: 24px;
	margin-right: 10px;
`

export const FacebookButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 330px;
	height: 60px;
	background: #3B5998;
	border-radius: 10px;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover{
		color: #3B5998;
		background-color: white;
		transition: 0.2s ease-in-out;
	}
`

export const GoogleButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 330px;
	height: 60px;
	background: #C62D2D;
	border-radius: 10px;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover{
		color: #C62D2D;
		background-color: white;
		transition: 0.2s ease-in-out;
	}
`

export const AppleButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 330px;
	height: 60px;
	background: #2E2C36;
	border-radius: 10px;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover{
		color: #2E2C36;
		background-color: white;
		transition: 0.2s ease-in-out;
	}
`

export const Divider = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;
`

export const Line = styled.div`
	height: 2px;
	width: 145px;
	max-width: 100%;
	background-color: white;
	margin: 0 10px;
`

export const DividerTxt = styled.p`
	padding: 5px;
	margin: 0;
`

export const TelefonoTextField = styled(PhoneInput).attrs({
	placeholder: 'Escribe tu numero',
	// defaultCountry: 'MX'
})`
	width: 70%;
	line-height: normal;
	--PhoneInputCountryFlag-height:20px;
	margin-bottom: 20px;

	&>input{
		font-size: 16px;
		margin-left: 5px;
		background-color: black;
		padding: 8px;
		border-radius: 10px;
		color: white;
	}
`

export const ButtonsContainer = styled.nav`
	width: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`

export const Button = styled.button`
	background-color: #C40B0B;
	color: white;
	border-radius: 10px;
	border: none;
	padding: 10px;
	width: 100%;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover{
		color: black;
		background-color: white;
		transition: 0.2s ease-in-out;
	}
`

export const Registro = styled.div`
	font-family: 'ABeeZee';
	margin-top: 10px;
	font-size: 14px;
	gap: 5px;
`

export const Enlace = styled(NavLink)`
	color: green;
	text-decoration: none;

	&:hover{
		color: white;
		transition: 0.2s ease-in-out;
	}
`