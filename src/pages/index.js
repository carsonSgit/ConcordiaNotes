import React from "react";
import { graphql, Link } from "gatsby";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import _ from "lodash";

// Change this stuff to fit your preferred colour style
const theme = {
  body: '#f5f5f7',
  text: '#1d1d1f',
  title: '#000000',
  h2: '#333333',
  h3: '#555555',
  element: '#007aff',
  elementHover: '#005bb5',
  generalBg: '#ffffff',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

const Container = styled.div`
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.generalBg};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  text-align: center;
`;

const ClassContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.generalBg};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e0e0e0;
`;

const ClassTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.h2};
  font-weight: 700;
`;

const WeekContainer = styled.div`
  margin-left: 0rem;
`;

const WeekTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.h3};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const NoteList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const NoteItem = styled.li`
  margin: 0.5rem 0;
`;

const NoteLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.element};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
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
