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

import iconoFacebook from '../../assets/facebook-icon.svg'
import iconoGoogle from '../../assets/google-icon.svg'
import iconoApple from '../../assets/apple-icon.svg'
import iconoFacebookHover from '../../assets/facebook-icon-azul.svg'
import iconoGoogleHover from '../../assets/google-icon-rojo.svg'
import iconoAppleHover from '../../assets/apple-icon-gris.svg'

export const Login = () => {
	const [telefono, setTelefono] = useState('')
	const [estiloBotones, setEstiloBotones] = useState({
		facebook: iconoFacebook,
		google: iconoGoogle,
		apple: iconoApple
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
							onMouseEnter= {() => { setEstiloBotones({
								...estiloBotones,
								facebook: iconoFacebookHover
							})}}
							onMouseLeave= {() => { setEstiloBotones({
								...estiloBotones,
								facebook: iconoFacebook
							})}}
						>
							<Icon src={estiloBotones.facebook} />
							Continuar con Facebook
						</FacebookButton>
						<GoogleButton  
							onMouseEnter= {() => { setEstiloBotones({
								...estiloBotones,
								google: iconoGoogleHover
							})}}
							onMouseLeave= {() => { setEstiloBotones({
								...estiloBotones,
								google: iconoGoogle
							})}}
						>
							<Icon src={estiloBotones.google} />
							Continuar con Google
						</GoogleButton>
						<AppleButton 
							onMouseEnter= {() => { setEstiloBotones({
								...estiloBotones,
								apple: iconoAppleHover
							})}}
							onMouseLeave= {() => { setEstiloBotones({
								...estiloBotones,
								apple: iconoApple
							})}}
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
						onChange={ setTelefono }
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
