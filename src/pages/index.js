import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import _ from "lodash"

const Container = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`

const ClassContainer = styled.div`
  margin-bottom: 2rem;
`

const ClassTitle = styled.h2`
  font-size: 1.5rem;
  color: #2a9d8f;
`

const WeekContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 1.5rem;
`

const WeekTitle = styled.h3`
  font-size: 1.25rem;
  color: #264653;
`

const NoteList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

const NoteItem = styled.li`
  margin: 0.5rem 0;
  font-size: 1rem;
`

const NoteLink = styled(Link)`
  text-decoration: none;
  color: #e76f51;

  &:hover {
    color: #f4a261;
    text-decoration: underline;
  }
`

const IndexPage = ({ data }) => {
  const notes = data.allMarkdownRemark.edges
  const groupedByClass = _.groupBy(notes, note => note.node.parent.relativeDirectory.split('/')[0])

  return (
    <Container>
      <h1>Concordia Notes</h1>
      {Object.keys(groupedByClass).map(className => (
        <ClassContainer key={className}>
          <ClassTitle>{className}</ClassTitle>

          {Object.entries(_.groupBy(groupedByClass[className], note => note.node.parent.relativeDirectory.split('/')[1])).map(
            ([weekName, weekNotes]) => (
              <WeekContainer key={weekName}>
                <WeekTitle>{weekName}</WeekTitle>
                <NoteList>
                  {weekNotes.map(({ node }) => (
                    <NoteItem key={node.fields.slug}>
                      <NoteLink to={node.fields.slug}>
                        {node.frontmatter.title || node.fields.slug}
                      </NoteLink>
                    </NoteItem>
                  ))}
                </NoteList>
              </WeekContainer>
            )
          )}
        </ClassContainer>
      ))}
    </Container>
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
