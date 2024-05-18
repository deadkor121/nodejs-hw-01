import fs from 'fs/promises';
import PATH_DB from '../constants/contacts.js'; 

async function thanos() {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));

    const survivingContacts = contacts.filter(() => Math.random() > 0.5); 

    await fs.writeFile(PATH_DB, JSON.stringify(survivingContacts));
    console.log('Thanos snapped his fingers!');
  } catch (error) {
    console.error('Error during Thanos snap:', error);
  }
}

thanos();
export default PATH_DB;