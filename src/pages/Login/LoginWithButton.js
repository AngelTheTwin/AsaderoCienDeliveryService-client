import React, { useState } from 'react';
import { Icon, LoginButton } from './LoginElements';

export function LoginWithButton({ variante }) {
	const variantes = {
		default: {
			color: 'gray',
			nombre: 'Default',
			img: '',
			imgHover: '',
		},
		facebook: {
			color: '#3B5998',
			nombre: 'Facebook',
			img: require('../../assets/facebook-icon.png'),
			imgHover: require('../../assets/facebook-icon-hover.png')
		},
		google: {
			color: '#C62D2D',
			nombre: 'Google',
			img: require('../../assets/google-icon.png'),
			imgHover: require('../../assets/google-icon-hover.png')
		},
		apple: {
			color: '#2E2C36',
			nombre: 'Apple',
			img: require('../../assets/apple-icon.png'),
			imgHover: require('../../assets/apple-icon-hover.png')
		}
	};
	variante = variantes.hasOwnProperty(variante) ? variante : 'default';
	const [icono, setIcono] = useState(variantes[variante].img);
	return (
		<LoginButton
			color={variantes[variante].color}
			onMouseEnter={() => {
				setIcono(variantes[variante].imgHover);
			}}
			onMouseLeave={() => {
				setIcono(variantes[variante].img);
			}}
		>
			<Icon src={icono} />
			Continuar con {variantes[variante].nombre}
		</LoginButton>
	);
}
