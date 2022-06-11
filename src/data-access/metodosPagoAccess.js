const HOST = process.env.REACT_APP_HOST

export const getAllMetodosPago = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(sessionStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/metodoPago/getAllByUsuario`
			const response = await fetch(url, {
				headers: {
					Authorization: `Bearer ${usuario.token}`,
				}
			})
			if (!response) {
				reject({
					error: 'Error de red.'
				})
				return
			}
			if (!response.ok) {
				const error = await response.json()
				reject(error)
				return
			}
			const metodosPago = await response.json()
			resolve(metodosPago)
		} catch (error) {
			console.error(error)
			reject({
				mensaje: 'Error de red.'
			})
		}
	})
}

export const createMetodoPago = (metodoPago) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(sessionStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/metodoPago/create`
			const response  = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(metodoPago)
			})
			if (!response) {
				reject({
					error: 'Error de red.'
				})
				return
			}
			if (!response.ok) {
				const error = await response.json()
				reject(error)
				return
			}
			const mensaje = await response.json()
			resolve(mensaje)
		} catch (error) {
			console.error(error)
			reject({
				mensaje: 'Error de red.'
			})
		}
	})
}

export const updateMetodoPago = (metodoPago) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(sessionStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/metodoPago/update`
			const response  = await fetch(url, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(metodoPago)
			})
			if (!response) {
				reject({
					error: 'Error de red.'
				})
				return
			}
			if (!response.ok) {
				const error = await response.json()
				reject(error)
				return
			}
			const mensaje = await response.json()
			resolve(mensaje)
		} catch (error) {
			console.error(error)
			reject({
				mensaje: 'Error de red.'
			})
		}
	})
}

export const deleteMetodoPago = (metodoPago) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(sessionStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/metodoPago/delete`
			const response  = await fetch(url, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(metodoPago)
			})
			if (!response) {
				reject({
					error: 'Error de red.'
				})
				return
			}
			if (!response.ok) {
				const error = await response.json()
				reject(error)
				return
			}
			const mensaje = await response.json()
			resolve(mensaje)
		} catch (error) {
			console.error(error)
			reject({
				mensaje: 'Error de red.'
			})
		}
	})
}