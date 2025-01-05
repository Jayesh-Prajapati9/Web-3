# Week 1 - Bitcoin Whitepaper Overview

> 💡 **Paper Details**  
> **Title:** Bitcoin: A Peer-to-Peer Electronic Cash System  
> **Author:** Satoshi Nakamoto  
> **Published:** October 31, 2008

## Introduction

### Problem Statement

- Create a purely peer-to-peer version of electronic cash
- Enable direct online payments between parties without financial institutions
- Eliminate need for trusted third parties
- Solve the double spending problem in digital currencies

## Defining Electronic Coins in Bitcoin

![Electronic Coin Concept](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F4cb423d8-db8c-4e12-995f-c2993ab99466%2Fimage.png?table=block&id=8136969c-ff4b-4b94-94f5-0455f9a987bc&cache=v2)


### Concept of an Electronic Coin

- Defined as a chain of digital signatures
- Represents complete ownership history of the coin

### How Ownership is Transferred

#### Transaction Structure

- Owner signs digital hash of previous transaction
- Hash includes:
  - Previous transaction (proof of acquisition)
  - Public key of next owner

#### Digital Signatures

- Created using owner's private key
- Added to coin's chain for transfer
- Hash ensures transaction immutability
- Public key serves as recipient address

### Verification of Ownership

- Payee verifies authenticity through:
  - Signature verification
  - Ownership chain validation

## Peer-to-Peer Network and Proof-of-Work (PoW)

![P2P Network](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F7d5f1c85-5d40-4a40-9b5b-aa0216190a98%2Fimage.png?table=block&id=be7d24f8-dcba-477f-8ae2-f4e6b4fe3d47&cache=v2)

### Network Operation

- Nodes validate and relay transactions
- Transactions are timestamped and hashed
- Blockchain secured through proof-of-work
- Miners solve cryptographic puzzles

### What is Proof-of-Work?

- Cryptographic mechanism requiring computational work
- Based on Hashcash (Adam Back)
- Uses SHA-256 hash function
- Difficulty adjusted by required leading zero bits

### Longest Chain Rule

- Longest chain represents valid transaction history
- Requires majority of CPU power from honest nodes
- Confirmed transactions become immutable

## Network Structure and Operation

### Design Principles

- Minimal structure required
- Nodes can join/leave freely
- Best-effort broadcasting
- Longest PoW chain is authoritative

### Economic Incentives

- Block rewards and transaction fees
- Fixed supply of 21 million coins
- Halving events every ~4 years

### Security Considerations

- Requires honest nodes > 51% CPU power
- Public ledger visible to all participants
- Protection against double-spending

## Applications and Implications

- Enables true financial decentralization
- Trust based on cryptography, not institutions
- Global, borderless currency
- Foundation for DeFi ecosystem

> 💡 **Additional Resource**  
> [The Bitcoin Whitepaper | Fully Explained (With Animations!)](youtube.com)
