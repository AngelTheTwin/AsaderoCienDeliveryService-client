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

	return (
		<>
			<DivTarjeta
				onClick={() => {
					setTarjetaSeleccionada(tarjeta)
					cambiarEstadoModal(true)
				}}
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
