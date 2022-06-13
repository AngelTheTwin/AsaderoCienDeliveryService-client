import styled from 'styled-components'

export const PaymentFormContent = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
    padding-top: 16px;
`


export const TextField = styled.input.attrs({
})`
	width: 96%;
	font-size: 16px;
	margin-left: 5px;
	background-color: black;
	padding: 8px;
	padding-bottom: 8px;
	border-radius: 10px;
	color: white;

    @media screen and (max-width: 768px) {
		width: 120%;
	}
`

export const FormCard = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 16px;
`

export const FormCardRow = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
    gap: 16px;

    @media screen and (max-width: 768px) {
		flex-direction: column;
	}
`

export const ButtonEliminarTarjeta = styled.div`
    background-color: #3F3F3F;
	display: flex;
	align-items: center;
	justify-content: center;
    border-radius: 20px;
    width: 100%;
    height: 36px;
	transition: 0.5s;

	&:hover {
		color: #3F3F3F;
		background-color: white;
	}

	&:active {
		transition: 0.1s;
		transform: scaleX(90%) scaleY(94%);
	}
`

export const ButtonGuardarTarjeta = styled.div`
    background-color: #C40B0B;
	display: flex;
	align-items: center;
	justify-content: center;
    border-radius: 20px;
    width: 100%;
    height: 36px;
	transition: 0.5s;

	&:hover {
		color: #C40B0B;
		background-color: white;
	}

	&:active {
		transition: 0.1s;
		transform: scaleX(90%) scaleY(94%);
	}
`