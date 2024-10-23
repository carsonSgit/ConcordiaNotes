import React from "react"
import { graphql, Link } from "gatsby"
import _ from "lodash"

const IndexPage = ({ data }) => {
  const notes = data.allMarkdownRemark.edges

  const groupedByClass = _.groupBy(notes, note => note.node.parent.relativeDirectory.split('/')[0])

  return (
    <div>
      <h1>My Notes by Class and Week</h1>
      {Object.keys(groupedByClass).map(className => (
        <div key={className}>
          <h2>{className}</h2>
          {Object.entries(_.groupBy(groupedByClass[className], note => note.node.parent.relativeDirectory.split('/')[1])).map(
            ([weekName, weekNotes]) => (
              <div key={weekName} style={{ marginLeft: '20px' }}>
                <h3>{weekName}</h3>
                <ul>
                  {weekNotes.map(({ node }) => (
                    <li key={node.fields.slug}>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title || node.fields.slug}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      ))}
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
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`

export default IndexPage
