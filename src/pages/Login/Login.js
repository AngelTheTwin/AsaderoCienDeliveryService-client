import React, { useState } from 'react'
import {
	AppleButton,
	BackButton,
	BackIcon,
	Button,
	ButtonsContainer,
	Divider,
	DividerTxt,
	Enlace,
	FacebookButton,
	Form,
	GoogleButton,
	Grid,
	Icon,
	Img,
	ImgContainer,
	Label,
	Line,
	LoginButtons,
	LoginContent,
	Navbar,
	Registro,
	TelefonoTextField,
	Title,
} from './LoginElements'

export const Login = () => {
	const [telefono, setTelefono] = useState('')
	const [estiloBotones, setEstiloBotones] = useState({
		facebook: icons.facebook.normal,
		google: icons.facebook.normal,
		apple: icons.facebook.normal
	})

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
						<FacebookButton
							onMouseEnter={() => {
								setEstiloBotones({
									...estiloBotones,
									facebook: icons.facebook.hover
								})
							}}
							onMouseLeave={() => {
								setEstiloBotones({
									...estiloBotones,
									facebook: icons.facebook.normal
								})
							}}
						>
							<Icon src={estiloBotones.facebook} />
							Continuar con Facebook
						</FacebookButton>
						<GoogleButton
							onMouseEnter={() => {
								setEstiloBotones({
									...estiloBotones,
									google: icons.google.hover
								})
							}}
							onMouseLeave={() => {
								setEstiloBotones({
									...estiloBotones,
									google: icons.google.normal
								})
							}}
						>
							<Icon src={estiloBotones.google} />
							Continuar con Google
						</GoogleButton>
						<AppleButton
							onMouseEnter={() => {
								setEstiloBotones({
									...estiloBotones,
									apple: icons.apple.hover
								})
							}}
							onMouseLeave={() => {
								setEstiloBotones({
									...estiloBotones,
									apple: icons.apple.normal
								})
							}}
						>
							<Icon src={estiloBotones.apple} />
							Continuar con Apple
						</AppleButton>
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

const icons = {
	facebook: {
		normal: require('../../assets/facebook-icon.png'),
		hover: require('../../assets/facebook-icon-hover.png')
	},
	google: {
		normal: require('../../assets/google-icon.png'),
		hover: require('../../assets/google-icon-hover.png')
	},
	apple: {
		normal: require('../../assets/apple-icon.png'),
		hover: require('../../assets/apple-icon-hover.png')
	},
}