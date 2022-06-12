import Lottie from 'lottie-web'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
import { getAllPedidosByUsuario } from '../../data-access/pedidosAccess'
import { ButtonRegresar } from '../Carrito/CarritoElements'
import { Navbar, Title } from '../Login/LoginElements'
import { P } from './DetallesPedido/DetallesPedidoElements'
import { Pedido } from './Pedido/Pedido'
import {
	AnimationContainer,
	AnimationContent,
	GridPedidos,
	PedidosContent,

} from './PedidosElements'

export const Pedidos = () => {
	const navigateTo = useNavigate()
	const noOrders = useRef(null)
	const { data: pedidos, isLoading } = useQuery(['getPedidosByUsuario'], getAllPedidosByUsuario, {
		refetchOnWindowFocus: false
	})

	useEffect(() => {
		Lottie.loadAnimation({
			container: noOrders.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: require('../../assets/no-orders.json')
		})
	}, [])

	return (
		<PedidosContent id='PedidosContent'>
			<Navbar>
				<ButtonRegresar onClick={() => navigateTo('/home')}>
					<BiArrowBack />
				</ButtonRegresar>
				<Title>Mis Pedidos</Title>
			</Navbar>
			{isLoading
				?
				<SpinnerCircular color='#C40B0B' />
				:
				pedidos.length > 0
					?
					<GridPedidos id='Grid'>
						{pedidos.map(pedido => {
							return (
								<Pedido 
									key={pedido._id}
									pedido={pedido}
								/>
							)
						})}
					</GridPedidos>
					:
					<AnimationContainer>
						<AnimationContent ref={noOrders} />
						<P>No tienes Pedidos registrados.</P>
					</AnimationContainer>
			}
		</PedidosContent>
	)
}
