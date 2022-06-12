import styled from 'styled-components'
import { CantidadContainer } from '../../Home/Descripcion/DescripcionElements'

export const PlatilloContent = styled.div`
	display: flex;
	height: 100%;
`

export const ImgPlatillo = styled.img`
	height: 100%;
	min-width: 300px;
	object-fit: cover;
	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const InfoPlatillo = styled.div`
	padding: 16px;
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const NombrePlatillo = styled.p`
	font-family: 'ABeeZee';
	font-size: 24px;
	font-style: 'normal';
	font-weight: 500px;
	line-height: 26px;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 20px;
		line-height: 24px;
	}
`

export const Instrucciones = styled.p`
	font-family: 'ABeeZee';
	font-size: 14px;
	font-style: 'normal';
	font-weight: 500px;
	line-height: 22px;
`

export const CantidadBotones = styled(CantidadContainer)`
	margin-top: auto;

	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`

export const ButtonEliminar = styled.p`
	font-family: 'ABeeZee';
	font-size: 14px;	
	padding-bottom: 16px;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}

	&:hover {
		color: #C40B0B;
	}
`

export const Precio = styled.div`
	margin-left: auto;
	padding: 16px;
	font-family: 'ABeeZee';
	font-size: 16px;
	font-style: 'normal';
	font-weight: 500px;
	line-height: 22px;
	margin: 0;
	width: 100px;

	@media screen and (max-width: 768px) {
		position: relative;
		margin-top: auto;
		margin-bottom: auto;
	}
`