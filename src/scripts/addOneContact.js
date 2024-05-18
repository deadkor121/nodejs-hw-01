import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import PATH_DB from '../constants/contacts.js'; 

async function addOneContact() {
  try {
    let existingContacts = [];

    try {
      existingContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    } catch (readError) {
      if (readError.code !== 'ENOENT') {
        throw readError;
      }
    }

    const newContact = createFakeContact();
    existingContacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(existingContacts));
    console.log('Added one contact!');
  } catch (error) {
    console.error('Error adding a contact:', error);
  }
}

addOneContact();
export default PATH_DB;