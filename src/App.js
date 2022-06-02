import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'

function App() {

	return (
		<Router>
			<Routes>
				<Route index element={<LandingPage />} />
				<Route path='/login' element={<h1>Login</h1>} />
			</Routes>
		</Router>
	)
}

export default App