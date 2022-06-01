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

export default function DropDownMenu( props ) {
	return (
		<DropdownContainer isOpen={props.isOpen} onClick={props.toggle} >
			<Icon>
				<CloseIcon />
			</Icon>
			<DropdownWrapper >
				<DropdownLinksMenu >
					<DropdownLink to="/" >Inicio</DropdownLink>
					<DropdownLink to="/testimonios" >Testimonios</DropdownLink>
					<DropdownLink to="/informacion" >Información</DropdownLink>
				</DropdownLinksMenu>
				<DropdownBtnWrap >
					<DropdownRoute to="/login" >Login</DropdownRoute>
				</DropdownBtnWrap>
			</DropdownWrapper>
		</DropdownContainer>
	)
}