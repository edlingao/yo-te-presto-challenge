import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Login from '../components/Login';
import Blogs from './Blogs';
import MainContainer from '../components/MainContainer';
import { logout } from '../store/userSlice';
import axios from '../axios/axios';
import toastr from '../toastr/toastr';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  axios.interceptors.response.use(
    (response) => {
      if (response.status === 401) {
        toastr.error('Session expired');
        dispatch(logout());
        history.push('/');
      }
      return response;
    },
  );
  const authToken = useSelector((state) => state.loggedStatus.value);
  return (
    <MainContainer>
      {
        authToken === 'Unauthorized'
          ? <Login />
          : <Blogs />
      }
    </MainContainer>
  );
}

// Home.propTypes = {
//   user: PropTypes.string.isRequired,
//   handleLogin: PropTypes.func.isRequired,
// };
