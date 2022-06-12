import React, { useRef, useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useQuery } from 'react-query'
import { ToastContainer } from 'react-toastify'
import { SpinnerInfinity } from 'spinners-react'
import { getAllMetodosPago } from '../../../data-access/metodosPagoAccess'
import { 
	ButtonPagar,
	FormularioPagoContent, 
	P,
	SpinnerContainer,
	Tarjetas,
} from './FormularioPagoElements'

export const FormularioPago = ({guardarPedido}) => {
	const [tarjetas, setTarjetas] = useState([])
	const { isLoading } = useQuery(["getAllMetodosPago"], getAllMetodosPago, {
		onSuccess: (tarjetas) => {
			setTarjetas(tarjetas)
		},
		refetchOnWindowFocus: false
	})
	const [tarjeta, setTarjeta] = useState({})
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

	const handlePagarClicked = () => {
		guardarPedido.mutate({
			pedido: {
				...pedido.current,
				metodoPago: tarjeta,
				// dirección
			}
		})
	}

	return (
		<FormularioPagoContent>
			<P>Subtotal: {subtotal.toFixed(2)}</P>
			<P>iva: {iva.toFixed(2)}</P>
			<P>Total: {total.toFixed(2)}</P>
			<Cards
				number={tarjeta.numeroTarjeta ? tarjeta.numeroTarjeta :''}
				name={tarjeta.titular || ''}
				expiry={tarjeta.vigencia || ''}
				cvc={tarjeta.cvv || ''}
				preview={true} />
			<P>Seleccionar Método de pago</P>
			{isLoading
				?
				<SpinnerContainer>
					<SpinnerInfinity color='#C40B0B'/>
				</SpinnerContainer>
				:
				<Tarjetas name='tarjeta'
				onChange={handleTarjetaChanged}>
					<option>Seleccionar...</option>
				{
					tarjetas.map(tarjetaItem => {
						return (
							<option key={tarjetaItem._id} value={tarjetaItem._id}>
								Terminación en {terminación(tarjetaItem.numeroTarjeta)}
							</option>
						)
					})
				}
			</Tarjetas>
			}
			<P>Dirección de Envío</P>
			<ButtonPagar onClick={handlePagarClicked}>Realizar Pedido y Pagar</ButtonPagar>
			<ToastContainer theme='dark'/>
		</FormularioPagoContent>
	)
}
