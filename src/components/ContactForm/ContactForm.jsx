import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';

import { addContacts } from 'redux/contacts/contactsThunk.js';
import { selectContacts } from 'redux/contacts/contactSelectors';

import { Form } from './ContactForm.styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handlerSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const form = e.target;
    const { name, number } = Object.fromEntries(formData);

    if (contacts?.some(item => item.name === name)) {
      return Notiflix.Notify.failure(`${name} is already in contacts!`);
    }
    dispatch(addContacts({ name, number }));
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handlerSubmit}>
        <TextField
          id="outlined-search"
          label="Enter contact name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          id="outlined-search"
          label="Enter contact number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Form>
    </>
  );
};
