import fs from 'fs/promises';
import PATH_DB from '../constants/contacts.js'; 

async function removeAllContacts() {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('All contacts removed!');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
}

removeAllContacts();
export default PATH_DB;