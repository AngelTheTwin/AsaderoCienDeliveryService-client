import React from 'react'
import { 
	Nav, 
	Bars, 
	NavBtnLink, 
	NavMenu, 
	NavLink 
} from './NavBarElements'

export default function Navbar( props ) {
	return (
		<div>
			<Nav >
				<Bars onClick={props.toggle}/>
				<NavMenu>
					<NavLink to='/'>Inicio</NavLink>
					<NavLink to='/testimonios'>Testimonios</NavLink>
					<NavLink to='/informacion'>Información</NavLink>
					<NavBtnLink to='/login'>Iniciar Sesión</NavBtnLink>
				</NavMenu>
			</Nav>
		</div>
	)
}