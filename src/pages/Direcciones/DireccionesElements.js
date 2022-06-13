import styled from 'styled-components'

export const DireccionesContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 16px;
`

export const GridDirecciones = styled.div`
	display: grid;
	width: 100%;
    gap: 32px;
	align-items: center;
	justify-content: center;
	grid-template-columns: 1fr 1fr 1fr;

	@media screen and (max-width: 1504px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 1008px) {
		grid-template-columns: 1fr;
		gap:16px
	}
`

export const ContenedorDireccion = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const TarjetaAddDireccion = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	align-items: center;
	background-color: #222;
	height: 220px;
	border-radius: 15px;
	max-width: 480px;
	padding: 24px;
	padding-bottom: 20px;
	transition: 0.5s;
	font-size: 34px;
	cursor: pointer;

	&:hover {
		transform: scale(95%);
	}
	
	@media screen and (max-width: 768px) {
		padding-top: 10px;
		padding-bottom: 10px;
	}
`

export const P = styled.p`
	padding: 8px;
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 20px;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 18px;
		line-height: 18px;
	}
`