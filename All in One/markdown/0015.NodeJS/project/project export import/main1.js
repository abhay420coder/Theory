

/* 

// this will work in angular and react

// in main1.js

export function greet(name) {
  return `Hello, ${name}`;
}

export const message = "How you doing?";

// in main2.js

import { greet, message } from "./main1";

const greet_scaler = greet("Scaler");

console.log(greet_scaler); // Hello, Scaler
console.log(message); // How you doing?

 */


// for node and old js

module.exports = {
  a : 10,
  b : 200
}
