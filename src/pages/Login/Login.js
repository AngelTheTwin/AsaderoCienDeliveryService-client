import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { createUsuario, login } from '../../data-access/usuarioAccess';
import { stringToHash } from '../../utils/hash';
import {
	BackButton,
	BackIcon,
	Button,
	ButtonsContainer,
	Divider,
	DividerTxt,
	Enlace,
	Form,
	FormContainer,
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
const toastProperties = {
	position: "bottom-center",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
}

export const Login = () => {
	const [etapaLogin, setEtapaLogin] = useState('login')
	const [showLogin, setShowLogin] = useState(true)
	const titulo = etapaLogin !== 'login' ? 'Regístrate' : 'Iniciar Sesión'

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
				<FormContainer >
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
						{showLogin && <FormularioLogin
							etapaLogin={etapaLogin}
							setEtapaLogin={setEtapaLogin}
							setShowLogin={setShowLogin}
						></FormularioLogin>}
						<FormularioRegistro
							etapaLogin={etapaLogin}
							setEtapaLogin={setEtapaLogin}
							setShowLogin={setShowLogin}
						/>
					</Form>

				</FormContainer>
			</Grid>
		</LoginContent>
	)
}

export function FormularioLogin(props) {
	const navigate = useNavigate()
	const [correo, setCorreo] = useState('')
	const [contraseña, setContraseña] = useState('')

	const buttonLoginClicked = async () => {
		if (correo === '') {
			toast.warn('Asegúrese de proporcionar un correo!', toastProperties)
			return
		}
		if (contraseña === '') {
			toast.warn('Asegúrese de  proporcionar una contraseña!', toastProperties)
			return 
		}
		const toastLogin = toast.loading('Iniciando Sesión', toastProperties)
		try {
			let hashedContraseña = stringToHash(contraseña)
			const usuario = await login({
				correo,
				contraseña: hashedContraseña
			})
			localStorage.setItem('usuario', JSON.stringify(usuario))
			if (usuario.tipoUsuario === 'consumidor') {
				navigate('/home')
			}
			if (usuario.tipoUsuario === 'repartidor') {
				navigate('/pedidosRepartidor')
			}
		} catch (error) {
			toast.update(toastLogin, {
				render: error.mensaje,
				type: 'error',
				isLoading: false,
				...toastProperties
			})
		}
	}

	return (
		<FormLogin
			etapaLogin={props.etapaLogin}
		>
			<TextField
				placeholder='Correo'
				type='email'
				value={correo}
				onChange={(event) => {
					setCorreo(event.target.value)
				}}
			/>
			<TextField
				placeholder='Contraseña'
				type='password'
				value={contraseña}
				onChange={(event) => {
					setContraseña(event.target.value)
				}}
			/>
			<ButtonsContainer >
				<Button
					onClick={buttonLoginClicked}
				>Iniciar Sesión</Button>
			</ButtonsContainer>
			<Registro >
				<span>¿Aún no te has registrado? </span>
				<Enlace
					onClick={() => {
						props.setEtapaLogin('registro')
						setTimeout(() => {
							props.setShowLogin(false)
						}, 700)
					}}
				>Registrate aquí</Enlace>
			</Registro>
			<ToastContainer
				theme='dark'
			/>
		</FormLogin>
	)
}

function FormularioRegistro(props) {
	const [formData, setFormData] = useState({
		nombre: '',
		apellido: '',
		correo: '',
		contraseña: '',
	})
	const [telefono, setTelefono] = useState('')

	const handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		setFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: value
			}
		})
	}

	const buttonRegistrarseClicked = async () => {
		if (formData.nombre === '') {
			toast.warn('Asegúrese de proporcionar un nombre!', toastProperties)
			return
		}
		if (formData.apellido === '') {
			toast.warn('Asegúrese de proporcionar un apellido!', toastProperties)
			return
		}
		if (formData.correo === '') {
			toast.warn('Asegúrese de proporcionar un correo!', toastProperties)
			return
		}
		if (!telefono) {
			toast.warn('Asegúrese de proporcionar un telefono!', toastProperties)
			return
		}
		if (formData.contraseña === '') {
			toast.warn('Asegúrese de proporcionar una contraseña!', toastProperties)
			return
		}
		const toastRegistro = toast.loading('Registrándote...', toastProperties)
		try {
			const mensaje = await createUsuario({
				...formData,
				contraseña: stringToHash(formData.contraseña),
				telefono
			})
			toast.update(toastRegistro, {
				render: mensaje.mensaje,
				type: 'success',
				isLoading: false,
				...toastProperties
			})
			toast.info('¡Ya puedes iniciar sesión!')
			props.setShowLogin(true)
			setTimeout(() => {
				props.setEtapaLogin('login')
			}, 250)
			
		} catch (error) {
			toast.update(toastRegistro, {
				render: error.mensaje,
				type: 'error',
				isLoading: false,
				...toastProperties
			})
		}
	}

	return (
		<FormRegistro
			etapaLogin={props.etapaLogin}
		>
			<TextField
				name='nombre'
				placeholder='Nombre'
				value={formData.nombre}
				onChange={handleChange}
			/>
			<TextField
				name='apellido'
				placeholder='Apellido'
				value={formData.apellido}
				onChange={handleChange}
			/>
			<TextField
				name='correo'
				placeholder='Correo Electronico'
				value={formData.correo}
				onChange={handleChange}
				type='email'
			/>
			<TelefonoTextField
				international
				placeholder='Escribe tu numero'
				value={telefono}
				onChange={setTelefono}
			/>
			<TextField
				name='contraseña'
				placeholder='Contraseña'
				value={formData.contraseña}
				onChange={handleChange}
				type='password'
			/>
			<ButtonsContainer >
				<Button
					onClick={() => {
						props.setShowLogin(true)
						setTimeout(() => {
							props.setEtapaLogin('login')
						}, 250)
					}}
				>Regresar</Button>
				<Button
					onClick={buttonRegistrarseClicked}
				>Registrarse</Button>
			</ButtonsContainer>
			<ToastContainer
				theme='dark'
			/>
		</FormRegistro>
	)
}