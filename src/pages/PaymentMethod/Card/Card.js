import React from 'react'
import Cards from 'react-credit-cards'
import { DivContainer, DivTarjeta } from '../PaymentMethodElements'


export const Card = ({ 
	tarjeta, 
	setTarjetaSeleccionada,
	cambiarEstadoModal
}) => {

	const tarjetaClicked = () => {
		setTarjetaSeleccionada(tarjeta)
		cambiarEstadoModal(true)
	}

	return (
		<DivContainer>
			<DivTarjeta
				onClick={tarjetaClicked}
			>
				<Cards
					number={tarjeta.numeroTarjeta || ''}
					name={tarjeta.titular || ''}
					expiry={tarjeta.vigencia || ''}
					cvc={tarjeta.cvv || ''}
					focused={''}
				/>
			</DivTarjeta>
		</DivContainer>

	)
}
