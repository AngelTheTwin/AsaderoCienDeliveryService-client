import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

export const Covid19Content = styled.div`
	height: 100%;
	font-family: 'Secular one';
	margin: 0;
	top: auto;
	width: 100%;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const Navbar = styled.nav`
	font-family: 'ABeeZee';
	top: 0;
	background-color: black;
	width: 100%;
	position: fixed;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	height: 70px;
	z-index: 999;
`

export const BackButton = styled(NavLink)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0;
	position: fixed;
	margin-right: 95%;
`

export const BackIcon = styled(BiArrowBack)`
	font-size: large;
	font-weight: bold;
`

export const Title = styled.h4`
	margin: 0;
`

export const AnimationContent = styled.div`
	width: 30%;

	@media screen and (max-width: 768px) {
        width: 60%;
	}
`

export const AnimatedIcon = styled.div`
	width: 20%;

	@media screen and (max-width: 768px) {
        width: 30%;
	}
`

export const MessageContent = styled.div`
	width: 65%;

	@media screen and (max-width: 768px) {
        width: 80%;
	}
`
export const MessageTitle = styled.h1`
	font-style: bold;
`

export const Subtitle = styled.h2`
`

export const Message = styled.p`
	font-family: 'ABeeZee';
	font-style: normal;
	padding-bottom: 10%;

	@media screen and (max-width: 768px) {
        padding-bottom: 15%;
	}
`