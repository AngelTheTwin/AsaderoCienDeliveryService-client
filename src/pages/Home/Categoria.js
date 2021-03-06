import React from 'react'
import {
	DescripciĆ³nCategoria,
	PlatillosContainer,
	TituloCategoria,
} from './HomeElements'
import { Platillo } from './Platillo'

export const Categoria = (props) => {
	return (
		<div>
			<TituloCategoria>{props.nombre}</TituloCategoria>
			<DescripciĆ³nCategoria>{props.descripcion}</DescripciĆ³nCategoria>
			<PlatillosContainer>
				{props.productos.map(platillo => {
					return (
						<Platillo 
							key={platillo._id} 
							{...platillo} 
							color='#222222'
							handleClick= {() => {
								props.handleClick(props._id, platillo._id)
							}}
						/>
					)
				})}
			</PlatillosContainer>
		</div>
	)
}