import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { Login } from './pages/Login/Login'

function App() {

	return (
		<Router>
			<Routes>
				<Route index path='/' element={<LandingPage />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	)
}

export default App