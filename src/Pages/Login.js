import React from 'react';
import './Login.css'
import Form from '../Components/Form'

import tasks from '../assets/tasks.webp';

const Login = () => {
  return (
    <div className='login'>
      <div className='left-login'>
        <h1>Faça o login e<br /> orgazine suas tarefas</h1>
        <img src={tasks} alt="imagem de tarefas" className='left-login-image' />
      </div>
      <div className='right-login'>
        <div className='card-login'>
          <h1>LOGIN</h1>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Login
