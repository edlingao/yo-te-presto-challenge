import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import logo from '../svg/logo.svg';

const LoginForm = styled.form`
  .header {
    background: black;
  }
`;
export default function Home() {
  const userExample = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <LoginForm>
      <div className="header">
        <img alt="Code Blog" src={logo} />
      </div>

    </LoginForm>
  );
}

Home.propTypes = {
  user: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
