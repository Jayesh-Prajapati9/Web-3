# Week 2 - Public Key Cryptography [9 Aug 2024]

## Information

- **Class Slides**: [Public Key Cryptography](https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-1)

- **Assignment**: Creating a web based wallet

## Authentication Methods

### Traditional Banking Authentication

![Bank Authentication](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2Fb6b653be-a925-4fed-bba5-9764dfbd5a32%2Fimage.png?table=block&id=730f3055-75f4-4045-b1a4-88ce68610b09&cache=v2)

#### Username and Password

- Traditional banks rely on a username and password for authentication
- These credentials allow you to:
  - View your funds
  - Transfer funds
  - Review your transaction history

### Blockchain Authentication

#### Public-Private Keypair

- Blockchain accounts are secured through a public-private keypair
- A public-private keypair consists of two keys used in asymmetric cryptography

##### Public Key

- The public key is a string that can be shared openly with anyone
- It acts like your "account number" on the blockchain
- Example: Ethereum Address on Etherscan

##### Private Key

- The private key is a secret string that must be kept confidential
- It is used to sign transactions and prove ownership of the associated public key
- Never share your private key with anyone

## Bits and Bytes

### Why Learning this?

#### What is a Bit?

- A bit is the smallest unit of data in a computer
- It can have one of two values: 0 or 1
- All programs and code you write are eventually converted to 0's and 1's

##### Analogy

Think of a bit like a light switch that can either be off (0) or on (1)

##### Bit Representation in JavaScript

Here, x represents a single bit with a value of 0.

#### What is a Byte?

- A byte is a group of 8 bits
- It's the standard unit of data used to represent a single character in memory

##### Possible Values

- Since each bit can be either 0 or 1, a byte can have 2^8 (256) possible values, ranging from 0 to 255
- Example: The binary sequence 11001010 represents a specific value in decimal

##### Byte Representation

Here, x is a byte, representing the decimal value 202, which is equivalent to 11001010 in binary.

##### Array of Bytes

This is an array containing multiple bytes.

### Using UInt8Array in JavaScript

#### Definition

UInt8Array is a typed array in JavaScript that represents an array of 8-bit unsigned integers (bytes).

#### Advantages

- **Memory Efficiency**: Uses less space; each value takes only 1 byte
- **Constraints**: Ensures that values don't exceed 255, which is the maximum value a byte can hold

#### Examples

#### Why Use UInt8Array Over Native Arrays?

##### Memory Efficiency

- Native arrays in JavaScript store numbers using 64 bits (8 bytes) per number, regardless of the actual size of the number
- UInt8Array stores each number using only 1 byte, which is sufficient for values between 0 and 255

##### Constraints

- UInt8Array enforces that each element doesn't exceed 255, preventing potential overflow errors

## Encodings

When working with computers, data is often represented in a format that is not human-readable, such as binary or bytes.
Encoding is the process of converting this data into a more readable format.
Some common encodings include ASCII, Hex, Base64, and Base58.
These encodings help us represent binary data in a more understandable way.

### 1. ASCII (American Standard Code for Information Interchange)

- 1 character = 7 bits
- ASCII is one of the oldest encodings used to represent text in computers
- Each character in ASCII corresponds to a specific number (ranging from 0 to 127), which is represented in binary
- Example: the letter 'A' is represented by the number 65 in ASCII, which is 01000001 in binary

#### Key Operations

- Converting Bytes to ASCII
- Converting ASCII to Bytes
- Using UInt8Array for ASCII
- ASCII to UInt8Array

