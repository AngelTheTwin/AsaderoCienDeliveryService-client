import React, { useRef } from 'react'
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
	LogOutIcon
}from "./SidebarMenuElements"
import { useNavigate } from 'react-router-dom'

const SidebarMenu = ({estado}) =>{

    const navigate = useNavigate()
	const usuario = useRef(JSON.parse(localStorage.getItem('usuario')))

	const logOut = () => {
		navigate('/')
		localStorage.clear()
		sessionStorage.clear()
	}

    return (
		<>
        {estado &&
			<SidebarContent>
				<BodySidebar>

					<Section>
						<Li>
							<Link>{usuario.current.nombre}</Link>
							<UserIcon/>
						</Li>
					</Section>

					<Section>
						<Li id="buttonPedidos" onClick={() => {navigate('/pedidos')}}>
							<Link>Tus pedidos</Link>
							<ReceiptIcon/>
						</Li>
						
						<Li id="buttonMetodosPago" onClick={() => navigate("/paymentMethod")}>
							<Link>Métodos de pago</Link>
							<PaymentIcon/>
						</Li>

						<Li id="buttonDirecciones" onClick={() => navigate('/direcciones')}>
							<Link>Direcciones de entrega</Link>
							<PinUser/>
						</Li>
					</Section>

					<Section>
						<Li id="buttonCovid" onClick={() => navigate("/covid19")}>
							<Link>COVID-19: Centro de seguridad</Link>
							<SurgicalMask/>
						</Li>
					</Section>

					<Section onClick={logOut}>
						<Li id="buttonCerrarSesion">
							<Link>Cerrar Sesion</Link>
							<LogOutIcon />
						</Li>
					</Section>
					
				</BodySidebar>
			</SidebarContent>
		}
		</>
    )
}

export default SidebarMenu