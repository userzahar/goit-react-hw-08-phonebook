import { useDispatch, useSelector } from "react-redux";
import { UserMenuStyled } from "./UserMenu.styled"
import { authOperations } from "redux/auth/thunkAuth";
const DEFAULT_AVATAR = "https://alternative.me/media/256/wintoflash-icon-scrskb6824tdqyzn-c.png";
export const UserMenu = () => {
    const email = useSelector(state => state.auth.user.email);
    const dispatch = useDispatch();
    const heandleLogout = () => {
        dispatch(authOperations.logOut())
    }
    return <UserMenuStyled>
  <img src={DEFAULT_AVATAR} alt="Аватарка" />
        <p>{email}!</p>
  <button onClick={heandleLogout}>Logout</button>
</UserMenuStyled>
}
