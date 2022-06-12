const HOST = process.env.REACT_APP_HOST

export const createPedido = (pedido) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(sessionStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/pedido/create`
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(pedido)
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