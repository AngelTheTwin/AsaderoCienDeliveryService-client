import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { LandingPage } from './pages/LandingPage'
import { Login } from './pages/Login/Login'
import { PaymentMethod } from './pages/PaymentMethod/PaymentMethod'
import { Covid19 } from './pages/Covid19/Covid19'

function App() {

	return (
		<Router>
			<Routes>
				<Route index path='/' element={<LandingPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='/paymentMethod' element={<PaymentMethod />} />
				<Route path='/covid19' element={<Covid19 />} />
			</Routes>
		</Router>
	)
}

export default App