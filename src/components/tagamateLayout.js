import React from "react"
import styled from 'styled-components';
import PageLayout from "./pageLayout.js"

const TagameLayout = (props) => {
     return(
        <PageLayout>
            <SWrap>
                {props.children}
            </SWrap>
        </PageLayout>
        )
}

const SWrap = styled.div`
    margin: 0 auto;
    padding-top:80px;
    padding-bottom:80px;
    width:90%;
    
    @media (min-width: 960px) {
    width:60%
    }
`

export default TagameLayout