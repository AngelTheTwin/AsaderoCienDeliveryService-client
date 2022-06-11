import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'

import {
	Covid19Content,
    Navbar,
	BackButton,
	BackIcon,
	Title,
    AnimationContent,
    MessageContent,
    MessageTitle,
    Subtitle,
    Message,
    AnimatedIcon
} from './Covid19Elements'

export const Covid19 = () => {
    
    const earthAnimation = useRef(null)
    const deliveryAnimation = useRef(null)
    const covidAnimation = useRef(null)
    const maskAnimation = useRef(null)

    useEffect(() => {
        Lottie.loadAnimation({
            container: earthAnimation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/earth-mask.json')
        })

        Lottie.loadAnimation({
            container: deliveryAnimation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/delivery-service.json')
        })

        Lottie.loadAnimation({
            container: covidAnimation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/covid-19.json')
        })

        Lottie.loadAnimation({
            container: maskAnimation.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../assets/delivery-mask.json')
        })

    }, [])

    return(
        <Covid19Content>
            <Navbar id="nav" >
                <BackButton to="/home">
                    <BackIcon />
                </BackButton>
                <Title >Asadero Cien - COVID-19: Centro de seguridad</Title>
            </Navbar>

            <AnimationContent ref={earthAnimation}/>

            <MessageContent>
                <MessageTitle>Protección a la comunidad durante la situación COVID-19</MessageTitle>

                <Message>Trabajamos en estrecha colaboración con las autoridades de salud pública para brindar orientación sobre cómo protegerte y cómo proteger a los demás.</Message>
            
                <AnimatedIcon ref={deliveryAnimation}/>
                <Subtitle>Cuando el pedido llegue a tu puerta</Subtitle>
                <Message>Lávate las manos después de recibir tu pedido y antes de comer.</Message>

                <AnimatedIcon ref={covidAnimation}/>
                <Subtitle>Seguridad alimentaria general</Subtitle>
                <Message>Compartimos las mejores prácticas de las autoridades de salud pública con nuestros restaurantes y socios repartidores</Message>

                <AnimatedIcon ref={maskAnimation}/>
                <Subtitle>Ayudamos a los socios repartidores</Subtitle>
                <Message>Les incluimos el acceso a mascarillas y a asistencia financiera, de acuerdo con nuestra política de respuesta ante la situación de coronavirus.</Message>
            </MessageContent>

        </Covid19Content>

    )
}