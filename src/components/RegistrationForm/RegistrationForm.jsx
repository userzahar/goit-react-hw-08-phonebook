import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth/thunkAuth";

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const heandleChange = ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'name') setName(value);
  }
  const heandleSubmit = (e) => {
    e.preventDefault()
    console.log({email, password, name});
    dispatch(authOperations.register({email, password, name}));
  };
    return <>
    <form onSubmit={heandleSubmit}>
  <label>
    Ім'я:
          <input 
            type="text"
            name="name"
            value={name}
            onChange={heandleChange} />
  </label>
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

  <button type="submit">Зареєструватися</button>
      </form>
    </>
}