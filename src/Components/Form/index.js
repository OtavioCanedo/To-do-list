import React, { useState } from 'react';
import './styles.css'

const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    if (username === 'admin' && password === 'password') {
      setError(null);
      // redirect to dashboard or show success message
    } else {
      setError('Invalid username or password');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
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
        </div>
      </label>
      <br />
      <button type="submit" className='button'>ENTRAR</button>
    </form>
  );
}

export default Form