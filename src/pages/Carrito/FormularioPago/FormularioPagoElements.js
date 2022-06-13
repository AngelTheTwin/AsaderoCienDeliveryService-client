import styled from 'styled-components'

export const FormularioPagoContent = styled.div`
	display: flex;
	flex-direction: column;
`

export const P = styled.p`
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	width: 80%;
	align-self: center;

	@media screen and (max-width: 768px) {
		width: 95%;
	}
`

export const Select = styled.select`
	background-color: white;
	color: #222;
	height: 30px;
	width: 80%;
	align-self: center;

	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;

	@media screen and (max-width: 768px) {
		width: 95%;
	}
`

export const ButtonPagar = styled.div`
	display: flex;
	justify-content: center;
	background-color: #C40B0B;
	border-radius: 15px;
	padding: 8px;
	padding-left: 0;
	padding-right: 0;
	width: 80%;
	align-self: center;
	justify-content: center;
	transition: 0.2s ease-in-out;

	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	user-select: none;

	&:hover {
		background-color: white;
		color: #C40B0B;
	}

	&:active {
		transition: 0.1s;
		transform: scaleX(90%) scaleY(94%);
	}

	@media screen and (max-width: 768px) {
		width: 95%;
	}
`

export const SpinnerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`