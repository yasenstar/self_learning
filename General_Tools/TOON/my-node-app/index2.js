import { encode } from '@toon-format/toon';

import data from './data_more.json' with { type: 'json' };

console.log(data);
console.log(encode(data));