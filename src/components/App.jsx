import { Route, Routes } from "react-router-dom";
import { FooterStyled, Header } from "./App.styled";
import { Homepage } from "pages/Homepage/Homepage";
import { Phonebook } from "pages/Phonebook/Phonebook";
import { Register } from "../pages/Register/Register";
import { Login } from "pages/Login/Login";
import { UserMenu } from "./UserMenu/UserMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authOperations } from "redux/auth/thunkAuth";
import { Navigation } from "./Navigation/Navigation";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";


export function App() {
  const dispatch = useDispatch();
  useEffect(() =>  {dispatch(authOperations.fetchCurrentUser())} , [dispatch])
  const mains = document.querySelector("main");
  console.dir(mains?.innerHTML)
  
  const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn
  })
  return <>
    <Header>
    <Navigation/>
      {isLoggedIn && <UserMenu/>}
    </Header>
    <main>
      
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/contacts"
          element={<PrivateRoute component={Phonebook} redirectTo={"/login"} />}></Route>
        <Route path="/register"
          element={<RestrictedRoute component={Register} redirectTo={"/contacts"} />}></Route>
        <Route path="/login"
              element={<RestrictedRoute component={Login} redirectTo={"/contacts"} />}></Route>
        <Route path="*" element={<Homepage />}></Route>
    </Routes>

    </main>
    <FooterStyled></FooterStyled>
  </>
}
 

  
