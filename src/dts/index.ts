// make sure you install the ramdajs and ramda types
// npm i ramda
import * as R from 'ramda';

const double = (x:number) => x * 2;

R.map(double, [1, 2, 3]); //=> [2, 4, 6]

// npm i --save-dev @types/ramda