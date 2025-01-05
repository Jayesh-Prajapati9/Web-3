// Step 1: Creating a Uint8Array
// Here we create an array with ASCII values that represent "Hello"
const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
// 72 = 'H'
// 101 = 'e'
// 108 = 'l'
// 108 = 'l'
// 111 = 'o'

// Step 2: Converting to Base64
// Buffer.from() creates a new Buffer containing the Uint8Array data
// toString("base64") converts that Buffer to a base64 string
const base64Encoded = Buffer.from(uint8Array).toString("base64");

// Step 3: Print the result
console.log(base64Encoded); // Output will