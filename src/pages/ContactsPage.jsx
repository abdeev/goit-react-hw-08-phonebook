import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsThunk.js';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactSelectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import SearchContactFilter from 'components/Filter/Filter';
import { CircularProgress, Grid } from '@mui/material';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <h2>Phonebook</h2>
      </Grid>
      <ContactForm />
      {isLoading && !error && (
        <Grid item>
          Request in progress <CircularProgress disableShrink />
        </Grid>
      )}
      {contacts.length > 0 && (
        <Grid item>
          <h2>Contacts</h2>
          <SearchContactFilter />

          <ContactList />
        </Grid>
      )}
    </Grid>
  );
};

export default ContactsPage;
