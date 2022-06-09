export const login = (usuario) => {
	return new Promise(async (resolve, reject) => {
		try {
			const url = 'http://localhost:8080/usuario/login'
			let response = await fetch(url, {
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
			reject(error)
		}
	})
}

export const createUsuario = (usuario) => {
	return new Promise(async (resolve, reject) => {
		try {
			const url = 'http://localhost:8080/usuario/create'
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
				reject(new Error('Error de red'))
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
			reject(error)
		}
	})
}