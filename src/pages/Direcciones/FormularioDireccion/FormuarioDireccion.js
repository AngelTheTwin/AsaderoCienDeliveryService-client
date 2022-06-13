import React from 'react'
import { Boton, BotonEliminar, Campo, FormularioDireccionContent, P, Select, TelefonoTextField, TextField } from './FormularioDireccionElements'

export const FormuarioDireccion = ({
	direccion,
	setDireccion,
	guardarNuevaDireccion,
	actualizarDireccion,
	eliminarDireccion
}) => {

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
					<option >Seleccionar</option>
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
