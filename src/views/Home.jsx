import React from 'react';
// import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Login from '../components/Login';
import MainContainer from '../components/MainContainer';

export default function Home() {
  const authToken = useSelector((state) => state.loggedStatus.value);
  // const dispatch = useDispatch();
  return (
    <MainContainer>
      {
        authToken === 'Unauthorized'
          ? <Login />
          : <h1>Autorizado</h1>
      }
    </MainContainer>
  );
}

// Home.propTypes = {
//   user: PropTypes.string.isRequired,
//   handleLogin: PropTypes.func.isRequired,
// };
