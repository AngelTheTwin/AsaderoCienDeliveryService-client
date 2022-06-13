import React from 'react'
import { DireccionContent, InfoDireccionContainer, P, PinContainer, TarjetaDireccion, Titular } from './DireccionElements'
import { FiMapPin } from 'react-icons/fi'

export const Direccion = ({ direccion, showFormulario }) => {
	return (
		<DireccionContent onClick={showFormulario}>
			<TarjetaDireccion>
				<PinContainer>
					<FiMapPin />
				</PinContainer>
				<InfoDireccionContainer>
					<Titular>{direccion.titular}</Titular>
					<P>{direccion.calle}</P>
					<P>{direccion.colonia}</P>
					<P>{direccion.ciudad}</P>
					<P>C.P. {direccion.codigoPostal}</P>
					<P>Telefono: {direccion.contacto}</P>
				</InfoDireccionContainer>
			</TarjetaDireccion>
		</DireccionContent>
	)
}
