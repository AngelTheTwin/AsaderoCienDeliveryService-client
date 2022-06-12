import React from 'react'
import{
    SidebarContent,
    BodySidebar,
    Section,
    Link,
    Li,
    UserIcon,
    PaymentIcon,
    ReceiptIcon,
    PinUser,
    SurgicalMask,
    PinMap
}from "./SidebarMenuElements"

import { useNavigate } from 'react-router-dom'

const SidebarMenu = ({estado, nombreUsuario}) =>{

    const navigate = useNavigate()

    return(
		<>
        {estado &&
                <SidebarContent>
                    <BodySidebar>

                        <Section>
                            <Li>
                                <Link>{nombreUsuario}</Link>
                                <UserIcon/>
                            </Li>
                        </Section>

                        <Section>
                            <Li onClick={() => {navigate('/pedidos')}}>
                                <Link>Tus pedidos</Link>
                                <ReceiptIcon/>
                            </Li>
                            
                            <Li onClick={() => navigate("/paymentMethod")}>
                                <Link>Métodos de pago</Link>
                                <PaymentIcon/>
                            </Li>

                            <Li>
                                <Link>Direcciones de entrega</Link>
                                <PinUser/>
                            </Li>
                        </Section>

                        <Section>
                            <Li onClick={() => navigate("/covid19")}>
                                <Link>COVID-19: Centro de seguridad</Link>
                                <SurgicalMask/>
                            </Li>

                            <Li>
                                <Link>Sucursales</Link>
                                <PinMap/>
                            </Li>
                        </Section>
                        
                    </BodySidebar>
                </SidebarContent>
			}
		</>
    )
}

export default SidebarMenu