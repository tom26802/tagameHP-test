import React from "react"
import styled from 'styled-components';
import Header from "./header.js"
import Footer from "./footer.js"
import {CWhite, CBlack} from './common/common.js'

const PageLayout = ({children}) => {
     return(
        <>
            <Header />
            <SMain>
                {children}
            </SMain>
            <Footer />
        </>
        )
}

const SMain = styled.div`
    font-family: 'Noto Serif JP', serif;
    color:darkslategray;
    max-width:1400px;
    background-color:${CWhite};
    color:${CBlack};

`

export default PageLayout