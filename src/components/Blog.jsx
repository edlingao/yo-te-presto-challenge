import React from 'react';
import styled from 'styled-components';
import propType from 'prop-types';

const Blog = styled.div`
  background: rgba(20, 33, 61, 0.5);
  box-shadow: inset 0px 0px 20px 5px rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  width: 60%;
  min-height: 20rem;
  margin: auto;
  margin-top: 1.25rem;
  padding: 0.5rem 1.875rem;
  cursor: pointer;

  ${({ full }) => (full ? 'height: 100%;' : '')}
  h1.title{
    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
  }
  p.description {
    white-space: pre-wrap;
    font-weight: 400;
    font-size: 1.5rem;
    word-break: break-all;
    width: 100%;
  }
  .title,
  .description {
    color: white;
  }

`;

export default function BlogComponent({ title, comment }) {
  const showBlog = () => {
    // console.log('showBlog');
  };

  return (
    <Blog onClick={showBlog}>
      <h1 className="title">{title}</h1>
      <p className="description">{comment}</p>
    </Blog>
  );
}

BlogComponent.propTypes = {
  title: propType.string.isRequired,
  comment: propType.string.isRequired,
};
