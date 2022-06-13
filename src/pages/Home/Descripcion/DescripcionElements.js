import styled from 'styled-components'

export const DescripcionContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 16px;
	gap: 14px;

	@media screen and (max-width: 768px) {
		gap: 8px;
	}
`

export const TextDescripcion = styled.p`
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	max-width: 90%;

	@media screen and (max-width: 768px) {
		font-size: 14px;
		line-height: 16px;
	}
`

export const H3 = styled.h3`
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 24px;
	margin: 0;
	color: #D4891B;

	@media screen and (max-width: 768px) {
		font-size: 18px;
		line-height: 16px;
	}
`

export const TextArea = styled.textarea.attrs({
	placeholder: 'Agregar una nota (salsa adicional, sin cebolla, etc.)'
})`
	height: 120px;
	width: 300px;
	background-color: white;
	color: #4E4E4E;
	border-radius: 10px;
	border: none;
	font-size: 16px;
	padding: 18px;

	&:focus {
		-webkit-appearance: none;
		border: 3px solid #C40C0C;
		outline:0px !important;
	}

	@media screen and (max-width: 768px) {
		height: 80px;
		max-width: 80%;
		font-size: 12px;
	}
`
export const CantidadContainer = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 15px;
	user-select: none;

	@media screen and (max-width: 768px) {
		margin-top: 8px;
	}
`
export const ButtonCantidad = styled.p`
	height: 45px;
	width: 45px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: #4E4E4E;
	border-radius: 50px;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	margin:0;
	text-align: center;

	&:hover {
		background-color: #C40C0C;
		height: 42px;
		width: 42px;
		transition: 0.2s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		height: 40px;
		width: 40px;
	}
`
export const Cantidad = styled(ButtonCantidad)`
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 500;
	font-size: 21px;
	line-height: 22px;

	background-color: white;
	color: #4E4E4E;
	cursor: default;
	height: 60px;
	width: 60px;

	&:hover {
		background-color: white;
		height: 60px;
		width: 60px;
		transition: 0.2s ease-in-out;
	}

	@media screen and (max-width: 768px) {
		height: 50px;
		width: 50px;

		&:hover {
			background-color: white;
			height: 50px;
			width: 50px;
			transition: 0.2s ease-in-out;
		}
	}
`

export const ButtonAgregar = styled.button`
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;

	padding: 10px;
	padding-left: 16px;
	padding-right: 16px;
	border-radius: 50px;
	background-color: #C40C0C;
	color: white;
	border: none;
	transition: 0.5s;

	&:hover {
		color: #C40C0C;
		background-color: white;
	}

	&:active {
		transition: 0.1s;
		transform: scaleX(90%) scaleY(94%);
	}

	&:disabled {
		background-color: gray;
		transition: 0.2s ease-in-out;
	}
`