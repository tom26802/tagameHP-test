import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import PageLayout from "../components/pageLayout.js"
import Kv from "../components/tagamate/kv.js"
import People from "../components/tagamate/people.js"

const Home = () => {

  return (
    <PageLayout>
        <Seo title="Tagame City Tourism Association" />
        <Kv />
        <People />
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