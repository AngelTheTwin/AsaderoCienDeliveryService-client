import { handleError, processResponse } from "./accessUtils"

const HOST = process.env.REACT_APP_HOST

export const createPedido = (pedido) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/pedido/create`
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(pedido)
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}

export const updatePedido = (pedido) => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/pedido/update`
			const response = await fetch(url, {
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(pedido)
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}

export const getAllPedidosByUsuario = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/pedido/getAllByUsuario`
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}

export const getAllPedidosByRepartidor = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/pedido/getAllByRepartidor`
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}

export const getAllPedidos = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			const url = `http://${HOST}:8080/pedido/getAll`
			const response = await fetch(url, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${usuario.token}`,
					'Content-Type': 'application/json',
				},
			})
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}