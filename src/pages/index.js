import React from "react";
import { graphql, Link } from "gatsby";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import _ from "lodash";

// Change these to fit your preferred colour style
const theme = {
  body: '#ecf0f1',
  text: '#34495e',
  title: '#264653',
  buttonBg: '#1e7a68',
  buttonHoverBg: '#155448',
  classContainerBg: '#fff',
  noteLink: '#1d8d55'
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
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.title};
  text-align: center;
  margin-bottom: 2rem;
`;

const ClassContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.classContainerBg};
  border-radius: 6px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const ClassTitle = styled.h2`
  font-size: 1.5rem;
  color: #2a9d8f;
  margin-bottom: 0.5rem;
`;

const WeekContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 1.5rem;
`;

const WeekTitle = styled.h3`
  font-size: 1.25rem;
  color: #264653;
  margin-bottom: 0.5rem;
`;

const NoteList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const NoteItem = styled.li`
  margin: 0.5rem 0;
`;

const NoteLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.noteLink};
  padding: 0.5rem;
  border-radius: 4px;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #46b989;
    color: #fff;
  }
`;

const IndexPage = ({ data }) => {
  const notes = data.allMarkdownRemark.edges;
  const groupedByClass = _.groupBy(notes, note => note.node.parent.relativeDirectory.split('/')[0]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Title>Concordia Notes</Title>
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
    </ThemeProvider>
  );
};

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
`;

export default IndexPage;
