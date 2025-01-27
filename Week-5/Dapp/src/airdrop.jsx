import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  // alert(wallet.publicKey.toString())

  async function sendAmountToUser() {
    const amount = document.getElementById("amount").value;
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
    alert(amount + " SOL Airdroped"+wallet.publicKey.toString());
  }
  return (
    <div>
      <br />
      <br />
      <input type="text" id="amount" placeholder="Enter The Amount" />
      <br />
      <br />
      <button onClick={sendAmountToUser}>Send Amount</button>
    </div>
  );
}
