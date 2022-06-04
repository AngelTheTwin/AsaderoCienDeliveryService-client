import React from 'react'
import {
	Nav,
	Bars,
	NavBtnLink,
	NavMenu,
	NavScrollLink,
	Title
} from './NavBarElements'

export default function Navbar(props) {
	const linkProps = {
		activeClass: 'active',
		spy: true,
		smooth: true,
		offset: -80,
		duration: 500,
	}

	return (
		<Nav >
			<Title >Asadero Cien - Restaurante Parrilla</Title>
			<Bars onClick={props.toggle} />
			<NavMenu>
				<NavScrollLink
					to='inicio'
					{ ...linkProps }
				>Inicio</NavScrollLink>
				<NavScrollLink
					to='testimonios'
					{ ...linkProps }
				>Testimonios</NavScrollLink>
				<NavScrollLink
					to='informacion'
					{ ...linkProps }
				>Información</NavScrollLink>
				<NavBtnLink to='/login'>Iniciar Sesión</NavBtnLink>
			</NavMenu>
		</Nav>
	)
}