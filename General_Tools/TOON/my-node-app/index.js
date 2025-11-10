import { encode } from '@toon-format/toon';

const data = {
  users: [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Jack', role: 'user' }
  ]
}

console.log(data);
console.log(encode(data))