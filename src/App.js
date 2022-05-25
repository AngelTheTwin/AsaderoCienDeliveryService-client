import Navbar from './components/Navbar/Navbar'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import Testimonios from './pages/Testimonios'
import Informacion from './pages/Informacion'
import Inicio from './pages/Inicio'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/home' element={<Inicio />} />
				<Route path='/testimonios' element={<Testimonios />} />
				<Route path='/informacion' element={<Informacion />} />
			</Routes>
		</Router>
	)
}

export default App
