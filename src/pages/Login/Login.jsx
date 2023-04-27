import { Greetings } from "components/Greetings/Greetings"
import { LoginForm } from "components/LoginForm/LoginForm"
import { useSelector } from "react-redux"

export const Login = () => {
    const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn
  })
    return <>{!isLoggedIn ?  <LoginForm />: <Greetings/>}</>
}
