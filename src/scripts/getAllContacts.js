import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const allContacts = await readContacts();
    console.log('All Contacts:', allContacts);
    return allContacts;
  } catch (error) {
    console.error('Error getting all contacts:', error);
  }
};

console.log(await getAllContacts());
