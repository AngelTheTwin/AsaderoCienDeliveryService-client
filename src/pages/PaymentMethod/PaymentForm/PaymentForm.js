import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import {
	TextField,
	PaymentFormContent,
	FormCard,
	FormCardRow,
	ButtonEliminarTarjeta,
	ButtonGuardarTarjeta,
} from './PaymentFormElements'

const PaymentForm = ({
	tarjeta,
	setTarjeta,
	eliminarTarjeta,
	guardarNuevaTarjeta,
	actualizarTarjeta,
	toast
}) => {
	const toastProperties = {
		position: "bottom-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	}
	const [focus, setFocus] = useState('')

	const hadleInputChange = (event) => {
		setTarjeta({
			...tarjeta,
			[event.target.id]: event.target.value
		})
	}

	const hadleFocusChange = (event) => {
		setFocus(event.target.id)
	}

	const guardarTarjetaButtonClicked = () => {
		if (tarjeta.titular === '') {
			toast.warn('Asegúrese de proporcionar un Número de tarjeta!', toastProperties)
			return
		}
		if (tarjeta.numeroTarjeta === '') {
			toast.warn('Asegúrese de proporcionar un titular!', toastProperties)
			return
		}
		if (tarjeta.vigencia === '') {
			toast.warn('Asegúrese de proporcionar una vigencia!', toastProperties)
			return
		}
		if (tarjeta.cvv === '') {
			toast.warn('Asegúrese de proporcionar un cvv!', toastProperties)
			return
		}
		if (tarjeta.isNuevaTarjeta) {
			guardarNuevaTarjeta.mutate({
				tarjeta: {
					...tarjeta,
					isNuevaTarjeta: false
				}
			})
		} else {
			actualizarTarjeta.mutate({ tarjeta })
		}
	}

	const eliminarTarjetaButtonClicked = () => {
		eliminarTarjeta.mutate({ tarjeta })
	}

	return (
		<PaymentFormContent>
			<Cards
				number={tarjeta.numeroTarjeta || ''}
				name={tarjeta.titular || ''}
				expiry={tarjeta.vigencia || ''}
				cvc={tarjeta.cvv || ''}
				focused={focus}
			/>
			<FormCard>
				<TextField
					placeholder='Número de tarjeta'
					id="numeroTarjeta"
					maxLength={"16"}
					value={tarjeta.numeroTarjeta}
					onChange={hadleInputChange}
					onFocus={hadleFocusChange}
				/>
				<TextField
					placeholder='Nombre del titular'
					id="titular"
					maxLength={"30"}
					value={tarjeta.titular}
					onChange={hadleInputChange}
					onFocus={hadleFocusChange}
				/>
				<FormCardRow>
					<TextField
						placeholder='Fecha de expiración'
						id="vigencia"
						maxLength={"4"}
						value={tarjeta.vigencia}
						onChange={hadleInputChange}
						onFocus={hadleFocusChange}
					/>
					<TextField
						placeholder='CVV'
						id="cvc"
						maxLength={"4"}
						value={tarjeta.cvv}
						onFocus={hadleFocusChange}
						onChange={(event) => {
							setTarjeta({
								...tarjeta,
								cvv: event.target.value
							})
						}}
					/>
				</FormCardRow>
				{
					!tarjeta.isNuevaTarjeta &&
					<ButtonEliminarTarjeta onClick={eliminarTarjetaButtonClicked} >Eliminar tarjeta</ButtonEliminarTarjeta>
				}
				<ButtonGuardarTarjeta onClick={guardarTarjetaButtonClicked}>
					Guardar Tarjeta
				</ButtonGuardarTarjeta>
			</FormCard>
		</PaymentFormContent>
	)
}

export default PaymentForm