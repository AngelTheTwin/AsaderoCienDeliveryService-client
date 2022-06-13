import styled from 'styled-components'

export const PedidoContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`

export const TarjetaPedido = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	align-items: center;
	background-color: #222;
	height: 220px;
	border-radius: 15px;
	max-width: 480px;
	padding-top: 20px;
	padding-bottom: 20px;
	transition: 0.5s;

	&:hover {
		transform: scale(95%);
	}
	
	@media screen and (max-width: 768px) {
		padding-top: 10px;
		padding-bottom: 10px;
	}
`

export const InfoPedido = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: fit-content;
	width: 100%;
`

export const P = styled.p`
	padding: 8px;
	padding-left: 32px;
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

export const Folio = styled(P)`
	margin-top: auto;
	font-size: 14px;
	line-height: 16px;
	opacity: 0.7;
`

export const DivButton = styled.div`
	display: flex;
	padding: 32px;
	justify-content: flex-end;
	align-items: center;
	@media screen and (max-width: 768px) {
		padding: 16px;
	}
`

export const ButtonDetalles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #C40B0B;
	padding: 10px;
	padding-left: 16px;
	padding-right: 16px;
	border-radius: 20px;
	width: fit-content;
	cursor: pointer;

	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	transition: 0.2s ease-in-out;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 14px;
		padding: 8px;
		padding-left: 16px;
		padding-right: 16px;
	}

	&:hover {
		color: #C40B0B;
		background-color: white;
	}

	&:active {
		transition: 0.1s;
		transform: scaleX(90%) scaleY(94%);
	}
`