import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const startData = [
  { id: nanoid(4), name: 'Arnold Schwarzenegger', number: '5558801' },
  { id: nanoid(4), name: 'Sylvester Stallone', number: '5558802' },
  { id: nanoid(4), name: 'Bruce Willis', number: '5558803' },
  { id: nanoid(4), name: 'Jason Statham', number: '5558804' },
];

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: startData,
        filter: '',
    },
    reducers: {
        addContact(state, action) {
            if (
                state.contacts.some(
                    ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase())
            ) {
                alert(`${action.payload.name} is already in contacts`);
            } else {
                const newContact = {
                    id: nanoid(4),
                    name: action.payload.name,
                    number: action.payload.number,
                };

                state.contacts.push(newContact);
            }
        },
        deleteContact(state, action) {
             state.contacts = state.contacts.filter(({ id }) => id !== action.payload)
        },
        filterChange(state, action) {
             state.filter = action.payload
    }

    }
})