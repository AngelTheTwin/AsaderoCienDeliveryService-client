import React from "react"
import {Tarjeta} from "./TestimoniosElements"
import {Img} from "./TestimoniosElements"
import {Comentario} from "./TestimoniosElements"
import {Nombre} from "./TestimoniosElements"
import {Title} from "./TestimoniosElements"


import imagenDaniel from "../../assets/Daniel.jpg"
import imagenAngel from "../../assets/Angel.jpg"
import imagenDamian from "../../assets/Damian.jpg"
import imagenAbner from "../../assets/Abner.jpg"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiperSlide.css";
// import required modules
import { Pagination } from "swiper";

export default function Testimonios() {

	return (
		<div id="testimonios">
		<Title>Nuestra pasión, tu satisfacción...</Title>
		<Swiper        
			pagination={{dynamicBullets: true,}}
        	modules={[Pagination]}>

		  	<SwiperSlide>
				<Tarjeta>
					<Comentario>“Un lugar muy agradable, con muy buenos platillos. Variedad de cortes, ensaladas y hasta pizzas al horno. Hay también desayuno buffet. El personal es muy atento y amable, siempre al pendiente de los clientes. Definitivamente es recomendable”.</Comentario>
					<Nombre>Daniel García Morales</Nombre>
				</Tarjeta> 
				<Img src={imagenDaniel}/>
		  	</SwiperSlide>

		  	<SwiperSlide>
				<Tarjeta>
					<Comentario>“Un lugar muy agradable, con muy buenos platillos. Variedad de cortes, ensaladas y hasta pizzas al horno. Hay también desayuno buffet. El personal es muy atento y amable, siempre al pendiente de los clientes. Definitivamente es recomendable”.</Comentario>
					<Nombre>Angel de Jesús Sánchez Morales</Nombre>
					</Tarjeta> 
				<Img src={imagenAngel}/>
			</SwiperSlide>

			<SwiperSlide>
				<Tarjeta>
					<Comentario>“Un lugar muy agradable, con muy buenos platillos. Variedad de cortes, ensaladas y hasta pizzas al horno. Hay también desayuno buffet. El personal es muy atento y amable, siempre al pendiente de los clientes. Definitivamente es recomendable”.</Comentario>
					<Nombre>José Damián Mendoza Carmona</Nombre>
					</Tarjeta> 
				<Img src={imagenDamian}/>
			</SwiperSlide>

			<SwiperSlide>
				<Tarjeta>
					<Comentario>“Un lugar muy agradable, con muy buenos platillos. Variedad de cortes, ensaladas y hasta pizzas al horno. Hay también desayuno buffet. El personal es muy atento y amable, siempre al pendiente de los clientes. Definitivamente es recomendable”.</Comentario>
					<Nombre>Abner Jeffrey Tapia Cruz</Nombre>
				</Tarjeta> 
				<Img src={imagenAbner}/>
			</SwiperSlide>

		</Swiper>
	  </div>
	)
}