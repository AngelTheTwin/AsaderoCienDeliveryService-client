import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export const LoginContent = styled.div`
	height: 100%;
	font-family: 'Secular one';
	margin: 0;
	top: auto;
	width: 100%;
	height: calc(100% - 70px);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 70px;
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
	left: 0 !important;
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
	/* margin: 0; */
	font-size: 16px;
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`

export const Grid = styled.div`
/* padding-top: 110px; */
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding-left: 16px;
	padding-right: 16px;
	width: 100%;
	max-width: 1500px;
	height: 100%;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

export const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

export const Img = styled.img.attrs({
	src: require('../../assets/logo-blanco.png')
})`
	color: white;
	aspect-ratio: 1/1;
	width: 100%;
	max-width: 500px;
	align-self: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const FormContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
`

export const Form = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
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
	height: 24px;
	margin-right: 10px;
`

export const Divider = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
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
	width: 330px;
	line-height: normal;
	--PhoneInputCountryFlag-height:20px;

	&>input{
		font-size: 16px;
		margin-left: 5px;
		background-color: black;
		padding: 8px;
		border-radius: 10px;
		color: white;
		margin-right: 0;
	}
`

export const ButtonsContainer = styled.nav`
	width: 330px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`

export const Button = styled.button`
	font-family: 'ABeeZee';
	font-size: small;
	background-color: #C40B0B;
	color: white;
	border-radius: 10px;
	border: none;
	padding: 10px;
	width: 100%;
	cursor: pointer;
	transition: 0.5s;

	&:hover{
		color: #C40B0B;
		background-color: white;
	}

	&:active{
		transform: scale(90%);
	}
`

export const Registro = styled.div`
	font-family: 'ABeeZee';
	margin-top: 10px;
	font-size: 14px;
	gap: 5px;
`

export const Enlace = styled.span`
	color: green;
	text-decoration: none;

	&:hover{
		color: white;
		transition: 0.2s ease-in-out;
	}
`

export const LoginButton = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 330px;
	height: 60px;
	background: ${({ color }) => color};
	border-radius: 10px;
	cursor: pointer;
	transition: 0.5s;

	&:hover{
		color: ${({ color }) => color};
		background-color: white;
	}

	&:active{
		transform: scale(80%);
	}
`

export const TextField = styled.input.attrs({
})`
	width: 314px;
	font-size: 16px;
	margin-left: 5px;
	background-color: black;
	padding: 8px;
	padding-bottom: 8px;
	border-radius: 10px;
	color: white;
`

export const FormLogin = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
	transition: 1s ease-in-out;
	opacity: ${({ etapaLogin }) => (etapaLogin === 'login' ? '100%' : '0%')};
	position: ${({ etapaLogin }) => (etapaLogin === 'login' ? 'relative' : 'absolute')};
	right: ${({ etapaLogin }) => (etapaLogin === 'login' ? '0' : '-100%')};
`

export const FormRegistro = styled(Form)`
	transition: 1s ease-in-out;
	opacity: ${({ etapaLogin }) => (etapaLogin === 'registro' ? '100%' : '0%')};
	position: ${({ etapaLogin }) => (etapaLogin === 'registro' ? 'relative' : 'fixed')};
	left: ${({ etapaLogin }) => (etapaLogin === 'registro' ? '0' : '-100%')};
`