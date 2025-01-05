// Import the `bip39` library, which is used for mnemonic generation and manipulation
import bip39 from 'bip39';

// Extract the `generateMnemonic` function from the `bip39` module
const { generateMnemonic } = bip39;

// Generate a mnemonic phrase (a 12-word human-readable string)
// This phrase is a randomly generated sequence of words, which can be used to derive cryptographic keys
const mnemonic = generateMnemonic();

// Display the generated mnemonic in the console
console.log('Generated Mnemonic:', mnemonic);
