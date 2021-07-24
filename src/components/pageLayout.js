import React from "react"
import styled from 'styled-components';
import Header from "./header.js"
import Footer from "./footer.js"
import {CWhite, CBlack} from './common/variables.js'

const PageLayout = (props) => {
     return(
        <>
            <Header />
            <SMain Backcolor={props.isBackcolor}>
                {props.children}
            </SMain>
            <Footer />
        </>
        )
}

const SMain = styled.div`
    font-family: 'Noto Serif JP', serif;
    color:darkslategray;
    max-width:1400px;
    background-color:${props=>props.Backcolor ? props.Backcolor : CWhite};
    color:${CBlack};

`

export default PageLayout