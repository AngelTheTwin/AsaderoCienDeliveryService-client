import React, { useState } from 'react'
import { Platillo } from '../Platillo'
import {
	ButtonAgregar,
	ButtonCantidad,
	Cantidad,
	CantidadContainer,
	DescripcionContent,
	H3,
	TextArea,
	TextDescripcion
} from './DescripcionElements'
import {
	AiOutlineMinus,
	AiOutlinePlus
} from 'react-icons/ai'

export const Descripcion = ({ platillo, agregarACarrito }) => {
	const [cantidad, setCantidad] = useState(1)
	const [instruccionesEspeciales, setInstruccionesEspeciales] = useState('')

	return (
		<DescripcionContent>
			<Platillo
				{...platillo}
				color='#4E4E4E'
			/>
			<TextDescripcion>{platillo.descripcion}</TextDescripcion>
			<H3>Instrucciones Especiales</H3>
			<TextArea 
				value={instruccionesEspeciales}
				onChange={(event) => {
					setInstruccionesEspeciales(event.target.value)
				}}
			/>
			<CantidadContainer>
				<ButtonCantidad
					onClick={() => {
						setCantidad(prevCantidad => {
							return (prevCantidad - 1 >= 0) ? prevCantidad - 1 : 0
						})
					}}
				>
					<AiOutlineMinus />
				</ButtonCantidad>
				<Cantidad>{cantidad}</Cantidad>
				<ButtonCantidad
					onClick={() => {
						setCantidad(prevCantidad => {
							return prevCantidad + 1
						})
					}}
				>
					<AiOutlinePlus />
				</ButtonCantidad>
			</CantidadContainer>
			<ButtonAgregar
				disabled= {(cantidad > 0) ? false : true}
				onClick={() => {
					for (var i = 0; i<cantidad; i++) {
						agregarACarrito()
					}
				}}
			>Agregar al Carrito</ButtonAgregar>
		</DescripcionContent>
	)
}