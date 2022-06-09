import React, { useState } from 'react'
import Modal from '../../../components/Modal/Modal'
import PaymentForm from '../PaymentForm/PaymentForm'
import Cards from 'react-credit-cards'


export const Card = () => {

    const [estadoModal, cambiarEstadoModal] = useState(false)

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

	return (
        <>
            <Cards
                number={state.number}
                name={state.name}
                expiry={state.expiry}
                cvc={state.cvc}
                focused={state.focus}
            />

            <Modal 
                estado={estadoModal} 
                cambiarEstado={cambiarEstadoModal}
                title="Modificar tarjeta">

                <PaymentForm/>
            </Modal>
        </>

    )
}
