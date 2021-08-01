import styled from 'styled-components'

export const SRdiv = styled.div`
    width:100%;
    position:relative;
`
export const SAdiv = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    width:100%;
    transform: translate(-50%,-50%);
`

export const SCover = styled.div`
    Position:absolute;
    height:100%;
    width:100%;
    top:0;
    left:0;
    background:${props=>props.white ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.5)'};
`