> 💡 **Resources**:
>
> - [ASCII table - Table of ASCII codes, characters and symbols](https://ascii-code.com)
> - [HTML ASCII Reference](https://w3schools.com)

### 2. Hexadecimal (Hex)

- 1 character = 4 bits
- Hexadecimal is a base-16 encoding system that uses 16 characters: 0-9 and A-F
- Commonly used in programming and digital systems to represent binary data in a more compact and readable format
- Each hex digit represents four bits (a nibble), and two hex digits represent one byte

#### Key Operations

- Converting Array to Hex
- Converting Hex to Array

> 💡 **Resource**: [Hex (Base16) encoder & decoder](https://hexator.com)

### 3. Base64

- 1 character = 6 bits
- Base64 is an encoding scheme that represents binary data in an ASCII string format
- Uses 64 different characters (A-Z, a-z, 0-9, +, /)
- Commonly used in data transfer, encoding images, and storing complex data as text

#### Key Operation

- Encoding to Base64

> 💡 **Resources**:
>
> - Base64 Encode/Decode
> - Base64 Decode/Encode

### 4. Base58

- Similar to Base64 but uses a different set of characters
- Avoids visually similar characters (e.g., 0 and O, l and 1)
- Makes the encoded output more user-friendly
- Often used in Bitcoin and other cryptocurrencies for encoding addresses and other data

#### Key Operations

- Encoding to Base58
- Decoding from Base58

## Hashing vs Encryption

### Hashing

Hashing converts data into a fixed-size string of characters, known as a hash.

#### Key Points

- **Deterministic**: The same input will always produce the same hash
- **Fixed Size**: Regardless of the input size, the output hash will always be the same length
- **One-Way Function**: Hashes cannot be reversed to retrieve the original input data
- **Collision Resistance**: It is computationally difficult to find two different inputs that produce the same hash

#### Common Hashing Algorithms

- **SHA-256**: Widely used in blockchain technology, ensuring data integrity
- **MD5**: Once popular for checksums, now considered insecure due to vulnerabilities

### Encryption

Encryption converts plaintext into ciphertext using an algorithm and a key.

#### Key Points

- **Reversible**: With the correct key, the ciphertext can be decrypted back to plaintext
- **Key-Dependent**: The security of encryption relies on the secrecy of the key

#### Types of Encryptions

![Encryption Types](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F26ebabfb-089c-4f13-b19d-99686fd5df72%2Fimage.png?table=block&id=2c00cfca-559c-4555-be70-a68b3a480387&cache=v2)

### 1. Symmetric Encryption

**Definition**: The same key is used for both encryption and decryption.

#### Common Algorithms

- AES (Advanced Encryption Standard)
- DES (Data Encryption Standard)

> 💡 **Resource**: [AES Encryption and Decryption Online](https://devglan.com)

### 2. Asymmetric Encryption

![Asymmetric Encryption](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F30661723-ba5b-4ed4-b8d4-9063293a757f%2Fimage.png?table=block&id=ef5bf570-ff4b-42b2-b7e0-37377ac33c4e&cache=v2)

Uses a pair of keys – a public key and a private key – for encryption and decryption.

#### Key Pair

- **Public Key**: Can be shared openly and is used to encrypt data
- **Private Key**: Must be kept confidential and is used to decrypt data encrypted with the corresponding public key

#### Common Algorithms

- RSA (Rivest–Shamir–Adleman)
- ECC (Elliptic Curve Cryptography) - Used by ETH and BTC
- EdDSA (Edwards-curve Digital Signature Algorithm) - Used by SOL

#### Common Elliptic Curves

- **secp256k1**: Used in Bitcoin (BTC) and Ethereum (ETH)
- **ed25519**: Used in Solana (SOL)

![Elliptic Curves](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F772683dc-8f61-4b26-a473-235bcec85a58%2Fimage.png?table=block&id=42c90f7f-a789-47ee-9af4-2b0f679ce092&cache=v2)

> 💡 **Resource**: [How Elliptic Curves Work]()

### Use Cases of Public-Key Cryptography

- SSL/TLS Certificates: Ensuring secure communication over the internet
- SSH Keys: For secure server access or pushing code to GitHub
- Blockchains and Cryptocurrencies: Ensuring secure and verifiable transactions

> 💡 **Note**:
>
> - A message on the blockchain is signed using private key
> - A miner verifies the transaction using the signature and public key
> - [Public/PrivateKeys & Signing Demo](https://andersbrownworth.com)

## Creating a public/private keypair

![Keypair Creation](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F4f59888c-376b-4f8f-944d-b5e37c0aaf92%2Fimage.png?table=block&id=8853405f-e465-445c-bef1-4db0c8e1dc38&cache=v2)

### EdDSA - Edwards-curve Digital Signature Algorithm - ED25519

#### Implementation Options

- Using @noble/ed25519
- Below code shows the creation of public-private key using Noble/ed25519 algorithm

```typescript
import * as ed from "@noble/ed25519";

async function main() {
  // Generate a secure random private key
  const privKey = ed.utils.randomPrivateKey();

  // Convert the message "hello world" to a Uint8Array
  const message = new TextEncoder().encode("hello world");

  // Generate the public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privKey);

  // Sign the message
  const signature = await ed.signAsync(message, privKey);

  // Verify the signature
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  // Output the result
  console.log(isValid); // Should print `true` if the signature is valid
}

main();
```

- Using @solana/web3.js
- Below code shows the creation of public-private key using Solana/Web3
- this is specially used when you are creating public-private key for the Solana Blockchain

```javascript
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate a new keypair
const keypair = Keypair.generate();

// Extract the public and private keys
const publicKey = keypair.publicKey.toString();
const secretKey = keypair.secretKey;

// Display the keys
console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", secretKey);

// Convert the message "hello world" to a Uint8Array
const message = new TextEncoder().encode("hello world");

const signature = nacl.sign.detached(message, secretKey);
const result = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes()
);

console.log(result);
```

### ECDSA (Elliptic Curve Digital Signature Algorithm) - secp256k1

#### Implementation Options

- Using @noble/secp256k1
- Below code shows the creation of public-private key using Noble/secp256k1

```javascript
import * as secp from "@noble/secp256k1";

async function main() {
  const privKey = secp.utils.randomPrivateKey(); // Secure random private key
  // sha256 of 'hello world'
  const msgHash =
    "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";
  const pubKey = secp.getPublicKey(privKey);
  const signature = await secp.signAsync(msgHash, privKey); // Sync methods below
  const isValid = secp.verify(signature, msgHash, pubKey);
  console.log(isValid);
}

main();
```

- Using ethers
- Below code shows the creation of public-private key using Ethers, which was created by Ethereum for it's Blockchain.

```javascript
import { ethers } from "ethers";

// Generate a random wallet
const wallet = ethers.Wallet.createRandom();

// Extract the public and private keys
const publicKey = wallet.address;
const privateKey = wallet.privateKey;

console.log("Public Key (Address):", publicKey);
console.log("Private Key:", privateKey);

// Message to sign
const message = "hello world";

// Sign the message using the wallet's private key
const signature = await wallet.signMessage(message);
console.log("Signature:", signature);

// Verify the signature
const recoveredAddress = ethers.verifyMessage(message, signature);

console.log("Recovered Address:", recoveredAddress);
console.log("Signature is valid:", recoveredAddress === publicKey);
```

## How Transactions Work on the Blockchain

### Overview of Transaction Flow

[For Reference](https://andersbrownworth.com/blockchain/img/transaction-flow.png)

### User Side Steps

1. **Key Creation**

   - User creates a public/private keypair
   - Public key serves as their blockchain address
   - Private key is kept secure for signing transactions

2. **Transaction Creation**

   - User initiates a transaction (e.g., "send Rs 50 to Alice")
   - Transaction includes:
     - Recipient's address
     - Amount to send
     - Blockchain-specific parameters (e.g., latestBlockHash in Solana)

3. **Transaction Processing**
   - Hash the transaction data
   - Sign the transaction using private key
   - Send three components to blockchain node:
     - Raw transaction
     - Signature
     - Public key

### Miner/Validator Side

1. **Signature Verification**

   - Hash the original message
   - Verify signature using:
     - User's public key
     - Generated hash
     - Provided signature

2. **Transaction Validation**
   - Check user has sufficient funds
   - Verify other blockchain-specific requirements
   - If valid, add transaction to the block

## Hierarchical Deterministic (HD) Wallet

HD wallets generate a tree of key pairs from a single seed, allowing users to manage multiple addresses from one root seed.

### Problem

Traditionally, maintaining multiple wallets required storing multiple public-private key pairs.
This is cumbersome and risky, as losing any one of these keys can result in the loss of associated funds.

### Solution - BIP-32

[Bitcoin Improvement Proposal 32 (BIP-32)](https://www.ledger.com/academy/what-is-a-bitcoin-improvement-proposal-bip), introduced by Bitcoin Core developer Pieter Wuille in 2012, addresses this problem by standardizing the derivation of private and public keys from a single master seed.

BIP-32 introduced the concept of hierarchical deterministic (HD) wallets, which use a tree-like structure to manage multiple accounts easily.

### Mnemonics

> **Reference**: [GitHub](https://github.com/bitcoin/bips/blob/master/bip-0039/english.txt)

A mnemonic phrase, or seed phrase, is a human-readable sequence of words used to generate a cryptographic seed.
BIP-39(Improvement to BIP-32) defines how mnemonic phrases are generated and converted into a seed.

#### Example Code to Generate a Mnemonic

```javascript
import { generateMnemonic } from "bip39";

// Generate a 12-word mnemonic
const mnemonic = generateMnemonic();
console.log("Generated Mnemonic:", mnemonic);
```

> 💡 **References**:
>
> - [BIP-39]()
> - [Backpack Implementation](https://github.com/link)
> - YouTube Reference

### Seed Phrase

The seed is a binary number derived from the mnemonic phrase. This seed is used to generate the master private key.

> **Reference**: [GitHub](https://github.com/coral-xyz/backpack/blob/master/packages/secure-background/src/services/svm/keyring.ts#L131)

#### Example Code to Generate a Seed from a Mnemonic

```javascript
import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const mnemonic = generateMnemonic();
console.log("Generated Mnemonic:", mnemonic);
const seed = mnemonicToSeedSync(mnemonic);
```

> **Reference**: [Backpack Implementation](https://github.com/link)

### Derivation Paths

[Derivation Paths](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F89f74c2f-2eb0-43d8-803f-97efb36f1d47%2Fimage.png?table=block&id=128bf35b-bbd7-40e6-8349-29d5e1ced334&cache=v2)

Derivation paths specify a systematic way to derive various keys from the master seed.
They allow users to recreate the same set of addresses and private keys from the seed across different wallets, ensuring interoperability and consistency.

A derivation path is typically expressed in a format like `m / purpose' / coin_type' / account' / change / address_index`:

- **m**: Refers to the master node, or the root of the HD wallet
- **purpose**: A constant that defines the purpose of the wallet (e.g., 44' for BIP44)
- **coin_type**: Indicates the type of cryptocurrency (e.g., 0' for Bitcoin, 60' for Ethereum, 501' for Solana)
- **account**: Specifies the account number (e.g., 0' for the first account)
- **change**: This is either 0 or 1 (0 for receiving addresses, 1 for change addresses)
- **address_index**: A sequential index to generate multiple addresses under the same account and change path

#### Example Code for Deriving Paths and Generating Keys

```javascript
import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

const mnemonic = generateMnemonic();
const seed = mnemonicToSeedSync(mnemonic);
for (let i = 0; i < 4; i++) {
  const path = `m/44'/501'/${i}'/0'`; // Derivation path for Solana
  const derivedSeed = derivePath(path, seed.toString("hex")).key;
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}
```

> **References**:
> Solana-specific Implementation:
>
> - [GitHub Link 1]()
> - [GitHub Link 2]()

## Additional: Can you guess the 12-word recovery phrase? [Explanation with Calculations]

### Understanding the 12-word recovery phrase?

#### Mnemonic Phrases (BIP39 Standard)

- The 12-word recovery phrase is based on the BIP39 standard
- Words are chosen from a specific list of 2,048 words (BIP39 wordlist)
- These phrases are used to generate the wallet's private key

#### Combinatorial Explosion

A 12-word recovery phrase can be any combination of 12 words from this list.

### Computation of Combinations

To compute the total number of possible 12-word combinations:

Total Combinations = 2048¹² ≈ 2¹³² ≈ 5.444517870735016 × 10³⁹

### Probability of Guessing Correctly

The probability of correctly guessing a 12-word recovery phrase is:

Probability = 1/2048¹² ≈ 1.8 × 10⁻⁴⁰

### Computational Effort and Time

#### Hypothetical Scenario

- Assume checking 1 billion (10⁹) phrases per second
- Number of seconds in a year: 31,536,000 seconds/year
- Number of checks per year: 10⁹ × 31,536,000 ≈ 3.1536 × 10¹⁶

### Practical Considerations

- **Random Generation Is Impractical**: Generating random 12-word phrases and finding matches is practically impossible
- **Cryptographic Security**: Modern cryptocurrencies are designed with security in mind, making brute force attacks infeasible

### Conclusion

- It is theoretically possible to find a 12-word recovery phrase by luck or by generating random phrases
- The probability of success is so low that it is effectively impossible
- Even with the most powerful computational resources, the time required would exceed the age of the universe
- Cryptocurrencies rely on this extremely low probability to ensure wallet key security
- It is virtually impossible to guess or brute-force someone's private key or recovery phrase

## Assignments

### 1. Adding support for ETH

Given we just derived a few public keys in SOL, here's how to derive Ethereum public keys:

```javascript
import { ethers } from "ethers";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";

const mnemonic = generateMnemonic();
const seed = mnemonicToSeedSync(mnemonic);

// Derive multiple Ethereum addresses from the same seed
for (let i = 0; i < 4; i++) {
  const path = `m/44'/60'/0'/0/${i}`; // Standard ETH derivation path
  const wallet = ethers.HDNodeWallet.fromSeed(seed).derivePath(path);
  console.log(`Address ${i}: ${wallet.address}`);
}
```

### 2. Creating a web based wallet

Create a simple web-based wallet application with the following features:

#### Requirements

- Allow users to generate a new mnemonic phrase
- Support adding multiple wallet addresses (both SOL and ETH)
- Display public keys for each derived wallet
- Enable users to switch between different derivation paths

#### Suggested Implementation Steps

1. Create a UI for mnemonic generation and display
2. Implement wallet derivation for both SOL and ETH
3. Add functionality to store and manage multiple addresses
4. Display public keys in a user-friendly format
