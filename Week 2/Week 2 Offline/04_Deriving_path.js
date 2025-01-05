// Import required libraries
import nacl from "tweetnacl"; // For cryptographic functions like key pair generation
import { generateMnemonic, mnemonicToSeedSync } from "bip39"; // For generating mnemonic phrases and converting to seed
import { derivePath } from "ed25519-hd-key"; // For deriving keys using a hierarchical deterministic wallet (HD Wallet) approach
import { Keypair } from "@solana/web3.js"; // For working with Solana key pairs

// Step 1: Generate a 12-word mnemonic phrase (BIP-39 standard)
const mnemonic = generateMnemonic(); // Human-readable recovery phrase
console.log("Generated Mnemonic:", mnemonic);

// Step 2: Convert the mnemonic to a seed
const seed = mnemonicToSeedSync(mnemonic); // Converts mnemonic into a binary seed

// Step 3: Loop to generate 4 keypairs using different derivation paths
for (let i = 0; i < 4; i++) {
  // Define the derivation path for the Solana ecosystem
  // The format follows the BIP-44 standard with Solana-specific parameters: m/44'/501'/<account>'/0'
  const path = `m/44'/501'/${i}'/0'`; 

  // Derive a seed (binary buffer) specific to the current path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;

  // Generate a secret key from the derived seed using TweetNaCl's ed25519 keypair generator
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

  // Generate a Solana-compatible Keypair using the secret key
  const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();

  // Log the public key for this derived path
  console.log(`Public Key for path ${path}: ${publicKey}`);
}
