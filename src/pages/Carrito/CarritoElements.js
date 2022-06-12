import styled from 'styled-components'

export const ButtonRegresar = styled.div`
	position: fixed;
	left: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	cursor: pointer;
`

export const CarritoContent = styled.div`
	display: flex;
	width: 100%;
`

export const CarritoBody = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`
export const Grid = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	width: 100%;
	max-width: 1000px;
	gap: 16px;
	padding: 16px;

	@media screen and (max-width: 950px) {
		grid-template-columns: 1fr;
	}
`

export const PlatillosContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export const PlatilloTarjeta = styled.div`
	background-color: #222222;
	border-radius: 15px;
	overflow: hidden;
	height: 230px;

	@media screen and (max-width: 768px) {
		min-width: 0;
	}
`

export const TarjetaPedido = styled.div`
/* position: sticky; */
	background-color: #222;
	padding: 16px;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: max-content;
`

export const TarjetaTitle = styled.p`
	font-family: 'ABeeZee';
	font-size: 16px;
	font-style: 'normal';
	font-weight: 500px;
	line-height: 20px;
	margin: 0;
`

export const Subtotal = styled.p`
	font-family: 'ABeeZee';
	font-size: 18px;
	font-style: 'normal';
	font-weight: 500px;
	line-height: 20px;
`

export const ButtonPago = styled.button`
	background-color: #C40B0B;
	border: none;
	text-decoration: none;
	padding: 10px;
	border-radius: 15px;
	color: white;
	user-select: none;

	font-family: 'ABeeZee';
	font-size: 14px;
	font-style: 'normal';
	font-weight: 500px;
	line-height: 14px;

	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover {
		color: #C40B0B;
		background-color: white;
	}

	&:active {
		transition: 0.1s;
		transform: scaleX(90%) scaleY(94%);
	}
`

export const AnimationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`

export const AnimationContent = styled.div`
	width: 30%;
	@media screen and (max-width: 768px) {
        width: 60%;
	}
`