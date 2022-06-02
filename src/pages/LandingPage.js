import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import DropDownMenu from '../components/DropdownMenu/DropdownMenu'
import Inicio from './Inicio'
import Testimonios from './Testimonios'
import Informacion from './Informacion'

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
