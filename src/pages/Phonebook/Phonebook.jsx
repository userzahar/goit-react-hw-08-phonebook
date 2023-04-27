import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { Form } from "components/Form/Form"

import { PhoneBookH1, PhoneBookH2 } from "./Phonebook.styled"
export const Phonebook = () => {
  return <>
    <PhoneBookH1>Phonebook</PhoneBookH1>
      <><Form />
      <PhoneBookH2>Contacts</PhoneBookH2>
        <Filter />
        <ContactList /></>
    </>
}