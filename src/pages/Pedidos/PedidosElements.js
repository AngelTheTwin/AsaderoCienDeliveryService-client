import styled from 'styled-components'

export const PedidosContent = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
`

export const GridPedidos = styled.div`
	display: grid;
	width: 100%;
    gap: 32px;
    padding: 16px;
	padding-left: 8px;
	padding-right: 8px;
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

export const AnimationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`

export const AnimationContent = styled.div`
	width: 40%;
	@media screen and (max-width: 768px) {
        width: 60%;
	}
`