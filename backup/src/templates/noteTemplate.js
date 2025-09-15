import React from "react";
import { graphql, navigate } from "gatsby";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { ArrowLeftIcon } from '@primer/octicons-react';

// Change this stuff to fit your preferred colour style
const theme = {
  body: "#f5f5f7",
  text: "#1d1d1f",
  title: "#000000",
  h2: "#333333",
  h3: "#555555",
  element: "#007aff",
  elementHover: "#005bb5",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    padding: 0;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.title};
  margin-bottom: 1rem;
  text-align: center;
  margin-top: 2rem;
`;

const Content = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin: 2rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.element};
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.elementHover};
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.h2};
    margin-top: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const BackButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.element};
  color: #fff;
  cursor: pointer;
  margin: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.elementHover};
  }
`;

const NoteTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BackButton onClick={() => navigate("/")}><ArrowLeftIcon /></BackButton>
      <Title>{frontmatter.title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </ThemeProvider>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default NoteTemplate;
