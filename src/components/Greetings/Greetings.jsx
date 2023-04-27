import { useSelector } from "react-redux";
import { GreetingsStyled } from "./Greetings.styled";

import { LinkStyled } from "components/ModalLogIn/ModalLogin.styled";

export const Greetings = () => {
const username = useSelector(state => state.auth.user.name);
    return <><GreetingsStyled>Greetings {username}!</GreetingsStyled>
   <p>Go to <LinkStyled to="/contacts">Contacts</LinkStyled></p></>
}
