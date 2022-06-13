export const processResponse = async (response, reject, resolve) => {
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
	let data = await response.json()
	resolve(data)
}

export const handleError = (error, reject) => {
	console.error(error)
	reject({
		mensaje: 'Error de red.'
	})
}