import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import PATH_DB from '../constants/contacts.js'; 

async function generateContacts(amount) {
  try {
    const existingContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const newContacts = [];

    for (let i = 0; i < amount; i++) {
      newContacts.push(createFakeContact());
    }

    const allContacts = [...existingContacts, ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts));
    console.log(`Generated ${amount} contacts!`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
}

generateContacts(5);
export default PATH_DB;