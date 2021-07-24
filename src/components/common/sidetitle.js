import React from 'react'
import styled from 'styled-components';

export const SSideTitle= styled.div`
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