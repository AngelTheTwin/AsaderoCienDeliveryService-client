import React, { useEffect, useState } from 'react'
import { Navbar, Title } from '../Login/LoginElements'
import { FaBars } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Encabezado,
	HomeBody, 
	HomeContent, 
	CategoriasContainer
} from './HomeElements'
import { Categoria } from './Categoria'

export const Home = () => {
	const [categorias, setCategorias] = useState([])

	useEffect(() => {
		async function fetchCategorias() {
			let response = await fetch('http://angel.local:8080/categoria/getAllConProductos')
			if (!response) return
			if (!response.ok) return
			let listaCategorias = await response.json()
			setCategorias(listaCategorias)
		}
		fetchCategorias()
	}, [])

	return (
		<HomeContent style={{
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
		}}>
			<HomeBody>
				<Navbar>
					<FaBars />
					<Title >Asadero Cien - Restaurante Parrilla</Title>
					<AiOutlineShoppingCart />
				</Navbar>
				<Encabezado>¿De qué tienes antojo?</Encabezado>
				<CategoriasContainer>
					{categorias.map(categoria => {
						return <Categoria key={categoria._id} {...categoria} />
					})}
				</CategoriasContainer>
			</HomeBody>
		</HomeContent>
	)
}
