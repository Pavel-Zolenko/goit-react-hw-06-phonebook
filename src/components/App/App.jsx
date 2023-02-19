import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Notification } from 'components/Notification/Notification';

import {
  Container,
  Title,
  SubTitle,
} from './App.styled';


export const App = () => {
    const contacts = useSelector(state => state.contacts.contacts);
    const filter = useSelector(state => state.contacts.filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );


  return (
    <Container>
        <Toaster position="top-center" reverseOrder={false} />
        <Title>Phonebook</Title>
       <ContactForm/>
      <SubTitle>Contacts</SubTitle>
       {filteredContacts.length > 0 || filter ? (
          <Filter/>
        ) : (
          <Notification msg="No contacts added" />
        )}

        <ContactList
          contacts={filteredContacts}
        />
      </Container>
  )
}