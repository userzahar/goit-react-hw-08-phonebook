import { Route, Routes,NavLink } from "react-router-dom";
import { Header, NavigationList } from "./App.styled";
import { Homepage } from "pages/Homepage/Homepage";
import { Phonebook } from "pages/Phonebook/Phonebook";
import { Register } from "../pages/Register/Register";


export function App() {
  return <>
    <Header>
      <nav>
        <NavigationList>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contacts">Contacts</NavLink></li>
          <li><NavLink to="/register">Registration</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </NavigationList>
      </nav>
    </Header>
    <main>
    <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/contacts" element={<Phonebook />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<Homepage />}></Route>
    </Routes>

    </main>
    <footer></footer>
  </>
}
 

  
