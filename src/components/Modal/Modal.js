import React from "react"

import {
	Overlay,
	ModalContent,
	HeaderModal,
	ButtonCerrar,
	CloseIcon,
	BodyModal,
} from './ModalElements'

const Modal = ({ children, estado, cambiarEstado, title }) => {
	return (
		<>
			{estado &&
				<Overlay>
					<ModalContent>
						<HeaderModal>
							<h3>{title}</h3>
							<ButtonCerrar onClick={() => cambiarEstado(false)}>
								<CloseIcon />
							</ButtonCerrar>
						</HeaderModal>
						<BodyModal>
							{children}
						</BodyModal>
					</ModalContent>
				</Overlay>
			}
		</>
	)
}

export default Modal