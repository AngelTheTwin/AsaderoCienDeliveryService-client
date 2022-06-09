import React, {useState} from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import {
    TextField,
    PaymentFormContent,
    FormCard,
    FormCardRow,
    ButtonEliminarTarjeta,
    ButtonGuardarTarjeta
}from './PaymentFormElements'

const PaymentForm = () => {

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        focus: ""
    })

    const hadleInputChange = (event) =>{
        setState({
            ...state,
            [event.target.id] : event.target.value
        })
    }


    const hadleFocusChange = (event) =>{
        setState({
            ...state,
            focus : event.target.id
        })
    }


    return(
        <PaymentFormContent>
            <Cards
                number={state.number}
                name={state.name}
                expiry={state.expiry}
                cvc={state.cvc}
                focused={state.focus}
            />
            
            <FormCard>
                <TextField
                    placeholder='Número de tarjeta'
                    id="number"
                    maxLength={"16"}
                    onChange={hadleInputChange}
                    onFocus={hadleFocusChange}
                />

                <TextField
                    placeholder='Nombre del titular'
                    id="name"
                    maxLength={"30"}
                    onChange={hadleInputChange}
                    onFocus={hadleFocusChange}
                />

                <FormCardRow>
                    <TextField
                        placeholder='Fecha de expiración'
                        id="expiry"
                        maxLength={"4"}
                        onChange={hadleInputChange}
                        onFocus={hadleFocusChange}
                    />

                    <TextField
                        placeholder='CVV'
                        id="cvc"
                        maxLength={"4"}
                        onChange={hadleInputChange}
                        onFocus={hadleFocusChange}
                    />
                </FormCardRow>

                <ButtonEliminarTarjeta>Eliminar tarjeta</ButtonEliminarTarjeta>

                <ButtonGuardarTarjeta>Guardar Tarjeta</ButtonGuardarTarjeta>
            </FormCard>

        </PaymentFormContent>
    )     
}

export default PaymentForm