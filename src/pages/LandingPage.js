import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import DropDownMenu from '../components/DropdownMenu/DropdownMenu'
import Inicio from '../components/Inicio/Inicio.js'
import Testimonios from '../components/Testimonios/Testimonios.js'
import Informacion from '../components/Informacion/Informacion.js'

export const LandingPage = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const toggleDropdown = () => {
		setIsDropdownOpen(prevIsOpen => !prevIsOpen)
	}

	return (
		<>
			<Navbar toggle={toggleDropdown} />
			<DropDownMenu toggle={toggleDropdown} isOpen={isDropdownOpen} />
			<Inicio />
			<Testimonios />
			<Informacion />
		</>
	)
}
