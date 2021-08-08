import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/common/seo"
import PageLayout from "../../components/pageLayout.js"

import Kv from "../../components/info/hotel/kv.js"
import Hotel from "../../components/info/hotel/hotel.js"

const Home = () => {

  return (
    <PageLayout>
        <Seo title="Tagame City Tourism Association" />
            <Kv/>
            <Hotel />
        <div style={{height:'100px'}} />
    </PageLayout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`