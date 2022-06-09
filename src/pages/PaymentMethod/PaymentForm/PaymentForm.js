import React, { usetarjeta } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import {
	TextField,
	PaymentFormContent,
	FormCard,
	FormCardRow,
	ButtonEliminarTarjeta,
	ButtonGuardarTarjeta
} from './PaymentFormElements'

const PaymentForm = ({ tarjeta, setTarjeta, cerrarModal, eliminarTarjeta, tarjetaDefault }) => {
	if (!tarjeta) {
		tarjeta = {
			_id: '',
			number: "",
			name: "",
			expiry: "",
			cvc: "",
			focus: ""
		}
	}

	const hadleInputChange = (event) => {
		setTarjeta({
			...tarjeta,
			[event.target.id]: event.target.value
		})
	}


	const hadleFocusChange = (event) => {
		setTarjeta({
			...tarjeta,
			focus: event.target.id
		})
	}

	return (
		<PaymentFormContent>
			<Cards
				number={tarjeta.number}
				name={tarjeta.name}
				expiry={tarjeta.expiry}
				cvc={tarjeta.cvc}
				focused={tarjeta.focus}
			/>

			<FormCard>
				<TextField
					placeholder='Número de tarjeta'
					id="number"
					maxLength={"16"}
					value={tarjeta.number}
					onChange={(event) => {
						setTarjeta({
							...tarjeta,
							number: event.target.value
						})
					}}
					onFocus={hadleFocusChange}
				/>

				<TextField
					placeholder='Nombre del titular'
					id="name"
					maxLength={"30"}
					value={tarjeta.name}
					onChange={hadleInputChange}
					onFocus={hadleFocusChange}
				/>

				<FormCardRow>
					<TextField
						placeholder='Fecha de expiración'
						id="expiry"
						maxLength={"4"}
						value={tarjeta.expiry}
						onChange={hadleInputChange}
						onFocus={hadleFocusChange}
					/>

					<TextField
						placeholder='CVV'
						id="cvc"
						maxLength={"4"}
						value={tarjeta.cvc}
						onChange={hadleInputChange}
						onFocus={hadleFocusChange}
					/>
				</FormCardRow>

				{
					(tarjeta._id !== '') &&
					<ButtonEliminarTarjeta
						onClick={() => {
							eliminarTarjeta(tarjeta)
							cerrarModal()
						}}
					>Eliminar tarjeta</ButtonEliminarTarjeta>
				}

				<ButtonGuardarTarjeta
					onClick={() => {
						// LLamada a API para guardar la tarjeta
						let llamadaAPI = false

						// Si la Tarjeta se gardó con exito
						if (llamadaAPI) {
							setTarjeta({
								...tarjeta,
								focus: '',
							})
						} else {
							if (!tarjetaDefault) {
								eliminarTarjeta(tarjeta)
							} else {
								setTarjeta({
									...tarjetaDefault,
									focus: '',
								})
							}
							cerrarModal()
						}
					}}
				>Guardar Tarjeta</ButtonGuardarTarjeta>
			</FormCard>

		</PaymentFormContent>
	)
}

export default PaymentForm