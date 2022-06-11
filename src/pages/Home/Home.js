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
	BurguerButton
} from './HomeElements'
import { Categoria } from './Categoria'
import Modal from '../../components/Modal/Modal'
import { Descripcion } from './Descripcion/Descripcion'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'

export const Home = () => {
	const [categorias, setCategorias] = useState([])
	const [showModal, setShowModal] = useState(false)
	const [platilloSeleccionado, setPlatilloSeleccionado] = useState({})
	const [carrito, setCarrito] = useState([])
	const [estadoSidebarMenu, cambiarEstadoSidebarMenu] = useState(false)

	useEffect(() => {
		async function fetchCategorias() {
			try {
				let response = await fetch('http://localhost:8080/categoria/getAllConProductos')
				if (!response) return
				if (!response.ok) return
				let listaCategorias = await response.json()
				setCategorias(listaCategorias)
			} catch (error) {
				console.log(error)
			}
		}
		fetchCategorias()
	}, [])

	function showDetallesPlatillo(idCategoria, idPlatillo) {
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

	return (
		<HomeContent >
			<SidebarMenu
				estado={estadoSidebarMenu}
				cambiarEstadoSidebarMenu={(showSidebarMenu) => {
					cambiarEstadoSidebarMenu(showSidebarMenu)
				}}
			/>

			<HomeBody>
				<NavegationBar>
					<BurguerButton onClick={() => cambiarEstadoSidebarMenu(!estadoSidebarMenu)}/>
					<Title >Asadero Cien - Restaurante Parrilla</Title>
					<Carrito to='/covid19'>
						<AiOutlineShoppingCart />
						<span> {carrito.length}</span>
					</Carrito>
					
				</NavegationBar>
				<Encabezado>¿De qué tienes antojo?</Encabezado>
				<CategoriasContainer>
					{categorias.map(categoria => {
						return (
							<Categoria
								key={categoria._id}
								{...categoria}
								handleClick={showDetallesPlatillo}
							/>
						)
					})}
				</CategoriasContainer>
			</HomeBody>
			<Modal 
				title='Descripción'
				estado = {showModal}
				cambiarEstado = {() => {
					setShowModal(prevShowModal => {
						return !prevShowModal
					})
				}}
				children ={
					<Descripcion 
						platillo={platilloSeleccionado} 
						agregarACarrito={() => {
							setCarrito(prevCarrito => {
								return [
									...prevCarrito,
									platilloSeleccionado,
								]
							})
							setShowModal(false)
						}}
					/>
				}
			/>
		</HomeContent>
	)
}
