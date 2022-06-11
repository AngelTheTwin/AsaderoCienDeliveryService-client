import React from 'react'

import {
	Covid19Content,
    Navbar,
	BackButton,
	BackIcon,
	Title,
} from './Covid19Elements'

export const Covid19 = () => {
    
    return(
        <Covid19Content>
            <Navbar id="nav" >
                <BackButton to="/home">
                    <BackIcon />
                </BackButton>
                <Title >Asadero Cien - COVID-19: Centro de seguridad</Title>
            </Navbar>


        </Covid19Content>

    )
}