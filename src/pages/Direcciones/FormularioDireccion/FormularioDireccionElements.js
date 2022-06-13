import PhoneInput from 'react-phone-number-input'
import styled from 'styled-components'
import 'react-phone-number-input/style.css'

export const FormularioDireccionContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 16px;
	padding-top: 16px;
	font-family: 'ABeeZee';
	
`

export const Campo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`

export const P = styled.p`
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 500;
	font-size: medium;
	line-height: 20px;
	margin: 0;
	width: 90%;

	@media screen and (max-width: 768px) {
		font-size: 18px;
		line-height: 20px;
	}
`

export const TextField = styled.input`
	width: calc(90% - 16px);
	font-size: 16px;
	background-color: black;
	padding: 8px;
	padding-bottom: 8px;
	border-radius: 10px;
	color: white;
	border: groove 1px white;
    
`

export const TelefonoTextField = styled(PhoneInput).attrs({
	placeholder: 'Escribe tu numero',
	defaultCountry: 'MX'
})`
	width: 90%;
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
		border: groove 1px white;
	}
`

export const Select = styled.select`
	width: 90%;
	font-size: 16px;
	background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
	background-color: black;
	background-position: calc(100% - 0.75rem) center !important;
	padding: 8px;
	padding-bottom: 8px;
	border-radius: 10px;
	color: white;
	-moz-appearance: none;
	-webkit-appearance: none;
	border: groove 1px white;

    
`

export const Boton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	width: 90%;
	background-color: #C40B0B;
	border-radius: 15px;
	cursor: pointer;
	transition: 0.5s;

	&:hover {
		color: #C40B0B;
		background-color: white;
	}

	&:active {
		transition: 0.1s;
		transform: scaleX(90%) scaleY(94%);
	}

	@media screen and (max-width: 768px) {
		width: 80%;
	}
`

export const BotonEliminar = styled(Boton)`
	background-color: #3F3F3F;

	&:hover {
		color: #3F3F3F;
	}
`
