import { handleError, processResponse } from "./accessUtils"

const HOST = process.env.REACT_APP_HOST

export const getAllProductosGroupedByCategoria = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const url = `http://${HOST}:8080/categoria/getAllConProductos`
			const response  = await fetch(url)
			processResponse(response, reject, resolve)
		} catch (error) {
			handleError(error, reject)
		}
	})
}