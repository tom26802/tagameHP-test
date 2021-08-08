import styled from 'styled-components'


export const SSpotWrap = styled.div`
    width:80%;
    margin:0 auto;
    margin-top:100px;
    border-color: ${props=>props.color ? props.color : 'black'};
`

export const SSpotTitle = styled.div`
    width:100%;
    font-size:2rem;
    text-align:center;
    font-weight:bold;
    padding:8px;
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-color: ${props=>props.color ? props.color : 'black'};
    color:${props=>props.color ? props.color : 'black'};
`

export const SSpotContent=styled.div`
    padding:50px 32px;
    
    > div {
        font-size:1.5rem;
        font-weight:bold;
    }
    
    > p {
        margin-top:16px;
        font-size:0.9rem;
    }
`

export const SContentWrap=styled.div`
`