// Import necessary functions from the bip39 library
import { generateMnemonic, mnemonicToSeedSync } from "bip39";

// Generate a new mnemonic (12-word phrase)
const mnemonic = generateMnemonic();

// Convert the mnemonic phrase into a seed (binary buffer)
// This seed can later be used to derive keys or wallets
const seed = mnemonicToSeedSync(mnemonic);

// Display the generated mnemonic
console.log("Generated Mnemonic:", mnemonic);

// Convert the binary seed to a hexadecimal string for readability
console.log("Derived Seed (Hex):", seed.toString("hex"));
