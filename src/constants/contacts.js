import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PATH_DB = path.resolve(__dirname, '..', 'db', 'db.json');

export default PATH_DB;
