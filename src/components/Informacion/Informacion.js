import React from "react"

import {
	Grid,
	Img,
	ImgContainer,
	ContactContainer,
	Contact,
	Address,
	Phone,
} from './InformacionElements'

export default function Informacion() {

	return (
		<Grid id="informacion">
			<ImgContainer>
				<Img />
			</ImgContainer>

			<ContactContainer>
				<Contact>
					<Address>Tejar</Address>
					<Phone>22 83 57 30 14</Phone>
				</Contact>

				<Contact>
					<Address>Zaragoza</Address>
					<Phone>22 83 57 30 14</Phone>
				</Contact>

				<Contact>
					<Address>Américas Xalapa</Address>
					<Phone>22 83 57 30 14</Phone>
				</Contact>

				<Contact>
					<Address>Teatro</Address>
					<Phone>22 83 57 30 14</Phone>
				</Contact>

				<Contact>
					<Address>Monte Magno</Address>
					<Phone>22 83 57 30 14</Phone>
				</Contact>

				<Contact>
					<Address>Américas Veracruz</Address>
					<Phone>22 83 57 30 14</Phone>
				</Contact>

				<Contact>
					<Address>Mtros. Veracruzanos</Address>
					<Phone>22 83 57 30 14</Phone>
				</Contact>

				<Contact>
					<Address>Fuego y Esencia</Address>
					<Phone>22 83 57 30 14</Phone>
				</Contact>

				<Contact>
					<Address>El Dorado Veracruz</Address>
					<Phone>22 83 57 30 14</Phone>
				</Contact>
			</ContactContainer>
		</Grid>
	)
}