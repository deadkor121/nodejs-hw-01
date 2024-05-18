import fs  from 'fs/promises';
import PATH_DB from '../constants/contacts.js'; 

async function countContacts() {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    console.log(`Total contacts: ${contacts.length}`);
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
}

countContacts();
export default PATH_DB;