import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import {
	WalletModalProvider,
	WalletMultiButton,
	WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { TokenLaunchpad } from "./TokenLaunchpad";
import "@solana/wallet-adapter-react-ui/styles.css";
export const WalletAdapter = ({children}) => {
	return (
		<>
			<div>
				<ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
					<WalletProvider wallets={[]} autoConnect>
						<WalletModalProvider>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									flexDirection: "row",
									width:"100vw"
								}}
							>
								<WalletMultiButton />
								{children}
								<WalletDisconnectButton />
							</div>
						</WalletModalProvider>
					</WalletProvider>
				</ConnectionProvider>
			</div>
		</>
	);
};
