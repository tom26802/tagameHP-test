import * as React from "react"
import { Link } from "gatsby"
import Header from "./header.js"
import Footer from "./footer.js"
import styled from 'styled-components'
import {CGray} from './common/variables.js'

const Layout = ({title, text, children }) => {

  return (
    <>
      <Header/>
      <div className="global-wrapper">
        <STitle>{title}</STitle>
        <SText>{text}</SText>
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

export default Layout

const STitle=styled.div`
  font-size:2rem;
  color:${CGray};
  margin-bottom:8px;
`

const SText=styled.div`
`
