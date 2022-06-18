import { sha256 } from 'hash.js'

export const stringToHash = (string) => {
	return sha256().update(string).digest('hex')
}