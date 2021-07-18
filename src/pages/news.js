import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/blogLayout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = "田瓶ニュース"
  const siteText ="田瓶市のイマをお届けするホットなニュースです。"
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle} text={siteText}>
      <Seo title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      <DLast>
        <p>このニュースコンテンツは毛総新聞社により提供されています。</p>
        <p>更新情報は田瓶市観光協会のTiwitterで随時配信中です。</p>
      </DLast>
    </Layout>
  )
}

export default BlogIndex

const DLast = styled.div`
  border: 1px dashed;
  padding:16px;
  margin-top:50px;
  
  > p {
    margin:8px;
  }
`

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
