const HOST = process.env.REACT_APP_HOST

export const getAllProductosGroupedByCategoria = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const url = `http://${HOST}:8080/categoria/getAllConProductos`
			const response  = await fetch(url)
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
			const productos = await response.json()
			resolve(productos)
		} catch (error) {
			console.error(error)
			reject({
				mensaje: 'Error de red.'
			})
		}
	})
}