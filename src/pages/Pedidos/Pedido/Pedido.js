import React, { useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import { DetallesPedido } from '../DetallesPedido/DetallesPedido'
import { ButtonDetalles, DivButton, Folio, InfoPedido, P, PedidoContent, TarjetaPedido } from './PedidoElements'

export const Pedido = ({ pedido }) => {
	const [showDetalles, setShowDetalles] = useState(false)
	const fecha = new Date(pedido.fecha)

	const colorEstado = () => {
		switch (pedido.estado) {
			case 'En proceso':
				return {
					color: '#C37E17'
				}
			case 'Entregado' :
				return {
					color: '#17911B'
				}
		}
	}
	
	const numeroArticulos = () => {
		let numeroArticulos = 0
		pedido.productos.forEach(producto => {
			numeroArticulos += producto.cantidad
		})
		return numeroArticulos
	}

	return (
		<PedidoContent>
			<TarjetaPedido >
				<InfoPedido>
					<P>{numeroArticulos()} articulo(s) - ${pedido.total.toFixed(2)}</P>
					<P>{fecha.toLocaleString()}</P>
					<P style={colorEstado()}>{pedido.estado}</P>
					<Folio>Folio: {pedido._id}</Folio>
				</InfoPedido>
				<DivButton>
					<ButtonDetalles onClick={() => setShowDetalles(true)}>Detalles</ButtonDetalles>
				</DivButton>
			</TarjetaPedido>
			<Modal
				title={`Folio: ${pedido._id}`}
				estado={showDetalles}
				cambiarEstado={setShowDetalles}
			>
				<DetallesPedido pedido={pedido}/>
			</Modal>
		</PedidoContent>
	)
}
