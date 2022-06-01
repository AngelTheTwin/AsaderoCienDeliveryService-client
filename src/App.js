import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import Testimonios from './pages/Testimonios'
import Informacion from './pages/Informacion'
import Inicio from './pages/Inicio'
import DropDownMenu from './components/DropdownMenu/DropdownMenu'

function App() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const toggleDropdown = () => {
		setIsDropdownOpen(prevIsOpen => !prevIsOpen)
	}

	return (
		<Router>
			<Navbar toggle={toggleDropdown}/>
			<DropDownMenu toggle={toggleDropdown} isOpen={isDropdownOpen} />
			<Routes>
				<Route index path='/' element={<Inicio />} />
				<Route path='/testimonios' element={<Testimonios />} />
				<Route path='/informacion' element={<Informacion />} />
			</Routes>
		</Router>
	)
}

export default App
