import React from "react"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  const notes = data.allMarkdownRemark.edges

  return (
    <div>
      <h1>My Notes</h1>
      <ul>
        {notes.map(({ node }) => (
          <li key={node.fields.slug}>
            <Link to={node.fields.slug}>
              {node.frontmatter.title || node.fields.slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
