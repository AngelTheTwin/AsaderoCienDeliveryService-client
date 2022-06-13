import React, { useEffect, useRef, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { Navbar, Title } from '../Login/LoginElements'
import {
	AnimationContainer,
	AnimationContent,
	ButtonPago,
	ButtonRegresar,
	CarritoBody,
	CarritoContent,
	Grid,
	PlatillosContainer,
	PlatilloTarjeta,
	Subtotal,
	TarjetaPedido,
	TarjetaTitle
} from './CarritoElements'
import { PlatilloCarrito } from './PlatilloCarrito/PlatilloCarrito'
import {
	ToastContainer,
	toast
} from 'react-toastify'
import { useMutation } from 'react-query'
import { createPedido } from '../../data-access/pedidosAccess'
import Modal from '../../components/Modal/Modal'
import { FormularioPago } from './FormularioPago/FormularioPago'
import Lottie from 'lottie-web'


export const Carrito = () => {
	const toastProperties = {
		position: "bottom-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	}
	let toastCarrito
	const emptyCart = useRef(null)
	const [ordenesCarrito, setOrdenesCarrito] = useState(JSON.parse(sessionStorage.getItem('carrito')))
	const [showFormularioPago, setShowFormularioPago] = useState(false)
	const navigateTo = useNavigate()
	const guardarPedido = useMutation(({pedido}) => {
		toastCarrito = toast.loading('Procesando...', toastProperties)
		return createPedido(pedido)
	}, {
		onError: (error) => {
			showToast('error', error.mensaje)
		},
		onSuccess: (respuesta) => {
			showToast('success', respuesta.mensaje)
			sessionStorage.setItem('carrito', JSON.stringify([]))
			sessionStorage.removeItem('pedido')
			setShowFormularioPago(false)
			setOrdenesCarrito([])
			navigateTo('/pedidos')
		}
	})

	useEffect(() => {
		sessionStorage.setItem('carrito', JSON.stringify(ordenesCarrito))
	}, [ordenesCarrito])

	useEffect(() => {
		Lottie.loadAnimation({
			container: emptyCart.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../assets/empty-cart.json')
		})
	}, [])

	const incrementarCantidad = (orden) => {
		setOrdenesCarrito(prevOrdenesCarrito => prevOrdenesCarrito.map(prevOrden => {
			if (orden._id === prevOrden._id) {
				return {
					...prevOrden,
					cantidad: prevOrden.cantidad + 1
				}
			}
			return prevOrden
		}))
	}

	const reducirCantidad = (orden) => {
		setOrdenesCarrito(prevOrdenesCarrito => prevOrdenesCarrito.map(prevOrden => {
			if (orden._id === prevOrden._id) {
				return {
					...prevOrden,
					cantidad: (prevOrden.cantidad - 1) > 0 ? prevOrden.cantidad - 1 : 1
				}
			}
			return prevOrden
		}))
	}

	const eliminarOrden = (orden) => {
		setOrdenesCarrito(prevOrdenes => prevOrdenes.filter(prevOrden => {
			return prevOrden._id !== orden._id
		}))
		toast.success('Orden eliminada del carrito!', toastProperties)
	}

	const procederAlPago = () => {
		sessionStorage.setItem('pedido', JSON.stringify({
			productos: ordenesCarrito,
			total: calcularTotal(),
		}))
		setShowFormularioPago(true)
	}

	const calcularTotal = () => {
		return ordenesCarrito.length === 1
		?
		ordenesCarrito[0].cantidad * ordenesCarrito[0].platillo.precio
		:
		ordenesCarrito.reduce((orden1, orden2) => {
			if (orden1.cantidad) {
				return (orden1.cantidad * orden1.platillo.precio) + (orden2.cantidad * orden2.platillo.precio)
			}

			return orden1 + (orden2.cantidad * orden2.platillo.precio)
		})
	}

	const showToast = (type, message) => {
		toast.update(toastCarrito, {
			render: message,
			type: type,
			isLoading: false,
			...toastProperties,
		})
	}

	return (
		<CarritoContent>
			<Navbar>
				<ButtonRegresar>
					<BiArrowBack onClick={() => navigateTo('/home')}/>
				</ButtonRegresar>
				<Title>Carrito</Title>
			</Navbar>
			<CarritoBody>
				{ordenesCarrito && ordenesCarrito.length !== 0
					?
					<Grid>
						<PlatillosContainer>
							{ordenesCarrito.map(orden => {
								return (
									<PlatilloTarjeta key={orden._id} >
										<PlatilloCarrito
											orden={orden}
											incrementarCantidad={() => incrementarCantidad(orden)}
											reducirCantidad={() => reducirCantidad(orden)}
											eliminarOrden={() => eliminarOrden(orden)}
										/>
									</PlatilloTarjeta>
								)
							})}
						</PlatillosContainer>
						<TarjetaPedido>
							<div>
								<TarjetaTitle>Subtotal</TarjetaTitle>
								<Subtotal>${calcularTotal().toFixed(2)}</Subtotal>
							</div>
							<ButtonPago onClick={procederAlPago}>Proceder al pago</ButtonPago>
						</TarjetaPedido>
					</Grid>
					:
					<AnimationContainer>
						<AnimationContent ref={emptyCart}/>
						<TarjetaTitle>No has agregado platillos a tu carrito!</TarjetaTitle>
					</AnimationContainer>
				}
			</CarritoBody>
			<Modal
				title='Resúmen del pedido'
				cambiarEstado={setShowFormularioPago}
				estado={showFormularioPago}
			>
				<FormularioPago guardarPedido={guardarPedido} />
			</Modal>
			<ToastContainer theme='dark' />
		</CarritoContent>
	)
}