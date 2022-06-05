import styled from 'styled-components'
import { NavLink as _NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
	background: black;
	height: 80px;
	display: flex;
	justify-content: space-around;
	/* padding: 0 16px; */
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 999999;
`

export const Title = styled.h4`
	display: none;
	@media screen and (max-width: 768px) {
		font-family: 'ABeeZee';
		display: block;
		align-self: center;
		text-align: center;
		max-width: 70%;
		margin: 0;
	}
`

export const NavLink = styled(_NavLink)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;

	&.active{
		color: #FF0D0F;
		font-weight: 400;
	}
`

export const NavScrollLink = styled(Link)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;

	&.active{
		border-bottom: 3px solid red;
		margin-bottom: 3px;
	}
`

export const Bars = styled(FaBars)`
	display: none;
	color: #fff;

	@media screen and (max-width: 768px){
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-left: auto;
	margin-right: 16px;

	@media screen and (max-width: 768px){
		display: none;
	}
`

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavBtnLink = styled(_NavLink)`
	border-radius: 10px;
	background: #C40B0B;
	padding: 10px 22px;
	color: white;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out; 
	text-decoration: none;

	&:hover{
		transition: all 0.2s ease-in-out;
		background: white;
		color: #C40B0B;
	}
`