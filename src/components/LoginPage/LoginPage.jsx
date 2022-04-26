import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import './LoginPage.scss'

function LoginPage() {
  const history = useHistory();

  return (
    <div className="grid" >
      
      
      <h1 className="title">
        <span className="titleSpan">O</span>h
        <span className="titleSpan">M</span>y
        <span className="titleSpan">G</span>ods</h1> 


      <LoginForm />

      <center>
        <br></br>create new account<br></br>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      </center>

    </div>
  );
}

export default LoginPage;
