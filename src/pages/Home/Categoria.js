import React from 'react'
import {
	DescripciónCategoria,
	PlatillosContainer,
	TituloCategoria,
} from './HomeElements'
import { Platillo } from './Platillo'

export const Categoria = (props) => {
	return (
		<div>
			<TituloCategoria>{props.nombre}</TituloCategoria>
			<DescripciónCategoria>{props.descripcion}</DescripciónCategoria>
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