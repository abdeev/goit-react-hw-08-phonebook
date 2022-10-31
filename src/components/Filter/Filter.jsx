import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { filterContacts } from 'redux/contacts/slices/filterSlice';
import TextField from '@mui/material/TextField';
import { Form } from 'components/ContactForm/ContactForm.styled';

const SearchContactFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Form>
      <TextField
        id="outlined-search"
        label="Find contacts by name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilterChange}
      />
    </Form>
  );
};

SearchContactFilter.propTypes = {
  changeFilter: PropTypes.func,
};

export default SearchContactFilter;
