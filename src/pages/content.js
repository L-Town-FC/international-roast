import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"

const Content = () => {
  const data = useStaticQuery(graphql`
  query Images{
    images: allFile(filter: {relativeDirectory: {eq: "beans"}}){
      nodes{
        id
        childImageSharp{
          fixed(width: 200){
            ...GatsbyImageSharpFixed
          }
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  `)
  return (
    <>
      <SEO title="Content" />
      <h1>Content Page</h1>
      <p>Stuff goes here</p>
      <div className="beans-gallary">
        {data.images.nodes.map(image  => (<Img fluid={image.childImageSharp.fluid}/>))}
      </div>
    </>
  )
}

export default Content
