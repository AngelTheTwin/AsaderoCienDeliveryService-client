import React from 'react'
import {
	ImgPlatillo,
	InfoPlatilloContainer,
	PlatilloContent,
	NombrePlatillo,
	PrecioPlatillo,
} from './HomeElements'

export const Platillo = (props) => {
	return (
		<PlatilloContent
		color={props.color}
			onClick={props.handleClick}
		>
			<ImgPlatillo 
				src={props.imagen} 
				alt={props.nombre}
			/>
			<InfoPlatilloContainer
				color={props.color}
			>
				<NombrePlatillo>{props.nombre}</NombrePlatillo>
				<PrecioPlatillo>${props.precio.toFixed(2)}</PrecioPlatillo>
			</InfoPlatilloContainer>
		</PlatilloContent>
	)
}
