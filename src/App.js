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
import { Carrito } from './pages/Carrito/Carrito'
import { Pedidos } from './pages/Pedidos/Pedidos'
import { Direcciones } from './pages/Direcciones/Direcciones'
import { PedidosRepartidor } from './pages/PedidosRepartidor/PedidosRepartidor'

function App() {

	return (
		<Router>
			<Routes>
				<Route index path='/' element={<LandingPage />} />
				<Route path='/login' element={<Login />} />
				<Route path='/home' element={<Home />} />
				<Route path='/paymentMethod' element={<PaymentMethod />} />
				<Route path='/covid19' element={<Covid19 />} />
				<Route path='/carrito' element={<Carrito />} />
				<Route path='/pedidos' element={<Pedidos />} />
				<Route path='/direcciones' element={<Direcciones />} />
				<Route path='/pedidosRepartidor' element={<PedidosRepartidor />} />
			</Routes>
		</Router>
	)
}

export default App