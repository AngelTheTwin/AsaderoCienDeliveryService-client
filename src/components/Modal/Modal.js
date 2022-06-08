import React from "react"

import{
    Overlay,
    ModalContent,
    HeaderModal,
    ButtonCerrar,
	CloseIcon,
}from './ModalElements'

const Modal = ({children, estado, cambiarEstado, title}) => {
    return(
        <>
            {estado &&
                <Overlay>
                    <ModalContent>
                        <HeaderModal>
                            <h3>{title}</h3>
                        </HeaderModal>

                        <ButtonCerrar onClick={() => cambiarEstado(false)}>
							<CloseIcon />
						</ButtonCerrar>
						{children}
                    </ModalContent>
                </Overlay>
            }
        </> 
    )
}

export default Modal