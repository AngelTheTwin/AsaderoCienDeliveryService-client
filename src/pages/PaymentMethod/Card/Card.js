import React, { useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import PaymentForm from '../PaymentForm/PaymentForm'
import Cards from 'react-credit-cards'
import { DivTarjeta } from '../PaymentMethodElements'


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
		<>
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
		</>

	)
}
