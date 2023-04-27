// import { NavLink } from "react-router-dom"
import { LinkStyled, ModalStyled } from "./ModalLogin.styled"

export const ModalLogin = () => {
    return <ModalStyled>
        <h3>Please login or register</h3>
        <ul>
            <li><LinkStyled to="/register">Registration</LinkStyled></li>
            <li><LinkStyled to="/login">Login</LinkStyled></li>
        </ul>
    </ModalStyled>
}