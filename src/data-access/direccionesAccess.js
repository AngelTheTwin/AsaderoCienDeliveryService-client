import { handleError, processResponse } from "./accessUtils"

const HOST = process.env.REACT_APP_HOST

export const createDireccion = (direccion) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/direccion/create`
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(direccion)
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}

export const getAllDireccionesByUsuario = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/direccion/getAllByUsuario`
			const response = await fetch(url, {
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json'
				},
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}

export const updateDireccion = (direccion) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/direccion/update`
			const response = await fetch(url, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(direccion)
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}

export const deleteDireccion = (direccion) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/direccion/delete`
			const response = await fetch(url, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(direccion)
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}