import React, { useState } from 'react'
import { BsCardChecklist } from 'react-icons/bs'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { useMutation, useQuery } from 'react-query'
import { SpinnerCircular } from 'spinners-react'
import Modal from '../../components/Modal/Modal'
import { getAllPedidos, getAllPedidosByRepartidor, updatePedido } from '../../data-access/pedidosAccess'
import { Navbar, Title } from '../Login/LoginElements'
import { DetallesPedidoRepartidor } from './DetallesPedidoRepartidor/DetallesPedidoRepartidor'
import { PedidoRepartidor } from './PedidoRepartidor/PedidoRepartidor'
import { ButtonPedidosDisponibles, ContainerPedido, Grid, P, PedidosRepartidorContent } from './PedidosRepartidorElements'
import {
	ToastContainer,
	toast
} from 'react-toastify'

export const PedidosRepartidor = () => {
	let toastInstance
	const toastProperties = {
		position: "bottom-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	}
	const {
		data: pedidos,
		isLoading: isLoadingPedidos,
		refetch: refetchPedidos
	} = useQuery(['getAllPedidosRepartidor'], getAllPedidosByRepartidor)
	const {
		data: pedidosDisponibles,
		isLoading: isLoadingDisponibles,
		refetch: refetchDisponibles
	} = useQuery(['getAllPedidosDisponibles'], getAllPedidos)

	const mutationOptions = {
		onError: (error) => {
			showToast('error', error.mensaje)
		},
		onSuccess: (respuesta) => {
			showToast('success', respuesta.mensaje)
			setShowModal(false)
			refetch()
		}
	}

	const update = useMutation(({ pedido }) => {
		toastInstance = toast.loading('Procesando...', toastProperties)
		return updatePedido(pedido)
	}, mutationOptions)

	const [pedidoSeleccionado, setPedidoSeleccionado] = useState()
	const [showDisponibles, setShowDisponibles] = useState(false)
	const [showModal, setShowModal] = useState(false)
	const listaPedidos = showDisponibles
		? pedidosDisponibles
		: pedidos
	const isLoading = showDisponibles
		? isLoadingDisponibles
		: isLoadingPedidos
	const icon = showDisponibles
		? <MdOutlineDeliveryDining />
		: <BsCardChecklist />
	const refetch = () => {
		refetchDisponibles()
		refetchPedidos()
	}

	const openModal = (pedido) => {
		setPedidoSeleccionado(pedido)
		setShowModal(true)
	}

	const toggleShowDisponibles = () => {
		setShowDisponibles(prevValue => !prevValue)
		refetch()
	}

	const showToast = (type, message) => {
		toast.update(toastInstance, {
			render: message,
			type: type,
			isLoading: false,
			...toastProperties,
		})
	}

	return (
		<PedidosRepartidorContent>
			<Navbar>
				<Title>Pedidos</Title>
			</Navbar>
			<Grid>
				<ContainerPedido>
					<ButtonPedidosDisponibles onClick={toggleShowDisponibles}>
						{icon}
						<P>Ver Pedidos {showDisponibles ? 'Asignados' : 'Disponibles'}</P>
					</ButtonPedidosDisponibles>
				</ContainerPedido>
				{isLoading
					?
					<ContainerPedido>
						<SpinnerCircular color='#C40B0B' />
					</ContainerPedido>
					:
					listaPedidos.map(pedido => (
						<PedidoRepartidor
							key={pedido._id}
							pedido={pedido}
							openModal={() => openModal(pedido)}
						/>
					))
				}
			</Grid>
			{pedidoSeleccionado &&
				<Modal
					title={`Folio: ${pedidoSeleccionado._id}`}
					estado={showModal}
					cambiarEstado={setShowModal}
				>
					<DetallesPedidoRepartidor
						pedido={pedidoSeleccionado}
						disponible={showDisponibles}
						update={update} />
				</Modal>
			}

			<ToastContainer
				theme='dark'
			/>
		</PedidosRepartidorContent>
	)
}
