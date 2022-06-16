import React, { useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import { DetallesPedido } from '../DetallesPedido/DetallesPedido'
import { ButtonDetalles, DivButton, Folio, InfoPedido, P, PedidoContent, TarjetaPedido } from './PedidoElements'

export const Pedido = ({ pedido }) => {
	const [showDetalles, setShowDetalles] = useState(false)
	const fecha = new Date(pedido.fecha)

	const colorEstado = () => {
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
					<P style={{
						color: colorEstado()
					}}>{pedido.estado}</P>
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
