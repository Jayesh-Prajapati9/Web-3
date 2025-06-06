import "./App.css";
import { TokenLaunchpad } from "./components/TokenLaunchpad";
import { WalletAdapter } from "./components/WalletAdapter";

function App() {
	return (
		<WalletAdapter>
			<TokenLaunchpad></TokenLaunchpad>
		</WalletAdapter>
	);
}

export default App;
