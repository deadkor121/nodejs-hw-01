import fs  from 'fs/promises';
import PATH_DB from '../constants/contacts.js'; 

async function getAllContacts() {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    console.log(contacts); 
  } catch (error) {
    console.error('Error reading contacts:', error);
  }
}

getAllContacts();
export default PATH_DB;