import React, { useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import PaymentForm from '../PaymentForm/PaymentForm'
import Cards from 'react-credit-cards'
import { DivTarjeta } from '../PaymentMethodElements'


export const Card = ({ tarjeta, setTarjeta, tarjetaDefault }) => {

	const [estadoModal, cambiarEstadoModal] = useState(false)

	return (
		<>
			<DivTarjeta
				onClick={() => {
					cambiarEstadoModal(true)
				}}
			>
				<Cards
					number={tarjeta.number}
					name={tarjeta.name}
					expiry={tarjeta.expiry}
					cvc={tarjeta.cvc}
					focused={tarjeta.focus}
				/>
			</DivTarjeta>

			<Modal
				estado={estadoModal}
				cambiarEstado={(showModal) => {
					setTarjeta({
						...tarjetaDefault
					})
					cambiarEstadoModal(showModal)
				}}
				title="Modificar tarjeta">

				<PaymentForm
					tarjeta={tarjeta}
					setTarjeta={setTarjeta}
					tarjetaDefault={tarjetaDefault}
					cerrarModal={() => {
						cambiarEstadoModal(false)
					}}
				/>
			</Modal>
		</>

	)
}
