import React, { useState } from 'react'
import {
	BackButton,
	BackIcon,
	Button,
	ButtonLog,
	ButtonsContainer,
	Divider,
	DividerTxt,
	Enlace,
	Form,
	FormLogin,
	FormRegistro,
	Grid,
	Img,
	ImgContainer,
	Label,
	Line,
	LoginButtons,
	LoginContent,
	Navbar,
	Registro,
	TelefonoTextField,
	TextField,
	Title,
} from './LoginElements'
import { LoginWithButton } from './LoginWithButton'



export const Login = () => {
	const [etapaLogin, setEtapaLogin] = useState('login')
	const [showLogin, setShowLogin] = useState(true)
	const titulo = etapaLogin !== 'login' ? 'Regístrate' : 'Iniciar Sesión'
	console.log(etapaLogin)

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
					<Label>{titulo}</Label>
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
					<Form>
						<FormularioLogin
							etapaLogin={etapaLogin}
							setEtapaLogin={setEtapaLogin}
						></FormularioLogin>
						<FormularioRegistro
							etapaLogin={etapaLogin}
							setEtapaLogin={setEtapaLogin}
						/>
					</Form>

				</Form>
			</Grid>
		</LoginContent>
	)
}

export function FormularioLogin(props) {
	return (
		<FormLogin
			etapaLogin={props.etapaLogin}
		>
			<TextField
				placeholder='Correo'
				type='email'
			/>
			<TextField
				placeholder='Contraseña'
				type='password'
			/>
			<ButtonsContainer >
				<ButtonLog to='/home'>Iniciar Sesión</ButtonLog>
			</ButtonsContainer>
			<Registro >
				<span>¿Aún no te has registrado? </span>
				<Enlace
					onClick={() => {
						props.setEtapaLogin('registro')
					}}
				>Registrate aquí</Enlace>
			</Registro>
		</FormLogin>
	)
}

function FormularioRegistro(props) {
	const [telefono, setTelefono] = useState('')
	return (
		<FormRegistro
			etapaLogin={props.etapaLogin}
		>
			<TextField
				placeholder='Nombre'
			/>
			<TextField
				placeholder='Apellido'
			/>
			<TextField
				placeholder='Correo Electronico'
				type='email'
			/>
			<TelefonoTextField
				international
				placeholder='Escribe tu numero'
				value={telefono}
				onChange={setTelefono}
			/>
			<TextField
				placeholder='Contraseña'
				type='password'
			/>
			<ButtonsContainer >
				<ButtonLog to='/home' >Registrarse</ButtonLog>
			</ButtonsContainer>
		</FormRegistro>
	)
}