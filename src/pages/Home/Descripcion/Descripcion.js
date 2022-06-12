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
import { nanoid } from 'nanoid'

export const Descripcion = ({ platillo, agregarACarrito }) => {
	const [cantidad, setCantidad] = useState(1)
	const [instruccionesEspeciales, setInstruccionesEspeciales] = useState('')

	const handleInstruccionesChange = (event) => {
		setInstruccionesEspeciales(event.target.value)
	}

	const reducirCantidad = () => {
		setCantidad(prevCantidad => {
			return (prevCantidad - 1 >= 0) ? prevCantidad - 1 : 0
		})
	}

	const incrementarCantidad = () => {
		setCantidad(prevCantidad => {
			return prevCantidad + 1
		})
	}

	const buttonAgregarClicked = () => {
		agregarACarrito({
			_id: nanoid(),
			platillo,
			cantidad: cantidad,
			instruccionesEspeciales,
		})
	}

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
				onChange={handleInstruccionesChange}
			/>
			<CantidadContainer>
				<ButtonCantidad
					onClick={reducirCantidad}
				>
					<AiOutlineMinus />
				</ButtonCantidad>
				<Cantidad>{cantidad}</Cantidad>
				<ButtonCantidad
					onClick={incrementarCantidad}
				>
					<AiOutlinePlus />
				</ButtonCantidad>
			</CantidadContainer>
			<ButtonAgregar
				disabled= {(cantidad > 0) ? false : true}
				onClick={buttonAgregarClicked}
			>Agregar al Carrito</ButtonAgregar>
		</DescripcionContent>
	)
}