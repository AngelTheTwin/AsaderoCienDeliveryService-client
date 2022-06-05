import styled from "styled-components"

export const Tarjeta = styled.div`
    width: 60%;
	height: fit-content;
    background-color: #222222;
    border-radius: 5%;

	@media screen and (max-width: 768px) {
		width: 80%;
	}
`

export const Title = styled.h1`
	margin: 0;
    padding: 5%;
    text-align:center;
    font-family: 'Secular one';
`

export const Img = styled.img`
    border-radius: 50%;
    max-width: 13em;
	max-height: 13em;
    position: absolute;
    top: -6.5em;

	@media screen and (max-width: 768px) {
		max-width: 10em;
		max-height: 10em;
		top: -5em;
	}
`

export const Comentario = styled.p`
    margin-top: 10em;
    margin-left: 5%;
    margin-right: 5%;
    color: #FFFF;
    font-size: 90%;
    font-family: 'ABeeZee';
`

export const Nombre = styled.p`
    margin-top: 15%;
    margin-left: 5%;
    margin-right: 5%;
    color: #FFFF;
    font-size: 70%;
    font-family: 'ABeeZee';
`