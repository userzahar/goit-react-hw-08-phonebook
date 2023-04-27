import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { Form } from "components/Form/Form"
import { ModalLogin } from "components/ModalLogIn/ModalLogin"
import { useSelector } from "react-redux"
import { PhoneBookH1, PhoneBookH2 } from "./Phonebook.styled"


export const Phonebook = () => {
    const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn
  })
  return <>
    <PhoneBookH1>Phonebook</PhoneBookH1>
      {isLoggedIn ? <><Form />
      <PhoneBookH2>Contacts</PhoneBookH2>
        <Filter />
        <ContactList /></> : <ModalLogin/>}
    </>
}