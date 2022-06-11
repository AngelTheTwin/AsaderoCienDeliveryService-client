import React, { useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { Card } from './Card/Card'
import PaymentForm from './PaymentForm/PaymentForm'
import { nanoid } from 'nanoid'

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
} from './PaymentMethodElements'

export const PaymentMethod = () => {

	const [estadoModal, cambiarEstadoModal] = useState(false)
	const [listaTarjetas, setListaTarjetas] = useState([
		{
			_id: '62a02e5c4637ed1a561e148c"',
			number: "5555444422221311",
			name: "Daniel",
			expiry: "1221",
			cvc: "5656",
			focus: ""
		},
		{
			_id: '62a02e5c4637ed1a561e1499c"',
			number: "5555444422221111",
			name: "Angel",
			expiry: "1221",
			cvc: "5656",
			focus: ""
		},
	])
	const [valoresDefecto, setValoresDefecto] = useState([])
	console.log('listaTarjetas', listaTarjetas)

	useEffect(() =>{
		setValoresDefecto(listaTarjetas)
	}, [])

	const obtenerTarjetaDefault = (tarjeta) => {
		let tarjetaDefault
		valoresDefecto.forEach(tarjetaLista =>{
			if (tarjetaLista._id === tarjeta._id) {
				tarjetaDefault = tarjetaLista
				return
			}
		})
		return tarjetaDefault
	}

	const setTarjeta = (tarjeta) => {
		setListaTarjetas(prevTarjetas =>{
			// let nuevasTarjetas = []
			// for (const tarjetaActual in prevTarjetas) {
			// 	if (tarjetaActual._id === tarjeta._id) {
			// 		nuevasTarjetas.push(tarjeta)
			// 	} else {
			// 		nuevasTarjetas.push(tarjetaActual)
			// 	}
			// }

			// return nuevasTarjetas

			return prevTarjetas.map(tarjetaActual => {
				if (tarjetaActual._id === tarjeta._id) {
					return tarjeta
				}
				return tarjetaActual
			})
		})
	}

	const eliminarTarjeta = (tarjeta) => {
		console.log("tarjeta a eliminar",tarjeta)
		setListaTarjetas(prevTarjetas => {
			let nuevaListaTajetas = []
			prevTarjetas.forEach(tarjetaActual => {
				if (!(tarjetaActual._id === tarjeta._id)) {
					nuevaListaTajetas.push(tarjetaActual)
				}
			})
			return nuevaListaTajetas
		})
	}

	return (
		<PaymentMethodContent>
			<Navbar id="nav" >
				<BackButton to="/">
					<BackIcon />
				</BackButton>
				<Title >Asadero Cien - Métodos de Pago</Title>
			</Navbar>

			<Grid >
				<DivTarjeta onClick={() => {
					setListaTarjetas(prevTarjetas => [
						{
							_id: nanoid(),
							number: "",
							name: "",
							expiry: "",
							cvc: "",
							focus: ""
						},
						...prevTarjetas
					])
					cambiarEstadoModal(!estadoModal)
				}}
				>
					<ButtonAgregar >
						<Plus>+</Plus>
						<Text>Agregar nueva tarjeta</Text>
					</ButtonAgregar>
				</DivTarjeta>

				{
					listaTarjetas.map(tarjeta => {
						return (
							<Card 
								key={tarjeta._id}
								tarjeta={tarjeta}
								tarjetaDefault= {obtenerTarjetaDefault(tarjeta)}
								setTarjeta={setTarjeta}
							></Card>
						)
					})
				}
			</Grid>

			<Modal
				estado={estadoModal}
				cambiarEstado={(showModal) => {
					setListaTarjetas(prevTarjetas => {
						prevTarjetas.shift()
						return prevTarjetas
					})
					cambiarEstadoModal(showModal)
				}}
				title="Agregar nueva tarjeta">

				<PaymentForm 
					tarjeta={listaTarjetas[0]}
					setTarjeta={setTarjeta}
					cerrarModal={() => {
						cambiarEstadoModal(false)
					}}
					eliminarTarjeta={eliminarTarjeta}
				/>
			</Modal>
		</PaymentMethodContent>
	)
}
