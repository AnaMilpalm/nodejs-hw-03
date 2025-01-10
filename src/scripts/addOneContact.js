import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();

    const newContact = createFakeContact();

    const updeatedContacts = [...existingContacts, newContact];

    await writeContacts(updeatedContacts);

    console.log('Successfully added a new contact.');
  } catch (error) {
    console.error('Error adding new contact:', error);
  }
};

addOneContact();
