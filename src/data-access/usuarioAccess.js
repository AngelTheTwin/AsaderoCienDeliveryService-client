const HOST = process.env.REACT_APP_HOST

export const login = (usuario) => {
	return new Promise(async (resolve, reject) => {
		try {
			const url = `http://${HOST}:8080/usuario/login`
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(usuario)
			})
			if (!response) {
				reject(new Error('Error de red'))
				return
			}
			if (!response.ok) {
				const error = await response.json()
				reject(error)
				return
			}
			const loggedUsuario = await response.json()
			resolve(loggedUsuario)
		} catch (error) {
			console.error(error)
			reject({
				mensaje: 'Error de red.'
			})
		}
	})
}

export const createUsuario = (usuario) => {
	return new Promise(async (resolve, reject) => {
		try {
			const url = `http://${HOST}:8080/usuario/create`
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					...usuario,
					tipoUsuario: 'consumidor'
				})
			})
			if (!response) {
				reject({
					mensaje: 'Error de red.'
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