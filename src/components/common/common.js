import React from 'react'
import styled from 'styled-components';

export const CWhite='#F3F1F1'
//'#EBE7E8'
export const CBeige='#DAD2D3'
//'#AE9B9D'
export const CGray='#4B4E5F'
export const CNavy='#1A2636'
export const CBlack='#1C1D22'

const SSectionStyle=styled.div`
    position:relative;
    padding-top:80px;
    paddingBottom:40px;
`

export const SSection = ({children}) => {
    return (
        <SSectionStyle>
            {children}
        </SSectionStyle>
        )
} 

const SSectionTitleStyle = styled.div`
    font-size:2rem;
    color:${CGray};
    margin-bottom:24px;
    margin-left:5%;
    margin-right:5%;
    text-align: ${props=>props.right ? 'right' : 'left'};

    @media (min-width: 600px) {
        font-size:5rem;
    }
`

export const SSectionTitle = (props)=>{

    return(
        <SSectionTitleStyle right={props.right}>
            {props.children}
        </SSectionTitleStyle>
        )
}


const SSectionDiscriptionStyle = styled.div`
    margin-bottom:24px;
    padding-left:10%;
    padding-right:10%;
    
    text-align: ${props=>props.right ? 'right' : 'left'};
    
    @media (min-width: 600px) {
        font-size:1.2rem;
    }
`

export const SSectionDiscription = (props)=>{

    return(
        <SSectionDiscriptionStyle right={props.right}>
            {props.children}
        </SSectionDiscriptionStyle>
        )
}


export const SRdiv = ({children}) => {

    return(
        <div style={{
            width:"100%",
            position:"relative",
            height:"100%"
        }}>
            {children}
        </div>
        )
}



export const SAdiv = ({children}) => {

    return(
        <div style={{
            position:"absolute",
            top:"50%",
            left:"50%",
            width:"100%",
            transform: "translate(-50%,-50%)"
        }}>
            {children}
        </div>
        )
}


const SCoverStyle = styled.div`
    Position:absolute;
    height:100%;
    width:100%;
    top:0;
    left:0;
    background:rgba(0, 0, 0, 0.5);
`
    
export const SCover = ({children}) => {

    return(
        <SCoverStyle>
            {children}
        </SCoverStyle>
        )
}

const SCreditStyle= styled.div`
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    width:100%;
    position: sticky;
    top:0;
    display: flex;
    align-items: center;
    
    > ul {
        list-style:none;
        margin-top:16px;

        > li {
            > p {
                font-size:2rem;
                font-weight:bold;
                
                @media (min-width: 600px) {
                    font-size:3rem;
                }
            }
            
            > span {
                font-size:0.8rem;
                
                @media (min-width: 600px) {
                    font-size:1rem;
                }
            }

        }
    }
`

export const SCredit= ({children})=>{
    
    return(
        <SCreditStyle>
            {children}
        </SCreditStyle>
        )
}

