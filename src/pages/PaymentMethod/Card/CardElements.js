import styled from 'styled-components'

export const CardContent = styled.div`
    background-color: #222222;
	display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    border-radius: 20px;
    width: 90%;
    aspect-ratio: 16/9;
    align-self: center;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 100%;
		max-width: 100%;
        margin: 0;
	}
`

export const Plus = styled.div`
    color: #FFFF;
	font-size: 400%;
	font-family: 'Secular one';
`

export const Text = styled.div`
    color: #FFFF;
	font-size: 100%;
	font-family: 'Secular one';
    margin-bottom: 6%;
`