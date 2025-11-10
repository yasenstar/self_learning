import { encode } from '@toon-format/toon';

import data from './data.json' with { type: 'json' };

// === Below block got error: "ReferenceError: require is not defined in ES module scope, you can use import instead"
// const fs = require('fs');
// const path = require('path');

// try {
//   const filePath = path.join(__dirname, 'data.json');
//   const rawData = fs.readFileSync(filePath, 'utf8');
//   var data = JSON.parse(rawData);
// } catch (error) {
//   console.error("Error reading JSON file:", error.message);
// }
// === End of block

// const data = {
//   users: [
//     { id: 1, name: 'Alice', role: 'admin' },
//     { id: 2, name: 'Bob', role: 'user' }
//   ]
// }

console.log(data);
console.log(encode(data));