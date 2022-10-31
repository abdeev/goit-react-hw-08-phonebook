import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { selectVisibleContacts } from 'redux/contacts/contactSelectors';
import { List } from '@mui/material';

const ContactList = () => {
  const contactsList = useSelector(selectVisibleContacts);

  return (
    <List sx={{ display: 'flex', flexDirection: 'column' }}>
      <ContactListItem contacts={contactsList} />
    </List>
  );
};

export default ContactList;
