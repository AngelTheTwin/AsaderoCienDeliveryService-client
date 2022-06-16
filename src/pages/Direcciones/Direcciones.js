import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'
import { useMutation, useQuery } from 'react-query'
import { SpinnerCircular } from 'spinners-react'
import Modal from '../../components/Modal/Modal'
import { createDireccion, deleteDireccion, getAllDireccionesByUsuario, updateDireccion } from '../../data-access/direccionesAccess'
import { ButtonRegresar } from '../Carrito/CarritoElements'
import { Navbar, Title } from '../Login/LoginElements'
import { Direccion } from './Direccion/Direccion'
import { ContenedorDireccion, DireccionesContent, GridDirecciones, P, TarjetaAddDireccion } from './DireccionesElements'
import { FormuarioDireccion } from './FormularioDireccion/FormuarioDireccion'
import {
	ToastContainer,
	toast
} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const Direcciones = () => {
	const navigateTo = useNavigate()
	let toastDirecciones
	const toastProperties = {
		position: "bottom-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	}
	const [direcciones, setDirecciones] = useState([])
	const [direccionSeleccionada, setDireccionSeleccionada] = useState()
	const [showFormulario, setShowFormulario] = useState(false)
	const { data: direccionesOriginales, refetch, isLoading } = useQuery(['getAllDirecciones'], getAllDireccionesByUsuario, {
		onSuccess: (dataDirecciones) => {
			setDirecciones(dataDirecciones)
		},
		refetchOnWindowFocus: false,
		refetchOnMount: true
	})

	const mutationOptions = {
		onError: (error) => {
			showToast('error', error.mensaje)
		}, 
		onSuccess: (respuesta) => {
			showToast('success', respuesta.mensaje)
			setShowFormulario(false)
			refetch()
		}
	}

	const guardarNuevaDireccion = useMutation(({direccion}) => {
		toastDirecciones = toast.loading('Guardando...', toastProperties)
		return createDireccion(direccion)
	}, mutationOptions)

	const actualizarDireccion = useMutation(({direccion}) => {
		toastDirecciones = toast.loading('Actualizando...', toastProperties)
		return updateDireccion(direccion)
	}, mutationOptions)

	const eliminarDireccion = useMutation(({direccion}) => {
		toastDirecciones = toast.loading('Eliminando...', toastProperties)
		return deleteDireccion(direccion)
	}, mutationOptions)

	const setDireccion = (direccion) => {
		setDirecciones(prevDirecciones => prevDirecciones.map(prevDireccion => {
			if (prevDireccion._id === direccion._id) {
				return direccion
			}
			return prevDireccion
		}))
	}

	const openFormulario = (direccion) => {
		if (!direccion) {
			const nuevaDireccion = {
				_id: '',
				titular: '',
				calle: '',
				colonia: '',
				ciudad: '',
				codigoPostal: '',
				contacto: '',
				isNuevaDireccion: true
			}
			setDireccionSeleccionada(0)
			setDirecciones(prevDirecciones => [
				nuevaDireccion,
				...prevDirecciones
			])
			setShowFormulario(true)
			return
		}
		const indice = getIndiceDireccion(direccion)
		setDireccionSeleccionada(indice)
		setShowFormulario(true)
	}

	const getIndiceDireccion = (direccion) => {
		for (let i = 0; i < direcciones.length; i++) {
			if (direccion._id === direcciones[i]._id) {
				return i
			}
		}
	}

	const cancelarCambios = (showModal) => {
		if (direcciones[direccionSeleccionada].isNuevaDireccion) {
			setDirecciones(prevDirecciones => {
				prevDirecciones.shift()
				return prevDirecciones
			})
		}
		setDireccion(direccionesOriginales[direccionSeleccionada])
		setShowFormulario(showModal)
	}

	const showToast = (type, message) => {
		toast.update(toastDirecciones, {
			render: message,
			type: type,
			isLoading: false,
			...toastProperties,
		})
	}

	return (
		<DireccionesContent>
			<Navbar>
				<ButtonRegresar onClick={() => navigateTo('/home')}>
					<BiArrowBack />
				</ButtonRegresar>
				<Title>Direcciones</Title>
			</Navbar>
			{isLoading
				?
				<SpinnerCircular color='#C40B0B' />
				:
				<GridDirecciones>
					<ContenedorDireccion >
						<TarjetaAddDireccion onClick={() => openFormulario()}>
							<AiOutlinePlus />
							<P>Nueva Dirección</P>
						</TarjetaAddDireccion>
					</ContenedorDireccion>
					{direcciones.map(direccion => {
						return (
							<Direccion
								key={direccion._id}
								direccion={direccion}
								showFormulario={() => openFormulario(direccion)}
							/>
						)
					})}
				</GridDirecciones>
			}
			{showFormulario
				?
				<Modal
					title='Dirección'
					estado={showFormulario}
					cambiarEstado={cancelarCambios} >
					<FormuarioDireccion
						direccion={direcciones[direccionSeleccionada]}
						setDireccion={setDireccion}
						guardarNuevaDireccion={guardarNuevaDireccion}
						actualizarDireccion={actualizarDireccion}
						eliminarDireccion={eliminarDireccion}
					/>
				</Modal>
				: <></>
			}
			<ToastContainer
				theme='dark'
			/>
		</DireccionesContent>
	)
}
