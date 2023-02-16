import React, { useState } from 'react';
import './styles.css'
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (username === 'admin' && password === '1234') {
      setError(null);
      navigate("/task")
    } else {
      setError('Usuário ou senha inválidos');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <div className='textfield'>
          <input
            placeholder="Usuário"
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            />
        </div>
      </label>
      <br />
      <label>  
        <div className='textfield'>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
            />
            {error && <p className='error'>{error}</p>}
        </div>
      </label>
      <br />
      <button type="submit" className='button' onClick={handleSubmit}>ENTRAR</button>
    </form>
  );
}

export default Form