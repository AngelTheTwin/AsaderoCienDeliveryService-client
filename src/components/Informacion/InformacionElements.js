import styled from "styled-components"

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	height: 100%;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`

export const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 10%;
`

export const Img = styled.img.attrs({
	src: require('../../assets/logo-blanco.png')
})`
	width: 80%;
	align-self: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const ContactContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 150px 150px 150px;
	width: 100%;
	height: 100%;
	margin-top: 20%;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 100px 100px 100px 100px;
	}
`

export const Contact = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin-right: 20%;

	@media screen and (max-width: 768px) {
		margin-right: 0%;
	}
`

export const Address = styled.label`
	color: #FFFF;
	font-size: 100%;
	font-family: 'Secular one';
`

export const Phone = styled.label`
	color: #17911B;
	font-size: 100%;
	font-family: 'ABeeZee';
`