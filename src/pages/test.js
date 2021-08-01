import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const Home = ({ data }) => { // graphqlでデータを引っ張ると data に 返り値 が返ってくる

  const GatsbyImage2 = data.allFile.edges.find(item => item.node.name==="etori")
  console.log(GatsbyImage2)


  const GatsbyImages = data.allFile.edges.map(({node}) => {
    return <GatsbyImage image={getImage(node.childImageSharp)} alt={node.name} key={node.name} />
  })

  return (
    <div>
      <h1>Hello world!</h1>
      <GatsbyImage image={getImage(GatsbyImage2.node.childImageSharp)}/>
　　　{GatsbyImages}
　　　
    </div>
  );
}

export const query = graphql`
  query MyQuery {
    allFile {
      edges {
        node {
            name
            childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Home;