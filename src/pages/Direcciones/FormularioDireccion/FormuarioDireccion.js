import React from 'react'
import { toast } from 'react-toastify'
import { Boton, BotonEliminar, Campo, FormularioDireccionContent, P, Select, TelefonoTextField, TextField } from './FormularioDireccionElements'

export const FormuarioDireccion = ({
	direccion,
	setDireccion,
	guardarNuevaDireccion,
	actualizarDireccion,
	eliminarDireccion
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

	const handleInputChange = (event) => {
		setDireccion({
			...direccion,
			[event.target.name]: event.target.value,
		})
	}

	const handleContactoChange = (newValue) => {
		setDireccion({
			...direccion,
			contacto: newValue,
		})
	}

	const handleGuardarClicked = () => {
		if(direccion.titular === '') {
			toast.warn('Asegúrese de proporcionar un nombre!', toastProperties)
			return
		}
		if(direccion.calle === '') {
			toast.warn('Asegúrese de proporcionar una calle!', toastProperties)
			return
		}
		if(direccion.ciudad === '') {
			toast.warn('Asegúrese de proporcionar una ciudad!', toastProperties)
			return
		}
		if(direccion.colonia === '') {
			toast.warn('Asegúrese de proporcionar una colonia!', toastProperties)
			return
		}
		if(direccion.codigoPostal === '') {
			toast.warn('Asegúrese de proporcionar un código postal!', toastProperties)
			return
		}
		if(!direccion.contacto) {
			toast.warn('Asegúrese de proporcionar un teléfono de contacto!', toastProperties)
			return
		}
		if (direccion.isNuevaDireccion) {
			guardarNuevaDireccion.mutate({ direccion })
		} else {
			actualizarDireccion.mutate({ direccion })
		}
	}

	const handleEliminarClicked = () => {
		eliminarDireccion.mutate({ direccion })
	}

	return (
		<FormularioDireccionContent>
			<Campo>
				<P>Nombre:</P>
				<TextField
					placeholder='Ej: Luis Mendez'
					name='titular'
					value={direccion.titular}
					onChange={handleInputChange}
				/>
			</Campo>
			<Campo>
				<P>Calle y Número:</P>
				<TextField
					placeholder='Ej: Benito Juarez #32'
					name='calle'
					value={direccion.calle}
					onChange={handleInputChange}
				/>
			</Campo>
			<Campo>
				<P>Ciudad:</P>
				<Select
					name='ciudad'
					value={direccion.ciudad}
					onChange={handleInputChange}>
					<option value='' >Seleccionar</option>
					<option value='Xalapa'>Xalapa</option>
					<option value='Veracruz'>Veracruz</option>
				</Select>
			</Campo>
			<Campo>
				<P>Colonia:</P>
				<TextField
					placeholder='Ej: Lomas Verdes'
					name='colonia'
					value={direccion.colonia}
					onChange={handleInputChange}
				/>
			</Campo>
			<Campo>
				<P>Código Postal:</P>
				<TextField
					placeholder='Ej: 911500'
					name='codigoPostal'
					value={direccion.codigoPostal}
					onChange={handleInputChange}
				/>
			</Campo>
			<Campo>
				<P>Teléfono de Contacto:</P>
				<TelefonoTextField
					value={direccion.contacto}
					onChange={handleContactoChange}
				/>
			</Campo>
			{!direccion.isNuevaDireccion &&
				<BotonEliminar onClick={handleEliminarClicked}>Eliminar Dirección</BotonEliminar>
			}
			<Boton onClick={handleGuardarClicked}>Guardar Dirección</Boton>
		</FormularioDireccionContent>
	)
}
