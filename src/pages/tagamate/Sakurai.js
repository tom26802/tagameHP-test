import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/common/seo"

import TagameLayout from "../../components/tagamateLayout.js"

import Sakurai from "../../components/tagamates/sakurai.js"

const Home = () => {

  return (
    <TagameLayout>
        <Seo title="Tagame City Tourism Association" />
            <Sakurai />
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