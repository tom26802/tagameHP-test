import * as React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/common/seo"
import PageLayout from "../components/pageLayout.js"
import Kv from "../components/main/kv.js"
import Nature from "../components/main/nature.js"
import Tour from "../components/main/tour.js"
import People from "../components/main/people.js"
import Area from "../components/main/area.js"

const Home = () => {

  return (
    <PageLayout>
        <Seo title="Tagame City Tourism Association" />
        <Kv />
        <Nature />
        <Tour/>
        <People/>
        <Area/>
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