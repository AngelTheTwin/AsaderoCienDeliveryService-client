import React from 'react'
import styled from 'styled-components'
import { Nav, NavBtn, Bars, NavBtnLink, NavMenu, NavLink } from './NavBarElements'



export default function Navbar() {
	return (
		<div>
			<Nav >
				{/* <Logo /> */}
				<Bars />
				<NavMenu>
					<NavLink to='/home'>
						Inicio
					</NavLink>
					<NavLink to='/testimonios'>
						Testimonios
					</NavLink>
					<NavLink to='/informacion'>
						Información
					</NavLink>
					<NavBtnLink to='/login'>
						Iniciar Sesión
					</NavBtnLink>
				</NavMenu>
			</Nav>
		</div>
	)
}



function Logo() {

	const ImgLogo = styled.img`
		aspect-ratio: 1 / 1;
		height: 50px;
		margin-right: 10px;
	`

	const TxtLogo = styled.p`
		color: white;
		font-weight: 600;
		font-size: '18px';

		@media screen and (max-width: 768px) {
			display: none;
		}
	`

	const LogoContainer = styled.div`
		display: flex;
		position: relative;
		margin-right: auto;
	`
	const imgLogo = require('../../assets/LOGO-asadero-cien-blanco.png')

	return (
		<LogoContainer>
			<ImgLogo
				src={imgLogo}
			/>
			<TxtLogo>AsaderoCien</TxtLogo>
		</LogoContainer>
	)
}
