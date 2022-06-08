import React from "react"

import{
    Overlay,
    ModalContent,
    HeaderModal,
    ButtonCerrar,
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

                        <ButtonCerrar onClick={() => cambiarEstado(false)}>X</ButtonCerrar>
                    </ModalContent>
                </Overlay>
            }
        </> 
    )
}

export default Modal