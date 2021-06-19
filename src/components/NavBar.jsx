import React from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../store/userSlice';
import logo from '../svg/logo.svg';

export default function NavBar() {
  const Button = styled.button`
      background: #FCA311;
      width: 1.8rem;
      height: 1.8rem;
      border: 0;
      cursor: pointer;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      ${({ rectangle }) => (rectangle ? 'width: 4rem;' : '')}
      ${({ circle }) => (circle ? 'border-radius: 50%;' : '')}
      .icon {
        color: #14213D;
        font-size: 0;
      }
  `;
  const Nav = styled.nav`
    width: 100%;
    height: 3.125rem;
    background: black;
    
    display: flex;
    justify-content: flex-end;
    align-items: center;

    position: relative;
    padding: 0.625rem 0.875rem;
    img {
      width: 3.125rem;
      height: 3.125rem;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(50px);
      border-radius: 3px;

      position: absolute;
      top: 0.625rem;
      left: 1.25rem;
    }
    .options {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      width: 10%;
    }
  `;
  const dispatch = useDispatch();
  const history = useHistory();

  const logOut = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <img alt="A beautiful logo" className="logo" src={logo} />
      </Link>
      <div className="options">
        <Button circle onClick={logOut}>
          <i className="icon">
            <ExitToAppIcon />
          </i>
        </Button>

      </div>
    </Nav>
  );
}
