import React, { useState } from 'react';
import './styles.css'
import Form from './form';

const Login = () => {

  return (
    <div className='login'>
      <div className='left-login'>
        <h1 className='titulo'>Faça o login e orgazine suas tarefas</h1>
        <h1>titulo</h1>
      </div>
      <div className='right-login'>
        <Form />
      </div>
    </div>
  );
}

export default Login
