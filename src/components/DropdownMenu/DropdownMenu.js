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
	return (
		<DropdownContainer isOpen={props.isOpen} onClick={props.toggle} >
			<Icon>
				<CloseIcon />
			</Icon>
			<DropdownWrapper >
				<DropdownLinksMenu >
					<DropdownLink
						to="inicio"
						activeClass='active'
						spy={true}
						smooth={true}
						offset={-80}
						duration={500}
						onClick={props.toggle}
					>Inicio</DropdownLink>
					<DropdownLink
						to="testimonios"
						activeClass='active'
						spy={true}
						smooth={true}
						offset={-80}
						duration={500}
						onClick={props.toggle}
					>Testimonios</DropdownLink>
					<DropdownLink
						to="informacion"
						activeClass='active'
						spy={true}
						smooth={true}
						offset={-80}
						duration={500}
						onClick={props.toggle}
					>Información</DropdownLink>
				</DropdownLinksMenu>
				<DropdownBtnWrap >
					<DropdownRoute to="/login" >Login</DropdownRoute>
				</DropdownBtnWrap>
			</DropdownWrapper>
		</DropdownContainer>
	)
}