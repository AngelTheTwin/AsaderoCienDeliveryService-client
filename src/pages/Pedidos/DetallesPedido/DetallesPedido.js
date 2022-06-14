import React from 'react'
import { ContenidoDetallesPedido, FlexBox, NombrePlatillo, P, Precio } from './DetallesPedidoElements'

export const DetallesPedido = ({ pedido }) => {
	const estiloEstado = () => {
		if (pedido.estado === 'En proceso') {
			return '#C37E17'
		}

		if (pedido.estado === 'En camino') {
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
		<ContenidoDetallesPedido>
			<FlexBox>
				<P style={{
					color: estiloEstado()
				}}>{pedido.estado}</P>
				<P>{new Date(pedido.fecha).toLocaleString()}</P>
				<P></P>
			</FlexBox>
			{
				pedido.productos.map(orden => {
					return (
						<FlexBox key={orden._id}>
							<P>{orden.cantidad}</P>
							<NombrePlatillo>{orden.platillo.nombre}</NombrePlatillo>
							<Precio>${(orden.cantidad * orden.platillo.precio).toFixed(2)}</Precio>
						</FlexBox>
					)
				})
			}
			<br></br>
			<FlexBox>
				<P>Total</P>
				<Precio>${pedido.total.toFixed(2)}</Precio>
			</FlexBox>
		</ContenidoDetallesPedido>
	)
}
