import { Form } from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Route, Routes,NavLink } from "react-router-dom";
import { Header, NavigationList } from "./App.styled";


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
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
    <Filter />
      <ContactList />
    </main>
    <footer></footer>
  </>
}
 

  
