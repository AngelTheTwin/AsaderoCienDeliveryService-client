import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

export const DropdownContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #0d0d0d;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
	color: #fff;
`

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`
export const DropdownWrapper = styled.div`
	color: #fff;
`

export const DropdownLink = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #fff;
	cursor: pointer;

	&:hover{
		color: #C40B0B;
		transition: 0.2s ease-in-out;
	}
`

export const DropdownBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`

export const DropdownRoute = styled(NavLink)`
	border-radius: 50px;
	background: #C40B0B;
	white-space: nowrap;
	padding: 16px 64px;
	color: white;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #010606;
	}
`

export const DropdownLinksMenu = styled.ul`
	padding: 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 768px){
		 grid-template-rows: repeat(6, 60px);
	}
`