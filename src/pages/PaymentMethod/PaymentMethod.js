import React, { useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { Card } from './Card/Card'
import PaymentForm from './PaymentForm/PaymentForm'

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
				<DivTarjeta onClick={() => cambiarEstadoModal(!estadoModal)}>
					<ButtonAgregar >
						<Plus>+</Plus>
						<Text>Agregar nueva tarjeta</Text>
					</ButtonAgregar>
				</DivTarjeta>


				<DivTarjeta onClick={() => cambiarEstadoModal(!estadoModal)}>
					<Card ></Card>
				</DivTarjeta>

				<DivTarjeta onClick={() => cambiarEstadoModal(!estadoModal)}>
					<Card ></Card>
				</DivTarjeta>

				<DivTarjeta onClick={() => cambiarEstadoModal(!estadoModal)}>
					<Card ></Card>
				</DivTarjeta>

				<DivTarjeta onClick={() => cambiarEstadoModal(!estadoModal)}>
					<Card ></Card>
				</DivTarjeta>

				<DivTarjeta	vTarjeta onClick={() => cambiarEstadoModal(!estadoModal)}>
					<Card ></Card>
				</DivTarjeta>
			</Grid>

			<Modal 
				estado={estadoModal} 
				cambiarEstado={cambiarEstadoModal}
				title="Agregar nueva tarjeta">

				<PaymentForm/>
			</Modal>
		</PaymentMethodContent>
	)
}
