import React from 'react';
import styled from 'styled-components';
import logo from '../svg/logo.svg';

const MainBody = styled.div`
  display: flex;
  background: red;
`;

export default function Home() {
  return (
    <MainBody>
      <h1>Hola mundo</h1>
      <img alt="Code Blog" src={logo} />
    </MainBody>
  );
}
