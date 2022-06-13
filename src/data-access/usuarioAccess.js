import { handleError, processResponse } from "./accessUtils"

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
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
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
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}