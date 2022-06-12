import React, { useEffect, useState } from 'react'
import { Title } from '../Login/LoginElements'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {
	Encabezado,
	HomeBody,
	HomeContent,
	CategoriasContainer,
	Carrito,
	NavegationBar,
	BurguerButton,
	DivSpinner
} from './HomeElements'
import { Categoria } from './Categoria'
import Modal from '../../components/Modal/Modal'
import { Descripcion } from './Descripcion/Descripcion'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'
import { useQuery } from 'react-query'
import { getAllProductosGroupedByCategoria } from '../../data-access/productosAccess'
import { SpinnerCircular } from 'spinners-react'
import {
	ToastContainer,
	toast
} from 'react-toastify'

export const Home = () => {
	const toastProperties = {
		position: "bottom-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	}
	const { data: categorias, isLoading } = useQuery(['getAllProductos'], getAllProductosGroupedByCategoria, {
		onError: (error) => {
			toast.error(error.mensaje, toastProperties)
		},
		refetchOnWindowFocus: false
	})
	const [showModal, setShowModal] = useState(false)
	const [platilloSeleccionado, setPlatilloSeleccionado] = useState({})
	const [platillosCarrito, setPlatillosCarrito] = useState(
		JSON.parse(sessionStorage.getItem('carrito'))
		|| []
	)
	const [showSidebarMenu, setShowSidebarMenu] = useState(false)

	useEffect(() => {
		sessionStorage.setItem('carrito', JSON.stringify(platillosCarrito))
	}, [platillosCarrito])

	const  showDetallesPlatillo = (idCategoria, idPlatillo) => {
		categorias.forEach(categoria => {
			if (categoria._id === idCategoria) {
				categoria.productos.forEach(producto => {
					if (producto._id === idPlatillo) {
						setPlatilloSeleccionado(producto)
						setShowModal(true)
						return
					}
				})
				return
			}
		})
	}

	const agregarACarrito = (producto) => {
		setPlatillosCarrito(prevCarrito => [
			...prevCarrito,
			producto
		])
		toast.success('Platillo agregado al carrito!', toastProperties)
		setShowModal(false)
	}

	const toggleSidbarMenu = (event) => {
		event.stopPropagation()
		setShowSidebarMenu(prevShowSidebarMenu => !prevShowSidebarMenu)
	}

	const hideSidebarMenu = () => {
		setShowSidebarMenu(false)
	}

	return (
		<HomeContent >
			<SidebarMenu
				estado={showSidebarMenu}
			/>

			<HomeBody onClick={hideSidebarMenu}>
				<NavegationBar>
					<BurguerButton onClick={toggleSidbarMenu} />
					<Title >Asadero Cien - Restaurante Parrilla</Title>
					<Carrito to='/carrito' >
						<AiOutlineShoppingCart />
					</Carrito>

				</NavegationBar>
				<Encabezado>¿De qué tienes antojo?</Encabezado>
				{isLoading
					?
					<DivSpinner>
						<SpinnerCircular color='red' enabled={isLoading} />
					</DivSpinner>
					:
					<CategoriasContainer>
						{categorias && categorias.map(categoria => {
							return (
								<Categoria
									key={categoria._id}
									{...categoria}
									handleClick={showDetallesPlatillo}
								/>
							)
						})}
					</CategoriasContainer>
				}
			</HomeBody>
			<Modal
				title='Descripción'
				estado={showModal}
				cambiarEstado={setShowModal} >
				<Descripcion
					platillo={platilloSeleccionado}
					agregarACarrito={agregarACarrito}
				/>
			</Modal>
			<ToastContainer theme='dark' />
		</HomeContent>
	)
}
