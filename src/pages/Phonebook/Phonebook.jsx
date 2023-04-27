import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { Form } from "components/Form/Form"
import { ModalLogin } from "components/ModalLogIn/ModalLogin"
import { useSelector } from "react-redux"

export const Phonebook = () => {
    const isLoggedIn = useSelector(state => {
    return state.auth.isLoggedIn
  })
  return <>
    <h1>Phonebook</h1>
      {isLoggedIn ? <><Form />
      <h2>Contacts</h2>
        <Filter />
        <ContactList /></> : <ModalLogin/>}
    </>
}