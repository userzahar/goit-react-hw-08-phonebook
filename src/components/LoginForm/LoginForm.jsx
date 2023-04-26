import { useState } from "react";
import { useDispatch } from "react-redux"
import { authOperations } from "redux/auth/thunkAuth";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const heandleChange = ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  }
  const heandleSubmit = (e) => {
    e.preventDefault()
    dispatch(authOperations.login({email, password}));
  };

    return <>
    <form onSubmit={heandleSubmit}>
  <label>
    Електронна пошта:
          <input 
            type="email"
            name="email"
            value={email}
            onChange={heandleChange} />
  </label>

  <label>
    Пароль:
    <input 
            type="password"
            name="password"
            value={password}
            onChange={heandleChange} />
  </label>

  <button type="submit">Увійти</button>
      </form>

    </>
}
