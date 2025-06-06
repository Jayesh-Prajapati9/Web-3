import { useState } from "react";
export function TokenLaunchpad() {
	const [name, setName] = useState("");
	const [symbol, setSymbol] = useState("");
	const [supply, setSupply] = useState("");
	const [imgUrl, setImgUrl] = useState("");
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			<h1>Solana Token Launchpad</h1>
			<input
				className="inputText"
				type="text"
				placeholder="Name"
				onChange={(e) => setName(e.target.value)}
			></input>{" "}
			<br />
			<input
				className="inputText"
				type="text"
				placeholder="Symbol"
				onChange={(e) => setSymbol(e.target.value)}
			></input>{" "}
			<br />
			<input
				className="inputText"
				type="text"
				placeholder="Image URL"
				onChange={(e) => setImgUrl(e.target.value)}
			></input>{" "}
			<br />
			<input
				className="inputText"
				type="text"
				placeholder="Initial Supply"
				onChange={(e) => setSupply(e.target.value)}
			></input>{" "}
			<br />
			<button
				className="btn"
				onClick={() => {
					 	
				}}
			>
				Create a token
			</button>
		</div>
	);
}
