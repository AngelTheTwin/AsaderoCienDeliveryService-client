import styled from 'styled-components'

export const PedidoRepartidorContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`

export const TarjetaPedido = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	background-color: #222;
	height: 220px;
	border-radius: 15px;
	max-width: 480px;
	padding-top: 20px;
	padding-bottom: 20px;
	transition: 0.5s;
	font-size: 34px;
	padding: 24px;
	gap: 16px;
	cursor: pointer;

	&:hover {
		transform: scale(95%);
	}

	&:active {
		transform: scale(90%);
	}
	
	@media screen and (max-width: 768px) {
		padding-bottom: 10px;
	}
`

export const InfoPedidoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	gap: 16px;
`

export const P = styled.p`
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 500;
	font-size: medium;
	line-height: 18px;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: medium;
		line-height: 14px;
	}
`

export const Consumidor = styled(P)`
	font-size: x-large;
	padding-bottom: 8px;
	padding-top: 6px;

	@media screen and (max-width: 768px) {
		font-size: large;
		padding-top: 8px;
	}
`

export const PinContainer = styled.div`
	display: flex;
	font-size: 64px;
	width: fit-content;
	height: 100%;
	transition: 0.5s;
`
