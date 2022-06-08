import React, { useEffect, useState } from 'react'
import { Navbar, Title } from '../Login/LoginElements'
import { FaBars } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {
	Encabezado,
	HomeBody,
	HomeContent,
	CategoriasContainer
} from './HomeElements'
import { Categoria } from './Categoria'

export const Home = () => {
	const [categorias, setCategorias] = useState([])

	useEffect(() => {
		async function fetchCategorias() {
			try {
				let response = await fetch('http://angel.local:8080/categoria/getAllConProductos')
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
						alert(`${producto.nombre}\n${producto.descripcion}\nPrecio: $${producto.precio}.00`)
						return
					}
				})
				return
			}
		})
	}

	return (
		<HomeContent >
			<HomeBody>
				<Navbar>
					<FaBars />
					<Title >Asadero Cien - Restaurante Parrilla</Title>
					<AiOutlineShoppingCart />
				</Navbar>
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
		</HomeContent>
	)
}
