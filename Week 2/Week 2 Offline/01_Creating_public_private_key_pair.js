// Import the Keypair class from the Solana web3.js library
import { Keypair } from "@solana/web3.js";
// Import the nacl library for cryptographic functions
import nacl from "tweetnacl";

// Generate a new cryptographic keypair (public key and private key)
const keypair = Keypair.generate();

// Extract the public key as a string for display purposes
const publicKey = keypair.publicKey.toString();

// Extract the secret key (private key) from the generated keypair
const secretKey = keypair.secretKey;

// Display the public and private keys in the console
console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", secretKey);

// Convert a plain text message "hello world" into a binary format (Uint8Array)
// This step is necessary because cryptographic functions work on binary data, not plain text
const message = new TextEncoder().encode("hello world");

// Sign the binary message using the secret key
// The `nacl.sign.detached` function generates a digital signature for the message
const signature = nacl.sign.detached(message, secretKey);

// Verify the signature to ensure the message hasn't been tampered with
// This checks if the signature corresponds to the message and public key
const result = nacl.sign.detached.verify(
  message,              // The original message (binary format)
  signature,            // The signature generated earlier
  keypair.publicKey.toBytes(), // The public key in binary format for verification
);

// Log the verification result (true or false)
// True means the signature is valid and the message was signed using the corresponding private key
console.log(result);
