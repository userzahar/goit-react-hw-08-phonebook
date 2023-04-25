import { ContactList } from "components/ContactList/ContactList"
import { Filter } from "components/Filter/Filter"
import { Form } from "components/Form/Form"

export const Phonebook = () => {
    return <>
    <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
        <Filter />
        <ContactList />
    </>
}