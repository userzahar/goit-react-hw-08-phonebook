import { useSelector } from "react-redux";
import { GreetingsStyled } from "./Greetings.styled";

export const Greetings = () => {
const username = useSelector(state => state.auth.user.name);
    return <GreetingsStyled>Greetings {username}!</GreetingsStyled>
}
