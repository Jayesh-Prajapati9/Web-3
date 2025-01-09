# Why solana?

Until now, we’ve gone through the following - 

1. What are blockchains, how do they work under the hood
2. Public and Private keys, how you can use them to `sign` transactions that miners use to `verify` and credit/debit balances

In today’s class, we’ll understand about one of the biggest use-case that blockchains like Solana/ETH solve for - Programs/Smart contracts.

### Programs/Smart contracts

ETH was one of the first blockchains to introduce the `concept` of decentralized `state` / `programs`. These are popularly known as `smart contracts` on the ETH blockchain.

- Here is a simple ETH smart contract
    
    ```jsx
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;
    
    contract Counter {
        uint public count;
    
        // Constructor to initialize count
        constructor() {
            count = 0;
        }
    
        // Function to increment the count
        function increment() public {
            count += 1;
        }
    
        // Function to decrement the count
        function decrement() public {
            require(count > 0, "Count cannot be negative");
            count -= 1;
        }
        
        // Function to get the current count
        function getCount() public view returns (uint) {
            return count;
        }
    }
    
    ```
    
- Here is a simple Node.js HTTP server that does something similar
    
    ```jsx
    const express = require('express');
    const app = express();
    const port = 3000;
    
    // Middleware to parse JSON bodies
    app.use(express.json());
    
    // Initialize count
    let count = 0;
    
    // Route to increment the count
    app.post('/increment', (req, res) => {
      count += 1;
      res.json({ count });
    });
    
    // Route to decrement the count
    app.post('/decrement', (req, res) => {
      if (count > 0) {
        count -= 1;
        res.json({ count });
      } else {
        res.status(400).json({ error: 'Count cannot be negative' });
      }
    });
    
    // Route to get the current count
    app.get('/count', (req, res) => {
      res.json({ count });
    });
    
    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
    
    ```
    

HTTP Servers are deployed on cloud providers like `GCP, Azure`

Smart contracts/programs are deployed on the `blockchain` 

The way solana programs work is significantly different from other blockchains. Lets understand how.

# Accounts on Solana

### Accounts

On the Solana blockchain, an "account" is a fundamental data structure used to store various types of information.

