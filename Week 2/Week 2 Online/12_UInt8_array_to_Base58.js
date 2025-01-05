// First we import the bs58 library which provides Base58 encoding/decoding functionality
const bs58 = require('bs58');

// This function converts a Uint8Array to a Base58 encoded string
function uint8ArrayToBase58(uint8Array) {
    // Step 1: Convert Uint8Array to Buffer
    // Buffer.from() creates a new Buffer containing the Uint8Array data
    const buffer = Buffer.from(uint8Array);
    
    // Step 2: Encode the Buffer to Base58
    // bs58.encode converts the binary data to Base58 string
    return bs58.encode(buffer);
}

// Example usage:
// Create a Uint8Array with ASCII values for "Hello"
const byteArray = new Uint8Array([
    72,  // H
    101, // e
    108, // l
    108, // l
    111  // o
]);

// Convert to Base58
const base58String = uint8ArrayToBase58(byteArray);

// Print the result
console.log(base58String); // Output will be something like: "9Aj2ZVx"