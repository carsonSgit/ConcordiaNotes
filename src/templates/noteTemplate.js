import React from "react"
import { graphql, navigate } from "gatsby"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

// Change these to fit your preferred colour style
const theme = {
  body: '#ecf0f1',
  text: '#34495e',
  title: '#264653',
  headings: '#2a9d8f',
  generalBg: '#fff',
  element: '#1f756a',
  elementHover: '#195d54',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const Container = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`

const Title = styled.h1`
  color: ${({ theme }) => theme.title};
  margin-bottom: 1rem;
`

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.text};

  a {
    color: ${({ theme }) => theme.element};
    
    &:hover {
      color: ${({ theme }) => theme.elementHover};
    }
  }

  h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.headings};
  }

  p {
    margin-bottom: 1rem;
  }
`

const BackButton = styled.button `  
  font-size: 1em;
  padding: 0.5em 0.8em;
  border: 2px solid ${({ theme }) => theme.generalBg};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.generalBg};  
  transition: background-color 0.3s;

  &:hover {
  cursor: pointer;
  background-color: ${({ theme }) => theme.elementHover};
 }
`

const NoteTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <BackButton onClick={()=>navigate('/')}>←</BackButton>
        <Title>{frontmatter.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </ThemeProvider>
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
