import fs from 'fs';
import { PATH_DB } from '../contacts/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);

    await fs.promises.writeFile(PATH_DB, data, 'utf8');
    console.log('Contacts saved successfully');
  } catch (error) {
    console.error('Error writing file:', error);
    throw new Error('Failed to write contacts data');
  }
};
