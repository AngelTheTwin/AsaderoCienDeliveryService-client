import React from 'react'

import {
	CardContent,
	Plus,
	Text,
}from './CardElements'

export const Card = () => {
	return (
        <CardContent>
            <Plus>+</Plus>
            <Text>Agregar nueva tarjeta</Text>
        </CardContent>
    )
}
