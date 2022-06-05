import React, { useState } from 'react'
import {
	BackButton,
	BackIcon,
	Button,
	ButtonsContainer,
	Divider,
	DividerTxt,
	Enlace,
	Form,
	Grid,
	Icon,
	Img,
	ImgContainer,
	Label,
	Line,
	LoginButton,
	LoginButtons,
	LoginContent,
	Navbar,
	Registro,
	TelefonoTextField,
	Title,
} from './LoginElements'



export const Login = () => {
	const [telefono, setTelefono] = useState('')

	return (
		<LoginContent>
			<Navbar id="nav" >
				<BackButton to="/">
					<BackIcon />
				</BackButton>
				<Title >Asadero Cien - Restaurante Parrilla</Title>
			</Navbar>
			<Grid >
				<ImgContainer>
					<Img />
				</ImgContainer>
				<Form >
					<Label>Iniciar Sesión</Label>
					<LoginButtons >
						<LoginWithButton variante='facebook' />
						<LoginWithButton variante='google' />
						<LoginWithButton variante='apple' />
					</LoginButtons>
					<Divider >
						<Line />
						<DividerTxt >o</DividerTxt>
						<Line />
					</Divider>
					<TelefonoTextField
						international
						placeholder='Escribe tu numero'
						value={telefono}
						onChange={setTelefono}
					/>
					<ButtonsContainer >
						<Button>SMS</Button>
						<Button>Whastapp</Button>
					</ButtonsContainer>
					<Registro >
						¿Aún no te has registrado? <Enlace to=''>Registrate aquí</Enlace>
					</Registro>
				</Form>
			</Grid>
		</LoginContent>
	)
}

function LoginWithButton({ variante }) {
	const variantes = {
		default: {
			color: 'gray',
			nombre: 'Default',
			img: '',
			imgHover: '',
		},
		facebook: {
			color: '#3B5998',
			nombre: 'Facebook',
			img: require('../../assets/facebook-icon.png'),
			imgHover: require('../../assets/facebook-icon-hover.png')
		},
		google: {
			color: '#C62D2D',
			nombre: 'Google',
			img: require('../../assets/google-icon.png'),
			imgHover: require('../../assets/google-icon-hover.png')
		},
		apple: {
			color: '#2E2C36',
			nombre: 'Apple',
			img: require('../../assets/apple-icon.png'),
			imgHover: require('../../assets/apple-icon-hover.png')
		}
	}
	variante = variantes.hasOwnProperty(variante) ? variante : 'default'
	const [icono, setIcono] = useState(variantes[variante].img)
	return (
		<LoginButton
			color={variantes[variante].color}
			onMouseEnter={() => {
				setIcono(variantes[variante].imgHover)
			}}
			onMouseLeave={() => {
				setIcono(variantes[variante].img)
			}}
		>
			<Icon src={icono} />
			Continuar con {variantes[variante].nombre}
		</LoginButton>
	)
}