import fs from 'fs';
import { PATH_DB } from '../contacts/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.promises.readFile(PATH_DB, 'utf8');

    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    throw new Error('Failed to read contacts data');
  }
};
