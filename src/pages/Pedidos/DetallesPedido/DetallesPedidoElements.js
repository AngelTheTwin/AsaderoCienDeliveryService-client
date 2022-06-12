import styled from 'styled-components'

export const ContenidoDetallesPedido = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		padding-top: 16px;
	}
`

export const FlexBox = styled.div`
	display: flex;
	justify-content: space-between;
`
export const P = styled.p`
	font-family: 'ABeeZee';
	padding-left: 16px;
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`

export const NombrePlatillo = styled(P)`
	width: 100%;
`

export const Precio = styled(P)`
	border-left: solid 2px white;
	min-width: 80px;
`