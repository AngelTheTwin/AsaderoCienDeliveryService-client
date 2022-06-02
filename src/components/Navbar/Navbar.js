import React from 'react'
import {
	Nav,
	Bars,
	NavBtnLink,
	NavMenu,
	NavScrollLink
} from './NavBarElements'

export default function Navbar(props) {
	return (
		<Nav >
			<Bars onClick={props.toggle} />
			<NavMenu>
				<NavScrollLink
					to='inicio'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-80}
					duration={500}
				>Inicio</NavScrollLink>
				<NavScrollLink
					to='testimonios'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-80}
					duration={500}
				>Testimonios</NavScrollLink>
				<NavScrollLink
					to='informacion'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-80}
					duration={500}
				>Información</NavScrollLink>
				<NavBtnLink to='/login'>Iniciar Sesión</NavBtnLink>
			</NavMenu>
		</Nav>
	)
}