import React, { useRef, useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { SpinnerInfinity } from 'spinners-react'
import { getAllDireccionesByUsuario } from '../../../data-access/direccionesAccess'
import { getAllMetodosPago } from '../../../data-access/metodosPagoAccess'
import {
	ButtonPagar,
	FormularioPagoContent,
	P,
	SpinnerContainer,
	Select,
} from './FormularioPagoElements'

export const FormularioPago = ({ guardarPedido }) => {
	const toastProperties = {
		position: "bottom-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	}
	const [tarjetas, setTarjetas] = useState([])
	const [direcciones, setDirecciones] = useState([])
	const { isLoading: isLoadingMetodosPago } = useQuery(["getAllMetodosPago"], getAllMetodosPago, {
		onSuccess: (tarjetas) => {
			setTarjetas(tarjetas)
		},
		refetchOnWindowFocus: false
	})
	const { isLoading: isLoadingDirecciones } = useQuery(['getAllDirecciones'], getAllDireccionesByUsuario, {
		onSuccess: (direcciones) => {
			setDirecciones(direcciones)
		},
		refetchOnWindowFocus: false
	})
	const [tarjeta, setTarjeta] = useState({})
	const [direccion, setDireccion] = useState({})
	const pedido = useRef(JSON.parse(sessionStorage.getItem('pedido')))
	const subtotal = pedido.current.total
	const iva = (pedido.current.total * 0.16)
	const total = subtotal + iva

	const terminación = (numeroTarjeta) => {
		return numeroTarjeta.substring(numeroTarjeta.length - 4)
	}

	const handleTarjetaChanged = (event) => {
		const id = event.target.value
		setTarjeta({})
		setTimeout(() => {
			setTarjeta(tarjetas.filter(currentTarjeta => currentTarjeta._id === id)[0] || {})
		}, 500)
	}

	const handleDireccionChanged = (event) => {
		const id = event.target.value
		setDireccion(direcciones.filter(direccion => direccion._id === id)[0] || {})
	}

	const handlePagarClicked = () => {
		if (!tarjeta._id) {
			toast.warning('Debe seleccionar un método de pago.', toastProperties)
			return
		}
		if (!direccion._id) {
			toast.warning('Debe seleccionar una dirección de envío.', toastProperties)
			return
		}
		guardarPedido.mutate({
			pedido: {
				...pedido.current,
				metodoPago: tarjeta,
				direccion
			}
		})
	}

	return (
		<FormularioPagoContent>
			<P>Subtotal: {subtotal.toFixed(2)}</P>
			<P>iva: {iva.toFixed(2)}</P>
			<P>Total: {total.toFixed(2)}</P>
			<Cards
				number={tarjeta.numeroTarjeta ? tarjeta.numeroTarjeta : ''}
				name={tarjeta.titular || ''}
				expiry={tarjeta.vigencia || ''}
				cvc={tarjeta.cvv || ''}
				preview={true} />
			<P>Seleccionar Método de pago</P>
			{isLoadingMetodosPago
				?
				<SpinnerContainer>
					<SpinnerInfinity color='#C40B0B' />
				</SpinnerContainer>
				:
				<Select name='tarjeta'
					onChange={handleTarjetaChanged}>
					<option>Seleccionar...</option>
					{tarjetas.map(tarjetaItem => {
						return (
							<option key={tarjetaItem._id} value={tarjetaItem._id}>
								Terminación en {terminación(tarjetaItem.numeroTarjeta)}
							</option>
						)
					})
					}
				</Select>
			}
			<P>Dirección de Envío</P>
			{isLoadingDirecciones
				?
				<SpinnerContainer>
					<SpinnerInfinity color='#C40B0B' />
				</SpinnerContainer>
				:
				<Select name='direccion' onChange={handleDireccionChanged}>
					<option>Seleccionar...</option>
					{direcciones.map(direccion => (
						<option key={direccion._id} value={direccion._id} >{direccion.titular} - {direccion.calle}</option>
					))}
				</Select>
			}
			<br></br>
			<ButtonPagar onClick={handlePagarClicked}>Realizar Pedido y Pagar</ButtonPagar>
		</FormularioPagoContent>
	)
}
