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
		<PlatilloContent>
			<ImgPlatillo src={props.imagen} />
			<InfoPlatilloContainer>
				<NombrePlatillo>{props.nombre}</NombrePlatillo>
				<PrecioPlatillo>${props.precio}.00</PrecioPlatillo>
			</InfoPlatilloContainer>
		</PlatilloContent>
	)
}
