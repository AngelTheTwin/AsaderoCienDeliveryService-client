import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'

import {
	PaymentMethodContent,
	Navbar,
	BackButton,
	BackIcon,
	Title,
	Grid,
	ButtonAgregar,
	Plus,
	Text,
	DivTarjeta,
}from './PaymentMethodElements'

import { Card } from './Card/Card'

export const PaymentMethod = () => {

	const [estadoModal, cambiarEstadoModal] = useState(false)
	
	return (
		<PaymentMethodContent>
			<Navbar id="nav" >
				<BackButton to="/">
					<BackIcon />
				</BackButton>
				<Title >Asadero Cien - Restaurante Parrilla</Title>
			</Navbar>

			<Grid >
				<DivTarjeta>
					<ButtonAgregar onClick={() => cambiarEstadoModal(!estadoModal)}>
						<Plus>+</Plus>
						<Text>Agregar nueva tarjeta</Text>
					</ButtonAgregar>
				</DivTarjeta>


				<DivTarjeta>
					<Card></Card>
				</DivTarjeta>

				<DivTarjeta>
					<Card></Card>
				</DivTarjeta>
			</Grid>

			<Modal 
				estado={estadoModal} 
				cambiarEstado={cambiarEstadoModal}
				title="Agregar nueva tarjeta">

			</Modal>
		</PaymentMethodContent>
	)
}
