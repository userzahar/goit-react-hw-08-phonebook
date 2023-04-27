import { NavigationList } from "components/App.styled"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn
    })
    
    return<nav>
        <NavigationList>
          <li><NavLink to="/">Home</NavLink></li>
          {isLoggedIn && <li><NavLink to="/contacts">Contacts</NavLink></li>}
          {!isLoggedIn && <>
          <li><NavLink to="/register">Registration</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li></>}
        </NavigationList>
      </nav>
}