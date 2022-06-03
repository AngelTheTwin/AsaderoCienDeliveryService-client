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
						<FacebookButton >
							<Icon src={iconoFacebook} />
							Continuar con Facebook
						</FacebookButton>
						<GoogleButton >
							<Icon src={iconoGoogle} />
							Continuar con Google
						</GoogleButton>
						<AppleButton >
							<Icon src={iconoApple} />
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
