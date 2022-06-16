import React from 'react'
import { Campo, TextField, P } from '../../Direcciones/FormularioDireccion/FormularioDireccionElements'
import { ButtonCancelarPedido, ButtonEntregarPedido, ButtonTomarPedido, ContainerBotones, DetallesPedidoRepartidorContent } from './DetallesPedidoRepartidorElements'

export const DetallesPedidoRepartidor = ({ pedido, disponible, update }) => {

	const tomarPedido = () => {
		let usuario = JSON.parse(localStorage.getItem('usuario'))
		update.mutate({
			pedido: {
				...pedido,
				estado: 'En Camino',
				repartidor: usuario._id
			}
		})
	}

	const entregarPedido = () => {
		update.mutate({
			pedido: {
				...pedido,
				estado: 'Entregado'
			}
		})
	}

	const cancelarPedido = () => {
		update.mutate({
			pedido: {
				...pedido,
				estado: 'Cancelado'
			}
		})
	}

	return (
		<DetallesPedidoRepartidorContent>
			<Campo>
				<P>Nombre:</P>
				<TextField
					disabled={true}
					value={pedido.direccion.titular}
				/>
			</Campo>
			<Campo>
				<P>Calle y Numero:</P>
				<TextField
					disabled={true}
					value={pedido.direccion.calle}
				/>
			</Campo>
			<Campo>
				<P>Ciudad:</P>
				<TextField
					disabled={true}
					value={pedido.direccion.ciudad}
				/>
			</Campo>
			<Campo>
				<P>Colonia:</P>
				<TextField
					disabled={true}
					value={pedido.direccion.colonia}
				/>
			</Campo>
			<Campo>
				<P>Codigo Postal:</P>
				<TextField
					disabled={true}
					value={pedido.direccion.codigoPostal}
				/>
			</Campo>
			<Campo>
				<P>Contacto:</P>
				<TextField
					disabled={true}
					value={pedido.direccion.contacto}
				/>
			</Campo>
			<ContainerBotones>
				{disponible
					?
					<ButtonTomarPedido onClick={tomarPedido}>Tomar Pedido</ButtonTomarPedido>
					:
					<>
						{pedido.estado === 'En Camino'
							?
							<>
								<ButtonEntregarPedido onClick={entregarPedido} >Entregar Pedido</ButtonEntregarPedido>
								<ButtonCancelarPedido onClick={cancelarPedido} >Cancelar Pedido</ButtonCancelarPedido>
							</>
							:
							<Campo>
								<P>{pedido.estado}.</P>
							</Campo>
						}
					</>
				}
			</ContainerBotones>
		</DetallesPedidoRepartidorContent>
	)
}
