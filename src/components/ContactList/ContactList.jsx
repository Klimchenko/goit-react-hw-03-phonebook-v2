import React from 'react';
import PropTypes from 'prop-types';
import { Button, List, Item, Text } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Text>{name}:</Text>
        <Text>{number}</Text>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </Item>
    ))}
  </List>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