1. **Data Storage**: Accounts on Solana are used to store data required by programs (smart contracts) or to maintain state
2. **Lamports**: Accounts hold a balance of Solana’s native cryptocurrency, lamports. Lamports are used to pay for transaction fees and to rent the space that the account occupies on the blockchain. 
    
    ![Screenshot 2024-08-23 at 4.16.27 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F434a5ed0-2881-48c8-8674-1b6f3a17ec72%2FScreenshot_2024-08-23_at_4.16.27_PM.png?table=block&id=082253cf-73c1-4b09-894f-c2f2f6a17820&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
3. **Programs:**  On Solana, programs are special accounts that contain executable code. These accounts are distinct from regular data accounts in that they are designed to be executed by the blockchain when triggered by a transaction.

**Account with `data` and `lamports` but no data -** https://explorer.solana.com/address/4GQsAP5jYi5ysGF1GEnWiV3zJHZLRcLWhLCSuim6aAkL

![Screenshot 2024-08-23 at 4.22.41 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Feb95e30b-58a5-4842-bdce-fb3c7ca2059e%2FScreenshot_2024-08-23_at_4.22.41_PM.png?table=block&id=61112056-3a39-4c82-8405-11d0ab4a316c&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)

**Account with `lamports` but no data - https://solscan.io/account/Eg4F6LW8DD3SvFLLigYJBFvRnXSBiLZYYJ3KEePDL95Q**

![Screenshot 2024-08-23 at 4.23.20 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd7359fdd-7820-4783-b8be-9b1c89181ec6%2FScreenshot_2024-08-23_at_4.23.20_PM.png?table=block&id=ee96f37f-b042-4142-b5a6-d7949a7524a3&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)

**Program**

https://solscan.io/account/TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

![Screenshot 2024-08-23 at 4.23.20 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F6528ffec-cec6-4304-8c42-7505f42c0332%2FScreenshot_2024-08-23_at_4.18.38_PM.png?table=block&id=ec9b4d7c-17b2-4843-bc9e-5ef9464ed8ea&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)

# Install solana cli

You can install the solana cli locally by running the following command

```jsx
sh -c "$(curl -sSfL https://release.anza.xyz/stable/install)"
```

**For Windows people -** 

https://github.com/solana-labs/solana/releases

![Screenshot 2024-08-23 at 4.26.40 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F6ef2f1d4-2c00-42ce-95ed-c4ecce375dde%2FScreenshot_2024-08-23_at_4.26.40_PM.png?table=block&id=5744bce9-69c9-4127-ba91-866b2a07fcee&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)

**Unzip and you should see all the .exe files**

![Screenshot 2024-08-23 at 4.26.40 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4069f7b2-9035-4150-96da-146f95ef9d14%2FScreenshot_2024-08-23_at_4.27.07_PM.png?table=block&id=995021cf-3840-45c8-95bd-636d9b85047e&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)

# Web2 Data model

In the web2 world, you store `data` in SQL/NoSQL databases. Here is an example of how you might create tables for a `token balance` app

![Screenshot 2024-08-23 at 4.26.40 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F0e879213-0ceb-49c5-8dd6-038025fd8374%2FScreenshot_2024-08-23_at_4.34.57_PM.png?table=block&id=5ba04f74-8282-447c-a89d-c4acec81c01e&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)

# Data model on Solana

Solana stores all the data of the `same app` / `same program` in various accounts.

![Screenshot 2024-08-23 at 4.38.03 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F4dfb1165-12fb-4c2c-829d-7ac1d56384a8%2FScreenshot_2024-08-23_at_4.38.03_PM.png?table=block&id=b3b79777-2624-4bbb-8c91-3257337f7178&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)

### Transaction vs Instruction

**Transactions**

A transaction in Solana is a bundle that includes one or more instructions. Transactions are used to submit operations or changes to the network. They can be simple, such as transferring SOL between accounts, or complex

**Instructions**

The core operations that the transaction will execute.

<aside>
💡 There are more concepts like `recentBlockchash` and `signers` , `writeable` that we we will eventually get to.

</aside>

### How to create an account with some data

```jsx
const solanaWeb3 = require('@solana/web3.js');
const fs = require("fs")
const { Keypair, Connection, SystemProgram, Transaction, sendAndConfirmTransaction } = solanaWeb3;

// Connect to Solana devnet
const connection = new Connection(solanaWeb3.clusterApiUrl('devnet'), 'confirmed');

// Generate a new keypair for the data account
const dataAccount = Keypair.generate();
const payer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(fs.readFileSync(`/Users/harkiratsingh/.config/solana/id.json`, "utf-8")))); // This will be the account paying for the transaction

async function createAccount() {
    // Create a transaction to create and fund the account
    const tx = new Transaction().add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubkey: dataAccount.publicKey,
            lamports: await connection.getMinimumBalanceForRentExemption(1000), // Amount to fund the account
            space: 1000, // Space in bytes to allocate for data
            programId: SystemProgram.programId,
        })
    );

    // Send the transaction to the network
    const txId = await sendAndConfirmTransaction(connection, tx, [payer, dataAccount]);

    console.log(`Created account with transaction ID: ${txId}`);

}

createAccount();
```

# Creating a token

![Screenshot 2024-08-28 at 7.09.00 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3552b4c1-bb13-4b34-81a8-2b96928ad7de%2FScreenshot_2024-08-28_at_7.09.00_PM.png?table=block&id=b9891415-58e8-414b-a2a6-a1031d6e99b0&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)

Creating `your own token` (100x coin lets say) requires understanding the `Token Program` that is written by the engineers at Solana - https://github.com/solana-labs/solana-program-library

Specifically, the way to create a `token` requires you to 

1. Create a token mint
2. Create an `associated token account` for this mint and for a specific user
3. Mint tokens to that user.

### Token mint

It’s like a `bank` that has the athority to create more coins. It can also have the authority to `freeze coins`.

### Associated token account

Before you can ask other people to send you a token, you need to create an `associated token account` for that token and your public key

Reference - https://spl.solana.com/token 

- Create a new cli wallet
    
    ```jsx
    solana-keygen new
    ```
    
- Set the RPC url
    
    ```jsx
    solana config set --url https://api.devnet.solana.com
    ```
    
- Airdrop yourself some SOL
    
    ```jsx
     solana airdrop 1
    ```
    
- Check your balance
    
    ```jsx
    solana balance
    ```
    
- Create token mint
    
    ```jsx
    spl-token create-token
    ```
    
    ![Screenshot 2024-08-23 at 4.44.15 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7fd32bfe-7cd1-4a76-9428-c3e5c58aa363%2FScreenshot_2024-08-23_at_4.44.15_PM.png?table=block&id=dedd117f-feb8-4eea-828e-6e9e1a797fe7&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
- Verify token mint on chain
    
    ![Screenshot 2024-08-23 at 4.42.55 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc536405d-3af7-4272-8eec-d9df090d7c1c%2FScreenshot_2024-08-23_at_4.42.55_PM.png?table=block&id=4b5b96c7-eb4d-4be7-85ed-f6310becf9d2&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
    ![Screenshot 2024-08-23 at 4.58.03 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3df62954-78fb-49fc-bde6-2cb1297b7ec4%2FScreenshot_2024-08-23_at_4.58.03_PM.png?table=block&id=200352ec-0303-48d9-88fe-92dc4118a2a1&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
    - Check the token on solana fm https://solana.fm/address/ChNkv9iW5pZJ1YAsNswC2CrdMUkFJBUbRWinjdLvKpXA/transactions?cluster=devnet-solana
    - Use the `getAccountInfo` to see the `data` and `lamports` in the account
        
        ![Screenshot 2024-08-23 at 4.58.42 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Facb8eded-aa54-4fb2-ad5d-07b4e6de37f0%2FScreenshot_2024-08-23_at_4.58.42_PM.png?table=block&id=665c5797-80c1-4410-b2d1-0306cdd5d48d&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1300&userId=&cache=v2)
        
- Check the supply of the token
    
    ```jsx
    spl-token supply AQoKYV7tYpTrFZN6P5oUufbQKAUr9mNYGe1TTJC9wajM
    ```
    
- Create an associated token account
    
    ```jsx
    spl-token create-account ChNkv9iW5pZJ1YAsNswC2CrdMUkFJBUbRWinjdLvKpXA
    ```
    
    ![Screenshot 2024-08-23 at 5.18.14 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F082a2826-1226-4896-91d0-a8e7cac71916%2FScreenshot_2024-08-23_at_5.18.14_PM.png?table=block&id=b95e120b-4920-470c-a943-2322220366a3&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
- Mint some tokens to yourself
    
    ```jsx
    spl-token mint  ChNkv9iW5pZJ1YAsNswC2CrdMUkFJBUbRWinjdLvKpXA 100
    ```
    

- Check your balances in the explorer
    
    ![Screenshot 2024-08-23 at 5.20.41 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe6573e13-5780-44cf-914a-ffd637cc1ced%2FScreenshot_2024-08-23_at_5.20.41_PM.png?table=block&id=1f45e924-8159-45f0-bcd8-784703d6e8de&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
- Import the token in Phantom and see the balances
    
    ![Screenshot 2024-08-23 at 5.22.13 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5049782a-d22b-4e2b-8039-82cf01c1aa5c%2FScreenshot_2024-08-23_at_5.22.13_PM.png?table=block&id=993dda88-11c3-448c-97c2-2a697e7113a3&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)

    # Equivalent code in JS

- Create a new cli wallet
    
    ```jsx
    solana-keygen new
    ```
    
- Set the RPC url
    
    ```jsx
    solana config set --url https://api.devnet.solana.com
    ```
    
- Create an empty JS file
    
    ```jsx
     npm init -y
     touch index.js
    ```
    
- Install dependencies
    
    ```jsx
    npm install @solana/web3.js @solana/spl-token
    ```
    
- Write a function to airdrop yourself some solana
    
    ```jsx
    const {Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey} = require('@solana/web3.js');
    
    const connection = new Connection(clusterApiUrl('devnet'));
    
    async function airdrop(publicKey, amount) {
        const airdropSignature = await connection.requestAirdrop(new PublicKey(publicKey), amount);
        await connection.confirmTransaction({signature: airdropSignature})
    }
    
    airdrop("GokppTzVZi2LT1MSTWoEprM4YLDPy7wQ478Rm3r77yEw", LAMPORTS_PER_SOL).then(signature => {
        console.log('Airdrop signature:', signature);
    });
    ```
    
- Check your balance
    
    ```jsx
    solana balance
    ```
    
- Create token mint
    
    ```jsx
    const { createMint } = require('@solana/spl-token');
    const { Keypair, Connection, clusterApiUrl,  TOKEN_PROGRAM_ID } = require('@solana/web3.js');
    
    const payer = Keypair.fromSecretKey(Uint8Array.from([102,144,169,42,220,87,99,85,100,128,197,17,41,234,250,84,87,98,161,74,15,249,83,6,120,159,135,22,46,164,204,141,234,217,146,214,61,187,254,97,124,111,61,29,54,110,245,186,11,253,11,127,213,20,73,8,25,201,22,107,4,75,26,120]));
    
    const mintAthority = payer;
    
    const connection = new Connection(clusterApiUrl('devnet'));
    
    async function createMintForToken(payer, mintAuthority) {
        const mint = await createMint(
            connection,
            payer,
            mintAuthority,
            null,
            6,
            TOKEN_PROGRAM_ID
        );
        console.log('Mint created at', mint.toBase58());
        return mint;
    }
    
    async function main() {
        const mint = await createMintForToken(payer, mintAthority.publicKey);
    }
    
    main();
    
    ```
    
    ![Screenshot 2024-08-23 at 4.44.15 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7fd32bfe-7cd1-4a76-9428-c3e5c58aa363%2FScreenshot_2024-08-23_at_4.44.15_PM.png?table=block&id=32de1c4f-c8dc-47b2-871c-bdda598958ca&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
- Verify token mint on chain
    
    ![Screenshot 2024-08-23 at 4.42.55 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc536405d-3af7-4272-8eec-d9df090d7c1c%2FScreenshot_2024-08-23_at_4.42.55_PM.png?table=block&id=1c75867d-18bb-4b0e-b98d-d03fca9fce5a&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
    ![Screenshot 2024-08-23 at 4.58.03 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3df62954-78fb-49fc-bde6-2cb1297b7ec4%2FScreenshot_2024-08-23_at_4.58.03_PM.png?table=block&id=f689e888-c545-441e-b2a1-94d99f978204&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
    - Check the token on solana fm https://solana.fm/address/ChNkv9iW5pZJ1YAsNswC2CrdMUkFJBUbRWinjdLvKpXA/transactions?cluster=devnet-solana
    - Use the `getAccountInfo` to see the `data` and `lamports` in the account
        
        ![Screenshot 2024-08-23 at 4.58.42 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Facb8eded-aa54-4fb2-ad5d-07b4e6de37f0%2FScreenshot_2024-08-23_at_4.58.42_PM.png?table=block&id=469a26ac-e0ce-4a60-9cbf-416a9f760ad0&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1300&userId=&cache=v2)
        
- Create an associated token account, mint some tokens
    
    ```jsx
    const { createMint, getOrCreateAssociatedTokenAccount, mintTo } = require('@solana/spl-token');
    const { Keypair, Connection, clusterApiUrl,  TOKEN_PROGRAM_ID, PublicKey } = require('@solana/web3.js');
    
    const payer = Keypair.fromSecretKey(Uint8Array.from([102,144,169,42,220,87,99,85,100,128,197,17,41,234,250,84,87,98,161,74,15,249,83,6,120,159,135,22,46,164,204,141,234,217,146,214,61,187,254,97,124,111,61,29,54,110,245,186,11,253,11,127,213,20,73,8,25,201,22,107,4,75,26,120]));
    
    const mintAthority = payer;
    
    const connection = new Connection(clusterApiUrl('devnet'));
    
    async function createMintForToken(payer, mintAuthority) {
        const mint = await createMint(
            connection,
            payer,
            mintAuthority,
            null,
            6,
            TOKEN_PROGRAM_ID
        );
        console.log('Mint created at', mint.toBase58());
        return mint;
    }
    
    async function mintNewTokens(mint, to, amount) { 
        const tokenAccount = await getOrCreateAssociatedTokenAccount(
            connection,
            payer,
            mint,
            new PublicKey(to)
          );
    
          console.log('Token account created at', tokenAccount.address.toBase58());
          await mintTo(
            connection,
            payer,
            mint,
            tokenAccount.address,
            payer,
            amount
          )
          console.log('Minted', amount, 'tokens to', tokenAccount.address.toBase58());
    }
    
    async function main() {
        const mint = await createMintForToken(payer, mintAthority.publicKey);
        await mintNewTokens(mint, mintAthority.publicKey, 100);    
    }
    
    main();
    
    ```
    
    ![Screenshot 2024-08-23 at 5.18.14 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F082a2826-1226-4896-91d0-a8e7cac71916%2FScreenshot_2024-08-23_at_5.18.14_PM.png?table=block&id=c4d4f041-ba5c-4e77-845f-80ab4a5d28ea&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
- Check your balances in the explorer
    
    ![Screenshot 2024-08-23 at 5.20.41 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fe6573e13-5780-44cf-914a-ffd637cc1ced%2FScreenshot_2024-08-23_at_5.20.41_PM.png?table=block&id=465ccf19-7364-4b35-9410-c6e00b61c364&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    
- Import the token in Phantom and see the balances
    
    ![Screenshot 2024-08-23 at 5.22.13 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5049782a-d22b-4e2b-8039-82cf01c1aa5c%2FScreenshot_2024-08-23_at_5.22.13_PM.png?table=block&id=b0e28e5a-9848-46f6-b232-125c8bcdef3e&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=670&userId=&cache=v2)

    # Equivalent code in rust/python/go

Solana has libraries similar to `@solana/web3.js` in Rust, Python that would let you do the same thing.

In the end, they all are sending requests to an RPC server.

![Screenshot](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F5b87d0f7-5319-4f0e-a40a-17fe96efa685%2FScreenshot_2024-08-23_at_6.04.48_PM.png?table=block&id=b642e77c-c50d-426f-870b-f0771fcdfaa0&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1420&userId=&cache=v2)

# PDAs

When you created an `associated token account` , you actually created a PDA - 

https://github.com/solana-labs/solana-program-library/blob/master/associated-token-account/program/src/lib.rs#L71

JS - https://github.com/solana-labs/solana-program-library/blob/ab830053c59c9c35bc3a727703aacf40c1215132/token/js/src/state/mint.ts#L171

# Token-22 program

Ref - https://spl.solana.com/token-2022

A token program on the Solana blockchain, defining a common implementation for fungible and non-fungible tokens.

The Token-2022 Program, also known as Token Extensions, is a superset of the functionality provided by the [Token Program](https://spl.solana.com/token).

- Create token mint
    
    ```jsx
     spl-token create-token  --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb
    ```
    
- Create an associated token account
    
    ```jsx
    spl-token create-account 8fTM5XYRaoTJU9PLUuyakF3EypQ4RXL5HxKtiw2z9pQQ
    ```
    
- Mint the tokens
    
    ```jsx
    spl-token mint 8fTM5XYRaoTJU9PLUuyakF3EypQ4RXL5HxKtiw2z9pQQ  100
    ```

    # Token-22 with metadata

https://cdn.100xdevs.com/metadata.json

- Create a token with metadata enabled
    
    ```jsx
    spl-token --program-id TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb create-token --enable-metadata
    ```
    
- Create metadata
    
    ```jsx
    spl-token initialize-metadata pXfZ6Hg2s78m1iSRVsdzos9TmfkqkQdv5MmQrr77ZQK 100xx 100xxx https://cdn.100xdevs.com/metadata.json
    ```
    
- Create ATA
    
    ```jsx
     spl-token create-account pXfZ6Hg2s78m1iSRVsdzos9TmfkqkQdv5MmQrr77ZQK
    ```
    
- Mint
    
    ```jsx
     spl-token mint 1000
    ```
    
- Check out the token in your wallet
    
    ![Screenshot 2024-08-23 at 6.53.42 PM.png](https://petal-estimate-4e9.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F7f837fe1-7a2c-4a8d-b295-1e6bce34d1b7%2FScreenshot_2024-08-23_at_6.53.42_PM.png?table=block&id=ae35dfbd-cf56-489a-b546-e451b43c5fee&spaceId=085e8ad8-528e-47d7-8922-a23dc4016453&width=1360&userId=&cache=v2)
    

## Assignment

1. Show all the tokens that the user has in our web based wallet
2. Create a token launchpad website that lets users launch tokens (take things like decimals, freeze athority as inputs from the user)