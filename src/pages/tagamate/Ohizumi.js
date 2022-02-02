import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/common/seo"

import TagameLayout from "../../components/tagamateLayout.js"

import Ohizumi from "../../components/tagamates/ohizumi.js"

const Home = () => {

  return (
    <TagameLayout>
        <Seo title="Tagame City Tourism Association" />
            <Ohizumi />
        <div style={{height:'100px'}} />
    </TagameLayout>
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