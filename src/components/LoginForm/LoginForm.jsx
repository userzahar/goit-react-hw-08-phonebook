import { useState } from "react";
import { useDispatch } from "react-redux"
import { authOperations } from "redux/auth/thunkAuth";
import { FormLoginStyled } from "./LoginForm.styled";

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
    dispatch(authOperations.login({ email, password }));
    reset();
  };
  function reset()  {
         setEmail('');
         setPassword('');
    }

    return <>
    <FormLoginStyled onSubmit={heandleSubmit}>
  <label>
    Email:
          <input 
            type="email"
            name="email"
            value={email}
            onChange={heandleChange} />
  </label>

  <label>
    Password:
    <input 
            type="password"
            name="password"
            value={password}
            onChange={heandleChange} />
  </label>

  <button type="submit">Login</button>
      </FormLoginStyled>

    </>
}
