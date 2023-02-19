import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/store';

import { Item, Number, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Item>
      <span>{name}: </span>
      <Number>{number}</Number>
      <DeleteBtn type="button"  onClick={() => handleDelete(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};