import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ButtonCantidad, Cantidad } from '../../Home/Descripcion/DescripcionElements'
import {
	ButtonEliminar,
	CantidadBotones,
	ImgPlatillo,
	InfoPlatillo,
	Instrucciones,
	NombrePlatillo,
	PlatilloContent,
	Precio
} from './PlatilloCarritoElements'

export const PlatilloCarrito = ({
	orden,
	incrementarCantidad,
	reducirCantidad,
	eliminarOrden,
}) => {

	return (
		<PlatilloContent>
			<ImgPlatillo
				src={orden.platillo.imagen} />
			<InfoPlatillo>
				<NombrePlatillo>{orden.platillo.nombre}.</NombrePlatillo>
				<Instrucciones>{orden.instruccionesEspeciales || 'Sin instrucciones especiales'}</Instrucciones>
				<CantidadBotones>
					<ButtonCantidad onClick={reducirCantidad}>
						<AiOutlineMinus />
					</ButtonCantidad>
					<Cantidad>{orden.cantidad}</Cantidad>
					<ButtonCantidad onClick={incrementarCantidad}>
						<AiOutlinePlus />
					</ButtonCantidad>
				</CantidadBotones>
				<ButtonEliminar onClick={eliminarOrden}>
					Eliminar
				</ButtonEliminar>
			</InfoPlatillo>
			<Precio>
				${(orden.platillo.precio * orden.cantidad).toFixed(2)}
			</Precio>
		</PlatilloContent>
	)
}
