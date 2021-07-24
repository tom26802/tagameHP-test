import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';
import PageLayout from "../components/pageLayout"
import {Grid } from '@material-ui/core';
import {SSection} from '../components/common/section.js'
import Img from "gatsby-image"

const TagamateTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const path = "../images/index/people/"+post.fields.slug.split('/')[3]+".jpg"
  console.log(path)

  return (
      <PageLayout isBackcolor={'white'}>
        <SSection>
            <SInterviewWrap>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item sm={8}>
                        <h1>{post.frontmatter.title}</h1>
                        <p style={{fontWeight:'bold'}}>{post.frontmatter.subtitle}</p>
                        <p>{post.frontmatter.description}</p>
                    </Grid>
                    <Grid item sm={4}>
                    <Img fluid={post.frontmatter.path.childImageSharp.fluid}/>
                    </Grid>
                </Grid>
          <div>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
          </SInterviewWrap>
        </SSection>
      </PageLayout>
  )
}

export default TagamateTemplate

export const pageQuery = graphql`
  query PagePostBySlug(
    $id: String!
    ) {
      site {
        siteMetadata {
          title
        }
    }
    markdownRemark(
      id: { eq: $id }
    ) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        templateKey
        subtitle
        path{
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
      fields {
        slug
      }
    }
  }
`

const SInterviewWrap=styled.div`
    width:60%;
    margin:0 auto;
    padding-bottom:80px;
`