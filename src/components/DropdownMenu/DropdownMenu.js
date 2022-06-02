import React from "react"
import {
	CloseIcon,
	DropdownBtnWrap,
	DropdownContainer,
	DropdownLink,
	DropdownLinksMenu,
	DropdownRoute,
	DropdownWrapper,
	Icon
} from "./DropdownMenuElements"

export default function DropDownMenu(props) {
	const dropDownLinkProps = {
		activeClass: 'active',
		spy: true,
		smooth: true,
		offset: -80,
		duration: 500,
		onClick: props.toggle,
	}

	return (
		<DropdownContainer isOpen={props.isOpen} onClick={props.toggle} >
			<Icon>
				<CloseIcon />
			</Icon>
			<DropdownWrapper >
				<DropdownLinksMenu >
					<DropdownLink
						to="inicio"
						{ ...dropDownLinkProps }
					>Inicio</DropdownLink>
					<DropdownLink
						to="testimonios"
						{ ...dropDownLinkProps }
					>Testimonios</DropdownLink>
					<DropdownLink
						to="informacion"
						{ ...dropDownLinkProps }
					>Información</DropdownLink>
				</DropdownLinksMenu>
				<DropdownBtnWrap >
					<DropdownRoute to="/login" >Login</DropdownRoute>
				</DropdownBtnWrap>
			</DropdownWrapper>
		</DropdownContainer>
	)
}