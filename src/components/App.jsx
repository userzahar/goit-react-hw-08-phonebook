import { Route, Routes,NavLink } from "react-router-dom";
import { Header, NavigationList } from "./App.styled";
import { Homepage } from "pages/Homepage/Homepage";
import { Phonebook } from "pages/Phonebook/Phonebook";
import { Register } from "../pages/Register/Register";
import { Login } from "pages/Login/Login";
import { UserMenu } from "./UserMenu/UserMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authOperations } from "redux/auth/thunkAuth";


export function App() {
  const dispatch = useDispatch();
  useEffect(() =>  {dispatch(authOperations.fetchCurrentUser())} , [dispatch])
  
  const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn
  })
  return <>
    <Header>
      <nav>
        <NavigationList>
          <li><NavLink to="/">Home</NavLink></li>
          {isLoggedIn && <li><NavLink to="/contacts">Contacts</NavLink></li>}
          {!isLoggedIn && <>
          <li><NavLink to="/register">Registration</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li></>}
        </NavigationList>
      </nav>
      {isLoggedIn && <UserMenu/>}
    </Header>
    <main>
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/contacts" element={<Phonebook />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Homepage />}></Route>
    </Routes>

    </main>
    <footer></footer>
  </>
}
 

  
