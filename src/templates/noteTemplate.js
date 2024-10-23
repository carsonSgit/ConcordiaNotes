import React from "react"
import { graphql, navigate } from "gatsby"
import styled from "styled-components"

// Styled Components
const Container = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`

const Title = styled.h1`
  color: #264653;
  margin-bottom: 1rem;
`

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;

  a {
    color: #1d8d55;

    &:hover {
      color: #46b989;
    }
  }

  h2, h3, h4, h5, h6 {
    color: #2a9d8f;
  }

  p {
    margin-bottom: 1rem;
  }
`

const BackButton = styled.button `  
  font-size: 1em;
  padding: 0.5em 0.8em;
  border: 2px solid #ffffff;
  border-radius: 8px;
  background-color: #2a9d8f;
  color: #ffffff;
  
  
  &:hover {
   cursor: pointer;
 }
`

const NoteTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Container>
      <BackButton onClick={()=>navigate(-1)}>←</BackButton>
      <Title>{frontmatter.title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default NoteTemplate
