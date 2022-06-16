import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { Card } from './Card/Card'
import PaymentForm from './PaymentForm/PaymentForm'
import { nanoid } from 'nanoid'
import {
	createMetodoPago,
	deleteMetodoPago,
	getAllMetodosPago,
	updateMetodoPago
} from '../../data-access/metodosPagoAccess'
import {
	ToastContainer,
	toast
} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {
	useMutation,
	useQuery
} from 'react-query'
import {
	PaymentMethodContent,
	Navbar,
	BackButton,
	BackIcon,
	Title,
	Grid,
	ButtonAgregar,
	Plus,
	Text,
	DivTarjeta,
	DivContainer,
} from './PaymentMethodElements'
import { SpinnerCircular } from 'spinners-react'

export const PaymentMethod = () => {
	let toastMetodoPago
	const toastProperties = {
		position: "bottom-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	}
	const [listaTarjetas, setListaTarjetas] = useState([])
	const [estadoModal, cambiarEstadoModal] = useState(false)
	const [tarjetaSeleccionada, setTarjetaSeleccionada] = useState({
		_id: '',
		numeroTarjeta: '',
		titular: '',
		vigencia: '',
		cvv: '',
	})

	const { data: tarjetasIniciales, refetch, isLoading } = useQuery(["getAllMetodosPago"], getAllMetodosPago, {
		onSuccess: (tarjetas) => {
			setListaTarjetas(tarjetas)
		},
		refetchOnWindowFocus: false
	})

	const guardarNuevaTarjeta = useMutation(({ tarjeta }) => {
		toastMetodoPago = toast.loading('Guardando...', toastProperties)
		return createMetodoPago(tarjeta)
	}, {
		onError: (error) => {
			showToast('error', error.mensaje)
		},
		onSuccess: (respuesta) => {
			showToast('success', respuesta.mensaje)
			cambiarEstadoModal(false)
			refetch()
		}
	})

	const actualizarTarjeta = useMutation(({ tarjeta }) => {
		toastMetodoPago = toast.loading('Actualizando...', toastProperties)
		return updateMetodoPago(tarjeta)
	}, {
		onError: (error) => {
			showToast('error', error.mensaje)
		},
		onSuccess: (respuesta) => {
			showToast('success', respuesta.mensaje)
			cambiarEstadoModal(false)
			refetch()
		}
	})

	const eliminarTarjeta = useMutation(({ tarjeta }) => {
		toastMetodoPago = toast.loading('Eliminando...', toastProperties)
		return deleteMetodoPago(tarjeta)
	}, {
		onError: (error) => {
			showToast('error', error.mensaje)
		},
		onSuccess: (respuesta) => {
			showToast('success', respuesta.mensaje)
			cambiarEstadoModal(false)
			refetch()
		}
	})

	const agregarNuevaTarjetaButtonClicked = () => {
		let nuevaTarjeta = {
			_id: nanoid(),
			numeroTarjeta: '',
			titular: '',
			vigencia: '',
			cvv: '',
			isNuevaTarjeta: true,
		}
		setTarjetaSeleccionada(nuevaTarjeta)
		cambiarEstadoModal(!estadoModal)
	}

	const setTarjeta = (tarjeta) => {
		if (tarjeta.isNuevaTarjeta) {
			setTarjetaSeleccionada(prevTarjetaSeleccionada => ({
				...prevTarjetaSeleccionada,
				...tarjeta
			}))
			return
		}
		
		setListaTarjetas(prevTarjetas => {
			return prevTarjetas.map(tarjetaActual => {
				if (tarjetaActual._id === tarjeta._id) {
					return tarjeta
				}
				return tarjetaActual
			})
		})
	}

	const cancelarCambios = (showModal) => {
		if (tarjetaSeleccionada.isNuevaTarjeta) {
			setTarjetaSeleccionada({
				_id: '',
				numeroTarjeta: '',
				titular: '',
				vigencia: '',
				cvv: '',
			})
			cambiarEstadoModal(showModal)
			return
		}
		setTarjeta(tarjetasIniciales[indiceTarjetaSeleccionada()])
		cambiarEstadoModal(showModal)
		
	}

	const indiceTarjetaSeleccionada = () => {
		for (var i = 0; i < listaTarjetas.length; i++) {
			if (tarjetaSeleccionada._id === listaTarjetas[i]._id) {
				return i
			}
		}
	}

	const showToast = (type, message) => {
		toast.update(toastMetodoPago, {
			render: message,
			type: type,
			isLoading: false,
			...toastProperties,
		})
	}

	return (
		<PaymentMethodContent>
			<Navbar id="nav" >
				<BackButton to="/home">
					<BackIcon />
				</BackButton>
				<Title >Métodos de Pago</Title>
			</Navbar>

			{isLoading
				? <SpinnerCircular color='red' enabled={isLoading} />
				: <Grid >
					<DivContainer>
						<DivTarjeta onClick={agregarNuevaTarjetaButtonClicked}>
							<ButtonAgregar >
								<Plus>+</Plus>
								<Text>Agregar nueva tarjeta</Text>
							</ButtonAgregar>
						</DivTarjeta>
					</DivContainer>
					{
						listaTarjetas.map(tarjeta => {
							return (
								<Card
									key={tarjeta._id}
									tarjeta={tarjeta}
									setTarjetaSeleccionada={setTarjetaSeleccionada}
									cambiarEstadoModal={cambiarEstadoModal} >
								</Card>
							)
						})
					}
				</Grid>
			}

			<Modal
				estado={estadoModal}
				cambiarEstado={cancelarCambios}
				title="Metodo de Pago">
				<PaymentForm
					tarjeta={listaTarjetas[indiceTarjetaSeleccionada()] || tarjetaSeleccionada}
					setTarjeta={setTarjeta}
					eliminarTarjeta={eliminarTarjeta}
					guardarNuevaTarjeta={guardarNuevaTarjeta}
					actualizarTarjeta={actualizarTarjeta}
					toast={toast}
				/>
			</Modal>
			<ToastContainer
				theme='dark'
			/>
		</PaymentMethodContent>
	)
}
