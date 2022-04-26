import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className="grid">

      <h1 className="title">
        <span className="titleSpan">O</span>h
        <span className="titleSpan">M</span>y
        <span className="titleSpan">G</span>ods</h1> 

      <RegisterForm />

      <center>
      <br></br>already have an account?<br></br>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
