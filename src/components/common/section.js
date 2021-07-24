import styled from 'styled-components';
import {CGray} from './variables.js'

export const SSection=styled.div`
    position:relative;
    padding-top:80px;
    paddingBottom:40px;
    
    > h1 {
            font-family: 'Noto Serif JP', serif;
            font-weight: normal;
            font-size:2rem;
            color:${CGray};
            margin-bottom:24px;
            margin-left:5%;
            margin-right:5%;
            text-align: ${props=>props.right ? 'right' : 'left'};

            @media (min-width: 600px) {
                font-size:5rem;
            }
    }
`

export const SCopy = styled.div`
    margin-bottom:24px;
    padding-left:10%;
    padding-right:10%;
    
    text-align: ${props=>props.right ? 'right' : 'left'};
    
    @media (min-width: 600px) {
        font-size:1.2rem;
    }
`