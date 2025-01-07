# Week 3 - Creating a web based wallet, RPCs [16 Aug 2024]

## Course Details
- **Class Slides**: [Slides](/Week%203/Notes.md) 
- **Assignment**: Creating a web based wallet 


## Topics Covered So Far
### Cohort Student's assignment submissions [Examples]
#### Example Web Wallets:
- [Wallet-Kosh](https://wallet-kosh.vercel.app/)
- [Creepy Wallet](https://kitsunekode-creepy-wallet-sand.vercel.app/)
- [GitHub: ETH Wallet Generator](https://github.com/Fardeen26/OptiMask-Wallet)
### Keccak-256
Keccak-256 is a cryptographic hash function used extensively in Ethereum.
Try it out here: [Keccak-256 Online Tool](https://emn178.github.io/online-tools/keccak_256.html)

#### Properties
- **Collision Resistance**: Designed to make it extremely difficult to find two inputs that produce the same hash. While collisions are theoretically possible, they are extremely unlikely.
- **Pre-Image Resistance**: Nearly impossible to reverse the hash to find the original input, although brute-force attacks are still possible.
- **Key Length**: Outputs a 256-bit hash value, which makes brute-force attacks difficult.
- **Implementation**: Ensure the Keccak-256 implementation is secure and up to date.

### Ethereum (ETH)
![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F116808dc-bf19-4efa-bedd-4bf0a36a0026%2Fimage.png?table=block&id=39b85535-a47b-40a0-a523-69a557cbc449&cache=v2)

#### Ethereum Addresses
**Public Address**: 20 bytes (e.g., 0x8BCd4591F46e809B15A490F5C6eD031FDDE0bee0)

**Generation Process**:
1. Generate a public key using elliptic curve cryptography.
2. Hash the public key using Keccak-256.
3. Take the last 20 bytes of the hash.
4. Convert to hexadecimal and prefix with '0x'.

**References**:
- Backpack Implementation
- Ethers.js Implementation

### Solana (SOL)
![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2Fb080ff6c-ea71-44cf-a62e-dec838580abf%2Fimage.png?table=block&id=9c286512-4ff7-49e6-bd1d-dc7e6972a549&cache=v2)

#### Solana Addresses
**Public Keys**: 32 bytes (e.g., 5W4oGgDHqir3KNEcmiMn6tNHmbWjC7PgW11sk4AwWbpe)

> Note: Unlike Ethereum, Solana addresses do not require hashing/chopping.

### Frontend vs Backend
![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F455f50f2-fa43-4023-9f8e-a1b436addb6a%2Fimage.png?table=block&id=433617ee-619a-4e01-8443-4f534616c941&cache=v2)

- **Backend Servers**: Run your backend logic.
- **Frontend**: Interacts with backend servers via HTTP requests.
- Example of a traditional backend request: [JSONPlaceholder API]()

**Postman**: Allows sending requests to backend servers without using a browser.
![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2Fa2ef2a5c-3b02-44c4-9928-e8b9a8772669%2Fimage.png?table=block&id=4cab468a-8328-4dbe-b874-95b5d04c687b&cache=v2)

Something similar happens on block explorers as well. When you query an address it sends a request on blockchain network.
- [Solscan](https://solscan.io/?__cf_chl_tk=rKQfxDGCsaK.MZQu5kbHv5uRX41pNOMHEDySK5lGuVI-1736284974-1.0.1.1-lbbAU4Ms6wPRO3ns4bDvMEN7kT_ghHGiAUp1R_eikgE)
- [Ethereum (ETH) Blockchain Explorer](etherscan.io)

### RPC & JSON-RPC
![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F0e014dc9-52a4-461b-851e-27ce8761f52b%2Fimage.png?table=block&id=5a1426f6-0b71-491b-92a8-6fd5e2ae6b84&cache=v2)

**JSON-RPC**: A remote procedure call (RPC) protocol encoded in JSON. Allows client-server communication over a network.

**Use Cases**:
- Sending transactions to the blockchain.
- Fetching blockchain data (e.g., balances).

> 💡 An RPC (Remote Procedure Call) server is not inherently part of the blockchain network itself, nor does it participate in staking or consensus mechanisms

#### Additional RPC Methods
- GRPC
- TRPC

> 💡 [JSON-RPC Specification]()
> Read the JSON-RPC Specification

### RPC Server
![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feb4566ea-3499-40d2-868e-56036b453147%2F2a0608f1-34c7-4261-aee3-58c5d217180d%2Fimage.png?table=block&id=674b0b97-7df7-4f36-a074-cde0a0ce7cfe&cache=v2)

**RPC Server**: Allows external clients to interact with the blockchain network. It acts as an intermediary between the blockchain and external applications.
- It is easy to scale an RPC server.
- Typically, it's best to use an RPC server, but it's also possible to create your own—though this approach is generally not recommended.

**Important Note**: An RPC server does not participate in staking or consensus mechanisms.

#### Common RPC Providers
- [Quicknode](https://www.quicknode.com) - Blockchain infrastructure powering secure, decentralized innovation.
- [Alchemy](https://www.alchemy.com) - The web3 development platform
- [Helius](https://helius.xyz) - Solana's Leading RPC & API Platform
- [Infura](https://infura.io) - Web3 Development Platform | IPFS API & Gateway | Blockchain Node Service

#### Common RPC Calls
**Solana**
- Get Account Info:
- Get Balance:
- Get Transaction Count:

**Ethereum**
- Get Balance:
- Get Latest Block:
- Get Block by Number:

### Wei and Lamports
When working with financial applications, we avoid storing user balances in decimals to prevent floating-point errors.
Instead, we use smaller units, such as wei for ETH or lamports for SOL, to accurately represent and display the balance.

#### Ethereum (ETH)
- **Wei**: The smallest unit of Ether.
  - Value: 1 Ether (ETH) = 10^18 Wei.
- **Gwei**: A larger unit of Ether, commonly used in gas prices.
  - Value: 1 Ether = 10^9 Gwei

#### Solana (SOL)
- **Lamports**: The smallest unit of SOL.
  - Value: 1 SOL = 10^9 Lamports

Example:
```javascript

const { LAMPORTS_PER_SOL } = require("@solana/web3.js")
console.log(LAMPORTS_PER_SOL)

```