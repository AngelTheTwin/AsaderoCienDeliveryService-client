import styled from 'styled-components'

export const HomeContent = styled.div`
	display: flex;
`

export const HomeBody = styled.div`
	padding: 28px;

	@media screen and (max-width: 768px) {
		padding: 10px;
	}
`

export const CategoriasContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

export const Encabezado = styled.h1`
	font-family: 'Secular One';
	font-style: normal;
	font-weight: 400;
	font-size: 50px;
	line-height: 73px;
	margin: 0;
	margin-bottom: 24px;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 28px;
		line-height: 35px;
	}
`

export const TituloCategoria = styled.h1`
	margin: 0;
	font-family: 'Secular One';
	font-style: normal;
	font-weight: 400;
	font-size: 50px;
	line-height: 73px;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 24px;
		line-height: 35px;
	}
`

export const DescripciónCategoria = styled.p`
	margin: 0;
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #C37E17;

	margin-bottom: 20px;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 16px;
		line-height: 18px;
	}
`

export const PlatillosContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 24px;
	overflow-x: scroll;
	padding-bottom: 10px;

	&::-webkit-scrollbar{
		height: 0;
		opacity: 0;
	}
`

export const PlatilloContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 250px;
	width: 350px;
	min-height: 250px;
	min-width: 350px;
	border-radius: 15px;
	background-color: #222222;
	overflow: hidden;

	@media screen and (max-width: 768px) {
		height: 200px;
		min-height: 200px;
		width: 280px;
		min-width: 280px;
	}
`

export const ImgPlatillo = styled.img.attrs({
	alt: 'comida'
})`
	height: 180px;
	width: 100%;
	object-fit: cover;

	@media screen and (max-width: 768px) {
		height: 144px;
	}
`

export const InfoPlatilloContainer = styled.div`
	font-family: 'ABeeZee';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
	padding: 15px;
	margin-top: auto;
	margin-bottom: auto;

	@media screen and (max-width: 768px) {
		font-size: 13px;
		line-height: 14px;
		gap: 3px;
		padding: 7px;
	}
`

export const NombrePlatillo = styled.p`
	margin: 0;
`

export const PrecioPlatillo = styled.p`
	margin: 0;
	font-size: 14px;
	line-height: 17px;

	@media screen and (max-width: 768px) {
		font-size: 12px;
		line-height: 13px;
	}
`