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
	const [loginButtons, setLoginButtons] = useState([
		{
			color: '#3B5998',
			nombre: 'Facebook',
			img: require('../../assets/facebook-icon.png')
		},
		{
			color: '#C62D2D',
			nombre: 'Google',
			img: require('../../assets/google-icon.png')
		},
		{
			color: '#2E2C36',
			nombre: 'Apple',
			img: require('../../assets/apple-icon.png')
		},
	])

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
						{loginButtons.map(button => {
							return (
								<LoginButton
									key={button.nombre}
									color={button.color}
									onMouseEnter={() => {
										setLoginButtons(prevLoginButtons => prevLoginButtons.map(prevButton => {
											return {
												...prevButton,
												img: (prevButton.nombre === button.nombre)
													? require(`../../assets/${button.nombre.toLowerCase()}-icon-hover.png`)
													: prevButton.img
											}
										}))
									}}
									onMouseLeave={() => {
										setLoginButtons(prevLoginButtons => prevLoginButtons.map(prevButton => {
											return {
												...prevButton,
												img: (prevButton.nombre === button.nombre)
													? require(`../../assets/${button.nombre.toLowerCase()}-icon.png`)
													: prevButton.img
											}
										}))
									}}
								>
									<Icon src={button.img} />
									Continuar con {button.nombre}
								</LoginButton>
							)
						})}
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