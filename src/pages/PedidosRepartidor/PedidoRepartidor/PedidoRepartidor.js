import React from 'react'
import { GrStatusCriticalSmall } from 'react-icons/gr'
import { Consumidor, InfoPedidoContainer, P, PedidoRepartidorContent, PinContainer, TarjetaPedido } from './PedidoRepartidorElements'

export const PedidoRepartidor = ({ 
	pedido,
	openModal,
}) => {
	const estiloEstado = () => {
		if (pedido.estado === 'En proceso') {
			return 'white'
		}

		if (pedido.estado === 'En Camino') {
			return '#C37E17'
		}

		if (pedido.estado === 'Entregado') {
			return '#17911B'
		}

		if (pedido.estado === 'Cancelado') {
			return '#C40B0B'
		}
	}
	return (
		<PedidoRepartidorContent>
			<TarjetaPedido onClick={openModal}>
				<PinContainer style={{
					color: estiloEstado()
				}}>
					<GrStatusCriticalSmall />
				</PinContainer>
				<InfoPedidoContainer>
					<Consumidor>{pedido.direccion.titular}</Consumidor>
					<P>{pedido.direccion.calle}</P>
					<P>{pedido.direccion.colonia}</P>
					<P>{pedido.direccion.ciudad}</P>
					<P>C.P. {pedido.direccion.codigoPostal}</P>
					<P>Telefono: {pedido.direccion.contacto}</P>
				</InfoPedidoContainer>
			</TarjetaPedido>
		</PedidoRepartidorContent>
	)
}
