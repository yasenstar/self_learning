import { encode } from '@toon-format/toon';

import data from './data.json' with { type: 'json' };

console.log(data);
console.log(encode(data));