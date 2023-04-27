import { useSelector } from 'react-redux'
import {RegistrationForm} from '../../components/RegistrationForm/RegistrationForm'
import { Greetings } from 'components/Greetings/Greetings'
export const Register = () => {
    const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn
  })
    return <>
    {!isLoggedIn? <RegistrationForm/>: <Greetings/>}
    </>
}