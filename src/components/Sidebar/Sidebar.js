import React from 'react'
import{
    Sidebar,
    Li,
    User,
    Nombre,
}from "./SidebarElements"

const Sidebar = () =>{
    
    return(
        <Sidebar>
            <User>
                <Nombre>Daniel García Morales</Nombre>
            </User>
            <Li>Tus pedidos</Li>
            <Li>COVID-19: Centro de Seguridad</Li>
            <Li>Métodos de pago</Li>
            <Li>Direcciones de entrega</Li>
            <Li>Sucursales</Li>
        </Sidebar>
    )
}

export default Sidebar