import React from 'react'
import { Tarjeta } from './TestimoniosElements'
import { Img } from './TestimoniosElements'
import { Comentario } from './TestimoniosElements'
import { Nombre } from './TestimoniosElements'
import { Title } from './TestimoniosElements'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperSlide.css';
// import required modules
import { Pagination } from 'swiper';

export default function Testimonios() {

	return (
		<div id='testimonios'>
			<Title>Nuestra pasión, tu satisfacción...</Title>
			<Swiper
				pagination={{ dynamicBullets: true, }}
				modules={[Pagination]}
			>
				{testimonios.map(testimonio => {
					return (
						<SwiperSlide key={testimonio.nombre}>
							<Tarjeta>
								<Comentario> {testimonio.comentario} </Comentario>
								<Nombre> {testimonio.nombre} </Nombre>
							</Tarjeta>
							<Img src={testimonio.imagen} />
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

const testimonios = [
	{
		nombre: 'Daniel García Morales',
		comentario: '“Un lugar muy agradable, con muy buenos platillos. Variedad de cortes, ensaladas y hasta pizzas al horno. Hay también desayuno buffet. El personal es muy atento y amable, siempre al pendiente de los clientes. Definitivamente es recomendable”.',
		imagen: require('../../assets/Daniel.jpg')
	},
	{
		nombre: 'Angel de Jesús Sánchez Morales',
		comentario: '“Somos clientes asiduos, mis papás y yo, de la sucursal de El Dorado. El servicio es excelente, todo se encuentra en orden y siempre es un placer volver”.',
		imagen: require('../../assets/Angel.jpg'),
	},
	{
		nombre: 'José Damián Mendoza Carmona',
		comentario: '“Excelentes carnes, hamburguesas y el inmejorable trato en renta de sus salones”.',
		imagen: require('../../assets/Damian.jpg')
	},
	{
		nombre: 'Abner Jeffrey Tapia Cruz',
		comentario: '“Muy rico y buen servicio :D”.',
		imagen: require('../../assets/Abner.jpg')
	},
]

