import styled from 'styled-components'

export const DetallesPedidoRepartidorContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 8px 0;
	gap: 16px;
`

export const ContainerBotones = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 8px;
	gap: 16px;
`

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding: 8px 0;
	width: 50%;
	border-radius: 15px;
	transition: 0.5s;
	user-select: none;
	font-family: 'ABeeZee';

	&:active{
		transform: scale(90%);
	}
`

export const ButtonTomarPedido = styled(Button)`
	background-color: #C37E17;

	&:hover {
		background-color: white;
		color: #C37E17;
	}
`

export const ButtonEntregarPedido = styled(Button)`
	background-color: #17911B;

	&:hover {
		background-color: white;
		color: #17911B;
	}
`

export const ButtonCancelarPedido = styled(Button)`
	background-color: #C40B0B;

	&:hover {
		background-color: white;
		color: #C40B0B;
	}
`