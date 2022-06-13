import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Navbar } from '../Login/LoginElements'
import { FaBars } from 'react-icons/fa'

const padding = '28px';
const paddingMovil = '10px';

export const Carrito = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	text-decoration: none;
	gap: 4px;
	padding-right: 16px;
`

export const HomeContent = styled.div`
height: 100%;
	display: flex;
	flex-direction: column;
`

export const HomeBody = styled.div`
	padding: ${padding};

	@media screen and (max-width: 768px) {
		padding: ${paddingMovil};
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
	margin-left: -${padding};
	padding-left: ${padding};
	margin-right: -${padding};
	padding-right: ${padding};

	&::-webkit-scrollbar{
		height: 0;
		opacity: 0;
	}

	@media screen and (max-width: 768px) {
		padding-left: ${paddingMovil};
		margin-left: -${paddingMovil};
		padding-right: ${paddingMovil};
		margin-right: -${paddingMovil};
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
	background-color: ${({ color }) => (color)};
	overflow: hidden;
	cursor: pointer;
	transition: 0.5s;

	&:hover {
		transform: scale(95%);
	}

	&:active {
		transform: scale(90%);
	}

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
	line-height: 17px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
	padding: 15px;
	margin-top: auto;
	margin-bottom: auto;
	color: white;

	@media screen and (max-width: 768px) {
		font-size: 13px;
		line-height: 14px;
		gap: 3px;
		padding: 7px;
	}
`

export const NombrePlatillo = styled.p`
	white-space: nowrap;
	margin: 0;

	@media screen and (max-width: 768px) {
		line-height: 14px;
	}
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

export const NavegationBar = styled(Navbar)`
	justify-content: space-between;
	user-select: none;
`
export const BurguerButton = styled(FaBars)`
	padding-left: 16px;
	cursor: pointer;
`

export const DivSpinner = styled.div`
	display: flex;
	justify-content: center;
`