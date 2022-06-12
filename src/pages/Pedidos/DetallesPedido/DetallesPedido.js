import React from 'react'
import { ContenidoDetallesPedido, FlexBox, NombrePlatillo, P, Precio } from './DetallesPedidoElements'

export const DetallesPedido = ({ pedido }) => {
	const colorEstado = () => {
		switch (pedido.estado) {
			case 'En proceso':
				return {
					color: '#C37E17'
				}
			case 'Entregado':
				return {
					color: '#17911B'
				}
		}
	}

	return (
		<ContenidoDetallesPedido>
			<FlexBox>
				<P style={colorEstado()}>{pedido.estado}</P>
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
